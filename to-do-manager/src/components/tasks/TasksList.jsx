import React, { useState } from 'react';
import { useEffect } from 'react';

import './style.css'

import TasksItem from './TasksItem';



const TasksList = ({ todos }) => {
    const [boards, setBoards] = useState(
        // JSON.parse(localStorage.getItem("boards")) || 
        [{ id: 1, title: 'queue', items: todos },
        { id: 2, title: 'development', items: [] }, { id: 3, title: 'done', items: [] }])
    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)
    useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(boards))

    }, [boards])



    // useEffect(() => {
    //     let tasks = JSON.parse(localStorage.getItem("todos"))
    //     let boards = JSON.parse(localStorage.getItem("boards"))
    //     setBoards(boards[0].items.push(tasks))
    // }, [boards])

    const cls = ['task-item']
    if (todos.done) {
        cls.push('completed')
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        if (e.target.className === 'task-item') {
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
        e.target.style.boxShadow = 'none'

    }
    const dropCardHandler = (e, board) => {
        console.log(board);
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
        e.target.style.boxShadow = 'none'

    }



    return (
        <div className='app'>
            {boards.map(board =>
                <div
                    key={board.id}
                    className='board'
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, board)}
                >
                    <h1>{board.title}</h1>
                    {board.items.map(item =>
                        <div
                            key={item.id}
                            className={cls.join(' ')}
                            draggable={true}
                            onDragOver={e => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={e => dragStartHandler(e, board, item)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDrop={e => dropHandler(e, board, item)}
                        >
                            <TasksItem {...item} />
                        </div>)}
                </div>
            )}
        </div>
    )
}

export default TasksList