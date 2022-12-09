import React, { useContext } from 'react';
import { TaskContext } from '../../tasks-context';
import './style.css'

const TasksItem = ({ title, id, done }) => {
    const { dispatch } = useContext(TaskContext)

    const cls = ['task-item']
    if (done) {

        cls.push('completed')
    }

    return (
        <>
            <input
                className='todo-item__checkbox'
                type="checkbox"
                defaultChecked={done}
                onChange={() => dispatch({
                    type: 'TOGGLE_TASK',
                    payload: id
                })} />
            <span className='todo-item__todo-name'>{title}</span>
            <span className='todo-item__delete-todo'
                onClick={() => dispatch({
                    type: "REMOVE_TASK",
                    payload: id
                })}>✖</span>
        </>
    )
}


export default TasksItem