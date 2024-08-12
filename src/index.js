import './style.css'
import Project from './project';
import Projects from './sidebar';

function Sidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(Projects());
}

function PageLoad() {
    const container = document.querySelector('.container');

    container.appendChild(Project())

    return container;
}

Sidebar();

const view = document.querySelector('.view');
view.appendChild(PageLoad());