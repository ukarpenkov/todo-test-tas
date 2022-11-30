import React, { useContext } from 'react';
import { TaskContext } from '../../tasks-context';

const TasksItem = ({ title, id, done }) => {
    const { dispatch } = useContext(TaskContext)


    const cls = ['task-item']
    if (done) {

        cls.push('completed')
    }

    return (
        <li className={cls.join(' ')}>
            <input
                className='todo-item__checkbox'
                type="checkbox"
                defaultChecked={done}
                onChange={() => dispatch({
                    type: 'TOGGLE_TASK',
                    payload: id
                })} />
            <span className='todo-item__todo-name'>{title}</span>
            <button className='todo-item__delete-todo'
                onClick={() => dispatch({
                    type: "REMOVE_TASK",
                    payload: id
                })}>удалить задачу</button>
        </li>
    )
}


export default TasksItem