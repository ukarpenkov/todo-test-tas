import React, { useState } from 'react'
import ProjectItem from '../../components/project-item/ProjectItem'

const ProjectsPage = (props) => {

    const [projects, setProjects] = useState([{ name: 'Проект 1', done: false, id: 1 }, { name: 'Проект 2', done: true, id: 2 }]);
    const [projectTitle, setProjectTitle] = useState('');
    const addProject = event => {
        if (event.key === 'Enter') {
            setProjects([
                ...projects,
                { name: projectTitle, done: false, id: Date.now() }
            ])
            setProjectTitle('')
        }
    }

    return (
        <div className='projects-list'>
            <div className='create-project'>
                <input type="text" className='create-project__input' value={projectTitle} onChange={event => setProjectTitle(event.target.value)}
                    onKeyPress={addProject} />
                <button className='create-project__btn'>создать проект</button>
            </div>
            <ul className='projects'>
                {projects.map(project =>
                (
                    <ProjectItem {...project} />
                ))}

            </ul>
        </div>
    )
}


export default ProjectsPage
// const handleProjectStatusChange = id => {
//     const updatedProjects = projects.map(projects => {
//         if (projects.id === id) {
//             return {
//                 ...projects,
//                 done: !projects.done
//             }
//         }
//         return projects
//     })

// }