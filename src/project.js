import Tasks from "./tasks";

export default function Project() {
    const projectView = document.createElement('div');
    projectView.classList.add('project-view')

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Project -1';

    projectView.appendChild(title);
    projectView.appendChild(Tasks());

    return projectView;
}