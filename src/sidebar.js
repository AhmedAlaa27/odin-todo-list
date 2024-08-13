import { createProject, projects } from './factory_functions';
import Project from './project';

export default function Projects() {
    const projectsUl = document.createElement('ul');
    projectsUl.classList.add('projects');

    const form = document.createElement('form');
    const projectNameInput = document.createElement('input');
    projectNameInput.classList.add('name');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-project');
    addProjectBtn.textContent = 'Add Project';
    addProjectBtn.setAttribute('type', 'submit');

    form.appendChild(projectNameInput);
    form.appendChild(addProjectBtn);
    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = projectNameInput.value
        const newProject = createProject(name);
        console.log(newProject.name);
        projects.push(newProject);
        projectNameInput.value = '';
        displayProjects(projectsUl);
    });

    return projectsUl;
}

function displayProjects(projectsUl) {
    projectsUl.innerHTML = ``;

    projects.forEach((project) => {
        const projectLi = document.createElement('li');
        projectLi.classList.add('project');
        projectLi.textContent = project.name;
        projectsUl.appendChild(projectLi);

    });

}