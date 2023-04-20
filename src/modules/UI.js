import "../style.css";
import { format } from "date-fns";
import toDoList from "./todolist";
import MenuBar from "../assets/icons/menu.svg";
import createProject from "./Project";
import { createTask } from "./Task";

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

    const projectArea = document.createElement("div");
    projectArea.classList.add("project-area");

    content.append(main);
    main.append(sidebar);
    main.append(projectArea);

    return {
      main,
      header,
      sidebar,
      projectArea,
      Menu,
    };
  })();

  const initiateSidebar = function () {
    const defaultProjectList = document.createElement("div");
    defaultProjectList.classList.add("default-projects");
    mainContent.sidebar.append(defaultProjectList);

    const totalProjects = toDoList().getProjects();
    const defaultProjects = totalProjects.slice(0, 3);
    const createdProjects = totalProjects.slice(3);

    defaultProjects.forEach((project) => {
      const addedProject = createProjectTab(project);
      defaultProjectList.appendChild(addedProject);
    });

    const projectsHeading = document.createElement("div");
    projectsHeading.classList.add("heading");
    projectsHeading.textContent = "My Projects";
    mainContent.sidebar.append(projectsHeading);

    const projectList = document.createElement("div");
    projectList.classList.add("projects");
    mainContent.sidebar.append(projectList);

    createdProjects.forEach((project) => {
      const addedProject = createProjectTab(project);
      projectList.append(addedProject);
    });

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("add-project-btn");
    addProjectBtn.textContent = "Add Project";
    mainContent.sidebar.append(addProjectBtn);

    addProjectBtn.addEventListener("click", () => {
      const projectInput = document.createElement("input");
      projectList.append(projectInput);
      addProjectBtn.remove();

      projectInput.addEventListener("blur", () => {
        const projectName = projectInput.value;
        if (projectName.trim() !== "") {
          const newProject = createProject(projectName);
          toDoList().addProject(newProject); // Add new project to todo list projects array
          const addedProject = createProjectTab(newProject);
          projectList.append(addedProject); // Append new project to sidebar
        }
        projectInput.remove();
        mainContent.sidebar.append(addProjectBtn);
      });
    });

    mainContent.Menu.addEventListener("click", () => {
      if (mainContent.main.contains(mainContent.sidebar)) {
        mainContent.sidebar.remove();
      } else {
        mainContent.main.insertBefore(
          mainContent.sidebar,
          mainContent.main.firstChild
        );
      }
    });
  };

  function createProjectTab(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.classList.add(
      project.getName().toLowerCase().replace(/\s+/g, "-")
    );
    projectElement.textContent = project.getName();

    projectElement.addEventListener("click", () => {
      clearTaskList();
      const taskList = project.getTasks();
      openProject(project, taskList);
    });
    return projectElement;
  }

  function clearTaskList() {
    mainContent.projectArea.textContent = "";
  }

  function openProject(project, tasks) {
    const projectName = project.title;

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = projectName;
    mainContent.projectArea.append(title);

    const taskArea = document.createElement("div");
    taskArea.classList.add("task-area");
    mainContent.projectArea.append(taskArea);

    function addTaskToDOM(task) {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.textContent = task.title;
      taskArea.append(taskElement);
    }

    tasks.forEach((task) => {
      addTaskToDOM(task);
    });

    if (project.title !== "Today" && project.title !== "This Week") {
      const addTaskBtn = document.createElement("button");
      addTaskBtn.classList.add("add-task-btn");
      addTaskBtn.textContent = "Add Task";
      mainContent.projectArea.append(addTaskBtn);

      addTaskBtn.addEventListener("click", () => {
        const taskInput = document.createElement("input");
        mainContent.projectArea.append(taskInput);
        addTaskBtn.remove();

        taskInput.addEventListener("blur", () => {
          const taskName = taskInput.value;
          if (taskName.trim() !== "") {
            const newTask = createTask(taskName);
            project.addTask(newTask); // Add new project to todo list projects array
            addTaskToDOM(newTask);
          }
          taskInput.remove();
          mainContent.projectArea.append(addTaskBtn);
        });
      });
    }
  }

  const createLayout = (function () {
    initiateSidebar();
    const defaultProject = document.querySelector(".inbox");
    defaultProject.dispatchEvent(new Event("click"));
  })();
}
// for some reason clicking on the "today" tab erases the getTasks of "inbox" but the tasks aren't erased when clicking on the "this week" tab. why?
