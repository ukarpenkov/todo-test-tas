import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TasksList from '../../components/tasks/TasksList';





const TasksPage = () => {
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.tasksReducer.todos)
    console.log(todoList)
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    });
    const [todoTitle, setTodoTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const addTodo = event => {
        const newTask = { title: todoTitle, done: false, id: Date.now() }
        if (event.key === 'Enter') {
            setTodos([
                ...todos,
                newTask
            ])
            dispatch({ type: "ADD_TASK", payload: newTask })
            setTodoTitle('')
        }
    }


    return (
        <div className='todos-list'>
            <div className='create-todo'>
                <input type="text" className='create-todo__input' value={todoTitle} onChange={event => setTodoTitle(event.target.value)}
                    onKeyPress={addTodo} />
                <button className='create-todo__btn'>Создать задачу</button>
            </div>
            <TasksList todos={todos} />
        </div>
    )
}


export default TasksPage