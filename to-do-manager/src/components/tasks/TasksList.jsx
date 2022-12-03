import React from 'react';
import { useDrag } from 'react-dnd';
import TasksItem from './TasksItem';



const TasksList = ({ todos }) => {

    return (
        <ul className='todos'>
            {todos.map(item =>
            (
                <div
                >
                    <TasksItem key={item.id} {...item} />
                </div>
            ))}
        </ul>

    )
}

export default TasksList