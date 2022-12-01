import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react'
import taskReducer from '../../components/tasks/task-reducer';
import TaskCreator from '../../components/tasks/TaskCreator';
import _JSXStyle from 'styled-jsx/style'
import TasksList from '../../components/tasks/TasksList';
import { TaskContext } from '../../tasks-context';
import './style.css'


const TasksPage = () => {
    const [state, dispatch] = useReducer(taskReducer, JSON.parse(localStorage.getItem("todos")) || [{
        board: 'queue',
        tasks: [{
            id: 1,
            title: 'one',
            done: false
        }]

    }]
    )
    const [todoTitle, setTodoTitle] = useState('')
    const [isModal, setModal] = useState(false)
    // const [boards, setBoards] = useState([{ title: 'Queue', items: [] }, { title: 'Development', items: [] }, { title: 'Done', items: [] }])
    // const [currentBoard, setCurrentBoard] = useState(null)
    // const [currentItem, setCurrentItem] = useState(null)

    // const dragOverHandler = (e) => {

    // }
    // const dragLeaveHandler = (e) => { }
    // const dragStartHandler = (e, board, item) => {
    //     setCurrentBoard(board)
    //     setCurrentItem(item)
    // }
    // const dropHandler = (e, board, item) => {
    //     e.preventDefault()
    //     const currentIndex = currentBoard.items.indexOf(currentItem)
    //     currentIndex.items.splice(currentIndex, 1)
    //     const dropIndex = board.items.indexOf(item)
    //     board.items.splice(dropIndex + 1, 0, currentItem)
    //     setBoards(board.map(b => {
    //         if (b.id === board.id) {
    //             return board
    //         }
    //         if (b.id === currentBoard.id) {
    //             return currentIndex
    //         }
    //     }))

    // }
    // const dropCardHandler = (e, board) => {
    //     board.items.push(currentItem)
    //     const currentIndex = currentBoard.items.indexOf(currentItem)
    //     currentIndex.items.splice(currentIndex, 1)
    //     setBoards(board.map(b => {
    //         if (b.id === board.id) {
    //             return board
    //         }
    //         if (b.id === currentBoard.id) {
    //             return currentIndex
    //         }
    //     }))
    // }

    console.log(state)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state])

    const addTodo = event => {
        if (event.key === 'Enter') {
            dispatch({
                type: "ADD_TASK",
                payload: todoTitle
            })
            setTodoTitle('')
        }
    }


    return (
        <TaskContext.Provider value={{
            dispatch
        }}>
            <div className='task-page-wrapper'>
                <div
                    className='boards'
                // onDragOver={e => dragOverHandler(e)}
                // onDrop={e => dropCardHandler(e, board)}
                >
                    <div className='board'>
                        <div className='board__title'>
                            <h3>Queue</h3>
                        </div>
                        <div className='todos-list'>
                            <div className='create-todo'>
                                <input
                                    type="text"
                                    className='create-todo__input'
                                    value={todoTitle}
                                    onChange={event => setTodoTitle(event.target.value)}
                                    onKeyPress={addTodo}
                                />
                                <button className='create-todo__btn'
                                    onClick={() => setModal(true)}
                                >Создать задачу</button>
                            </div>
                            <TasksList todos={state.tasks} />
                            <TaskCreator
                                isVisible={isModal}
                                title="Modal Title"
                                content={<p>Add your content here</p>}
                                footer={<button>Cancel</button>}
                                onClose={() => setModal(false)}
                            />
                        </div>
                    </div>
                    <div className='board'>
                        <div className='board__title'>
                            <h3>Development</h3>
                        </div>
                    </div>
                    <div className='board'>
                        <div className='board__title'>
                            <h3>Done</h3>
                        </div>
                    </div>
                </div>
            </div>
        </TaskContext.Provider>
    )
}


export default TasksPage