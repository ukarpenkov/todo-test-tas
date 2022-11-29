import React, { useState } from 'react';

const TasksItem = ({ title, done, id }) => {
    const [checked, setChecked] = useState(done)
    const cls = ['projects-item']
    if (checked) {
        cls.push('completed')
    }
    return (
        <li key={id} className={cls.join(' ')}>
            <input className='todo-item__checkbox'
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)} />
            <span className='todo-item__todo-name'>{title}</span>
        </li>
    )
}


export default TasksItem