import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react'
import taskReducer from '../../components/tasks/task-reducer';

import TasksList from '../../components/tasks/TasksList';
import { TaskContext } from '../../tasks-context';


const TasksPage = () => {
    const [state, dispatch] = useReducer(taskReducer, JSON.parse(localStorage.getItem("todos")) || [])
    const [todoTitle, setTodoTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
        console.log(state)
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
            <div className='todos-list'>
                <div className='create-todo'>
                    <input
                        type="text"
                        className='create-todo__input'
                        value={todoTitle}
                        onChange={event => setTodoTitle(event.target.value)}
                        onKeyPress={addTodo}
                    />
                    <button className='create-todo__btn'>Создать задачу</button>
                </div>
                <TasksList todos={state} />
            </div>
        </TaskContext.Provider>
    )
}


export default TasksPage