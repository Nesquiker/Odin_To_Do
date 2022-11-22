import "../styles/style.css";
import {createTaskEvent, deleteProject} from "./logic.js";

export default function createProject() {
    const parent = document.querySelector(".project_container");
    const project = document.createElement("div");
    project.classList.add("project");
    project.appendChild(createHeader());
    project.appendChild(createProjectContainer());
    project.appendChild(createFooter());
    parent.appendChild(project);
}


function createHeader() {
    const project_header = document.createElement("div");
    project_header.classList.add("project_header");

    const title = document.createElement("h2");
    title.textContent = "Project Name";
    title.contentEditable = "true";

    const date = document.createElement("h2");
    date.textContent = "Due Date";
    date.contentEditable = "true";

    project_header.appendChild(title);
    project_header.appendChild(date);
    return project_header;
}

function createFooter() {
    const project_footer = document.createElement("div");
    project_footer.classList.add("project_header");

    const add_task = document.createElement("button");
    add_task.textContent = "Add New Task";
    add_task.addEventListener("click", createTaskEvent);

    const delete_proj = document.createElement("button");
    delete_proj.textContent = "Delete Project";
    delete_proj.addEventListener("click", deleteProject);
    project_footer.appendChild(add_task);
    project_footer.appendChild(delete_proj);
    return project_footer;
}

function createProjectContainer () {
    const container = document.createElement("div");
    container.classList.add("project_task_container");
    return container;
}