import React from 'react'
import { useDrop } from 'react-dnd'
import TasksList from './TasksList'


const TaskBoard = ({ state, card, moveCard }) => {
    const [{ isOver }, dropRef] = useDrop({
        accept: "card",
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        })
    })
    return (
        <div className='board'
            ref={dropRef}
        >
            {card ? <TasksList todos={state} /> : 'box'}
        </div>
    )
}


export default TaskBoard