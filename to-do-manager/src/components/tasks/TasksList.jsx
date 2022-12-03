import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import TasksItem from './TasksItem';



const TasksList = ({ todos }) => {

    const [boards, setBoards] = useState([{ id: 1, title: 'queue', items: todos },
    { id: 2, title: 'development', items: [{ id: 200, title: 'hello' }] }, { id: 3, title: 'done', items: [{ id: 300, title: 'test' }] }])



    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    const dragOverHandler = (e) => {
        e.preventDefault()
        if (e.target.className === 'task-item-test') {
            e.target.style.boxShadow = '0 10px 5px black'
        }
    }
    const dragLeaveHandler = (e) => {
        e.target.style.boxShadow = 'none'
    }
    const dragStartHandler = (e, board, item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dragEndHandler = (e) => {
        e.preventDefault()
        e.target.style.boxShadow = 'none'
    }
    const dropHandler = (e, board, item) => {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }
    const dropCardHandler = (e, board) => {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    return (
        <div className='app'>
            {boards.map(board =>
                <div className='board'
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, board)}
                >
                    <h1>{board.title}</h1>
                    {board.items.map(item =>
                        <div className='task-item-test'
                            draggable={true}
                            onDragOver={e => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={e => dragStartHandler(e, board, item)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDrop={e => dropHandler(e, board, item)}



                        >{item.title} </div>)}
                </div>
            )}
        </div>
        //       {/* <ul className='todos'>
        //     {todos.map(item =>
        //     (
        //         <div
        //         >
        //             <TasksItem key={item.id} {...item} />
        //         </div>
        //     ))}
        // </ul> */}

    )
}

export default TasksList