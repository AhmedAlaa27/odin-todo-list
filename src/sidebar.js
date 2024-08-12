export default function Projects() {
    const projectsUl = document.createElement('ul');
    projectsUl.classList.add('projects')

    const project = document.createElement('li');
    project.classList.add('project');
    project.textContent = 'Project -1'

    projectsUl.appendChild(project);

    return projectsUl;
}