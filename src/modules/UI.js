import "../style.css";
import { format } from "date-fns";
import toDoList from "./Todolist";
import MenuBar from "../assets/icons/menu.svg";
import createProject from "./Project";
import createTask from "./Task";

export default function UI() {
  const myToDoList = toDoList();

  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.classList.add("content");
  body.append(content);

  // create initial content
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

  // starts the chain of functions
  const initiateSidebar = function () {
    //const inbox = myToDoList.generateProject("Inbox");
    const totalProjects = myToDoList.loadFromLocalStorage();
    console.log(`total projects: ${totalProjects}`);

    const defaultProjects = totalProjects.slice(0, 1);
    console.log(`default projects: ${defaultProjects}`);

    const createdProjects = totalProjects.slice(1);
    console.log(`created projects: ${createdProjects}`);

    // div and append function for the default projects
    const defaultProjectList = document.createElement("div");
    defaultProjectList.classList.add("default-projects");
    mainContent.sidebar.append(defaultProjectList);

    function addDefaultProjects() {
      defaultProjects.forEach((project) => {
        const addedProject = createProjectTab(project);
        defaultProjectList.appendChild(addedProject);
      });
    }

    // heaading separating default and created projs
    const projectsHeading = document.createElement("div");
    projectsHeading.classList.add("heading");
    projectsHeading.textContent = "My Projects";
    mainContent.sidebar.append(projectsHeading);

    const projectList = document.createElement("div");
    projectList.classList.add("projects");
    mainContent.sidebar.append(projectList);

    function addCreatedProjects() {
      createdProjects.forEach((project) => {
        const addedProject = createProjectTab(project);
        projectList.append(addedProject);
      });
    }

    // adding new projects - THIS IS THE PROBLEM AREA  -- having trouble saving added projects to local storage and retrieved upon page reload
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
          const newProject = myToDoList.generateProject(projectName);
          const addedProject = createProjectTab(newProject);
          projectList.append(addedProject);
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

    addDefaultProjects();
    addCreatedProjects();
  };

  // creating the actual tabs of the projects to sidebar
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

  // opening the project in the task area
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

    // OTHER PROBLEM AREA -- having trouble saving added tasks to local storage and retrieved upon page reload
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
            const newTask = myToDoList.saveTask(project, taskName);
            addTaskToDOM(newTask);
          }
          myToDoList.saveToLocalStorage();
          taskInput.remove();
          mainContent.projectArea.append(addTaskBtn);
        });
      });
    }
  }

  const createLayout = (function () {
    initiateSidebar();
    //const defaultProject = document.querySelector(".inbox");
    //defaultProject.dispatchEvent(new Event("click"));
  })();
}
