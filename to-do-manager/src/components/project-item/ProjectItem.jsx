import React, { useState } from 'react';

const ProjectItem = ({ name, done, id }) => {
    const [checked, setChecked] = useState(done)
    const cls = ['projects-item']
    if (checked) {
        cls.push('completed')
    }
    return (
        <li key={id} className={cls.join(' ')}>
            <input className='projects-item__checkbox'
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)} />
            <span className='projects-item__project-name'>{name}</span>
        </li>
    )
}


export default ProjectItem