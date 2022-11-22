import "../styles/style.css";
import {deleteTask} from "./logic.js";


export default function createTask(container) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.appendChild(createHeader());
    task.appendChild(createDescription());
    task.appendChild(createFooter());
    container.appendChild(task);
}

function createHeader () {
    const header_container = document.createElement("div");
    header_container.classList.add("project_header");

    const task_title = document.createElement("h3");
    task_title.textContent = "Task Title";
    task_title.contentEditable = "true";

    const task_due = document.createElement("h3");
    task_due.textContent = "Due Date";
    task_due.contentEditable = "true";

    header_container.appendChild(task_title);
    header_container.appendChild(task_due);
    return header_container;
}

function createDescription() {
    const description = document.createElement("textarea");
    description.classList.add("description");
    description.rows = "4";
    description.cols = "40";
    description.textContent = "Enter description here:";
    return description;
}

function createFooter() {
    const footer_container = document.createElement("div");
    footer_container.classList.add("project_header");
    const hide_show = document.createElement("button");
    hide_show.textContent = "Hide Description";
    hide_show.addEventListener("click", hideDescription);

    const delete_task = document.createElement("button");
    delete_task.textContent = "Delete Task";
    delete_task.addEventListener("click", deleteTask);

    footer_container.appendChild(hide_show);
    footer_container.appendChild(delete_task);
    return footer_container;

}
function hideDescription (e) {
    const desc = e.target.parentElement.previousElementSibling;
    if (e.target.textContent === "Hide Description") {
        desc.classList.add("hide");
        e.target.textContent = "Show Description";
    } else {
        desc.classList.remove("hide");
        e.target.textContent = "Hide Description";
    }
}
