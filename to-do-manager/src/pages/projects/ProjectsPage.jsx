import React from 'react'
import CreateNewProjectInput from '../../components/project-item/CreateNewProjectInput'
import ProjectItem from '../../components/project-item/ProjectItem'

const ProjectsPage = (props) => {

    let projects = [{ name: 'Проект 1', done: false, id: 1 }, { name: 'Проект 2', done: true, id: 2 }]
    return (
        <div className='projects-list'>
            <CreateNewProjectInput />
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