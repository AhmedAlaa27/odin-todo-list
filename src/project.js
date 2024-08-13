import Tasks from "./tasks";

export default function Project(project) {
    const projectView = document.createElement('div');
    projectView.classList.add('project-view');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = project.name;

    projectView.appendChild(title);
    projectView.appendChild(Tasks(project));

    return projectView;
}