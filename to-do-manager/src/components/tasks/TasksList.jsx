import React from 'react';
import TasksItem from './TasksItem';



const TasksList = ({ todos }) => {
    console.log('taskList', todos)
    return (
        <ul className='todos'>
            {todos.map(item =>
            (
                <div
                    draggable={true}
                // onDragOver={e => dragOverHandler(e)}
                // onDragLeave={e => dragLeaveHandler(e)}
                // onDragStart={e => dragStartHandler(e, board, item)}
                // onDrop={e => dropHandler(e, board, item)}
                >
                    <TasksItem key={item.id} {...item} />
                </div>
            ))}
        </ul>

    )
}

export default TasksList