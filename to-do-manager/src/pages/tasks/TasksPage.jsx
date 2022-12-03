import React, { useEffect, useReducer, useState } from 'react'
import taskReducer from '../../components/tasks/task-reducer';
import TaskBoard from '../../components/tasks/TaskBoard';
import TaskCreator from '../../components/tasks/TaskCreator';
import { TaskContext } from '../../tasks-context';
import './style.css'


const TasksPage = () => {
    const [state, dispatch] = useReducer(taskReducer, JSON.parse(localStorage.getItem("todos")) || [{
        project: 'one',
        id: 1,
        title: 'one',
        done: false,
        board: 'queue'
    }]
    )

    const [todoTitle, setTodoTitle] = useState('')
    const [isModal, setModal] = useState(false)

    const [index, setIndex] = useState(1)

    function moveCard(i) {
        setIndex(i)
    }

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
    console.log('TaskPage StateTasks', state)


    return (
        <TaskContext.Provider value={{
            dispatch
        }}>

            <div className='task-page-wrapper'>
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
                <TaskCreator
                    isVisible={isModal}
                    title="Modal Title"
                    content={<p>Add your content here</p>}
                    footer={<button>Cancel</button>}
                    onClose={() => setModal(false)}
                />
                <div
                    className='boards' >
                    <TaskBoard card={index === 1} moveCard={moveCard.bind(null, 1)} state={state}>
                        <div className='board__title'>
                            <h3>Queue</h3>
                        </div>
                    </TaskBoard >
                    <TaskBoard card={index === 2} moveCard={moveCard.bind(null, 2)} state={state}>
                        <div className='board__title'>
                            <h3>Development</h3>
                        </div>
                    </TaskBoard>
                    <TaskBoard card={index === 3} moveCard={moveCard.bind(null, 3)} state={state} >
                        <div className='board__title'>
                            <h3>Done</h3>
                        </div>
                    </TaskBoard>
                </div>

            </div>
        </TaskContext.Provider >
    )
}


export default TasksPage