import "../styles/style.css";
import {createProjectEvent} from "./logic.js";

export default function createFrame() {
    const container = createContainer();
    const header = createHeader();
    const body = createBody();
    container.appendChild(header);
    container.appendChild(body);

    const main = document.querySelector("body");
    main.appendChild(container);
}

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    const title = document.createElement("h1");
    title.textContent = "Your Task Organizer!";
    const create_project_button = document.createElement("button");
    create_project_button.textContent = "Create New Project";
    create_project_button.addEventListener("click", createProjectEvent);
    header.appendChild(title);
    header.appendChild(create_project_button);
    return header;
}

function createBody() {
    const body = document.createElement("div");
    body.classList.add("project_container");
    return body;
}

function createContainer() {
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
}
