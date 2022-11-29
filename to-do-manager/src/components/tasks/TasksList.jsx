import React from 'react';
import TasksItem from './TasksItem';



const TasksList = ({ todos }) => {
    return (
        <ul className='todos'>
            {todos.map(todo =>
            (
                <TasksItem key={todo.id} {...todo} />
            ))}
        </ul>

    )
}

export default TasksList