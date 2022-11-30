import React from 'react';
import TasksItem from './TasksItem';



const TasksList = ({ todos }) => {
    return (
        <ul className='todos'>
            {todos.map(item =>
            (
                <TasksItem key={item.id} {...item} />
            ))}
        </ul>

    )
}

export default TasksList