export default function Tasks() {
    const tasks = document.createElement('div');
    tasks.classList.add('tasks');

    const task = document.createElement('div');
    task.classList.add('task');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title'); 
    taskTitle.textContent = 'Task 1'

    const taskDate = document.createElement('div'); 
    taskDate.classList.add('task-date');
    taskDate.textContent = '12-09-2024'
    
    task.appendChild(taskTitle);
    task.appendChild(taskDate);

    tasks.appendChild(task);

    return tasks;
}