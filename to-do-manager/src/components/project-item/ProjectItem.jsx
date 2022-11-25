import React from 'react';

const ProjectItem = ({ name, done, id }) => {
    return (
        <li key={id} className='projects-item'>
            <input className='projects-item__checkbox' type="checkbox" defaultChecked={done} />
            <span className='projects-item__project-name'>{name}</span>
        </li>
    )
}


export default ProjectItem