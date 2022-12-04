import React, { useEffect, useReducer, useState } from 'react'
import taskReducer from '../../components/tasks/task-reducer';
import TaskCreator from '../../components/tasks/TaskCreator';
import TasksList from '../../components/tasks/TasksList';
import { TaskContext } from '../../tasks-context';
import './style.css'


const TasksPage = () => {
    const [state, dispatch] = useReducer(taskReducer, JSON.parse(localStorage.getItem("todos")) || [])

    const [todoTitle, setTodoTitle] = useState('')
    const [isModal, setModal] = useState(false)



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
                    <TasksList todos={state} />
                </div>

            </div>
        </TaskContext.Provider >
    )
}


export default TasksPage