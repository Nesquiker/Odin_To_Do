import "../styles/style.css";
import createProject from "./project.js";
import createTask from "./task.js";


export function createProjectEvent(e) {
    createProject();
}


export function deleteProject(e) {
    if (!confirmDelete("project")) {
        return;
    }
    const project = findTaskOrProject(e.target);
    project.remove();
}

export function createTaskEvent(e) {
    const container = e.target.parentElement.previousElementSibling;
    createTask(container);
}

export function deleteTask(e) {
    if (!confirmDelete("task")) {
        return;
    }
    const task = findTaskOrProject(e.target);
    task.remove();
}


function confirmDelete(text) {
    return confirm("Delete " + text + "?");
}

function findTaskOrProject (current_node) {
    if (current_node.classList.contains("project") || current_node.classList.contains("task")) {
        return current_node;
    } else {
        return findTaskOrProject(current_node.parentElement);
    }
}
