import "../style.css";
import { format } from "date-fns";
import toDoList from "./todolist";
import MenuBar from "../assets/icons/menu.svg";

export default function UI() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.classList.add("content");
  body.append(content);

  const mainContent = (function () {
    const header = document.createElement("div");
    header.classList.add("header");
    content.append(header);

    const Menu = new Image();
    Menu.src = MenuBar;
    Menu.classList.add("menu-icon");
    header.append(Menu);

    const main = document.createElement("div");
    main.classList.add("main");

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const taskArea = document.createElement("div");
    taskArea.classList.add("task-area");

    content.append(main);
    main.append(sidebar);
    main.append(taskArea);

    return {
      main,
      header,
      sidebar,
      taskArea,
    };
  })();

  const createDefaultProjects = function () {
    const myToDoList = toDoList();

    const defaultProjectList = document.createElement("div");
    defaultProjectList.classList.add("project-list");
    mainContent.sidebar.append(defaultProjectList);

    const defaultProjects = myToDoList.generateInitialProjects();

    defaultProjects.forEach((project) => {
      const addedProject = addProjectToDOM(project);
      defaultProjectList.appendChild(addedProject);
    });
  };

  function addProjectToDOM(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.classList.add(
      project.getName().toLowerCase().replace(/\s+/g, "-")
    );
    projectElement.textContent = project.getName();

    projectElement.addEventListener("click", () => {
      clearTaskList();
      const tasks = project.getTasks();
      createLayout.displayTasks(tasks);
    });
    return projectElement;
  }

  function clearTaskList() {
    mainContent.taskArea.textContent = "";
  }

  function displayTasks(tasks) {
    // Replace with your implementation
  }

  const createLayout = (function () {
    createDefaultProjects();
  })();
}
