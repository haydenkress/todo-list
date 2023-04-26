import "../style.css";
import toDoList from "./Todolist";
import MenuBar from "../assets/icons/menu.svg";
import removeIcon from "../assets/icons/remove.svg";
import Circle from "../assets/icons/circle.svg";

export default function UI() {
  const myToDoList = toDoList();

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
    const totalProjects = myToDoList.loadFromLocalStorage();
    const defaultProjects = totalProjects.slice(0, 1);
    const createdProjects = totalProjects.slice(1);

    const defaultProjectList = document.createElement("div");
    defaultProjectList.classList.add("default-projects");
    mainContent.sidebar.append(defaultProjectList);

    function addDefaultProjects() {
      defaultProjects.forEach((project) => {
        const addedProject = addProjectToDOM(project);
        defaultProjectList.appendChild(addedProject);
      });
    }

    const projectsHeading = document.createElement("div");
    projectsHeading.classList.add("heading");
    projectsHeading.textContent = "My Projects";
    mainContent.sidebar.append(projectsHeading);

    const lineBreak = document.createElement("hr");
    mainContent.sidebar.append(lineBreak);

    const projectList = document.createElement("div");
    projectList.classList.add("projects");
    mainContent.sidebar.append(projectList);

    function addCreatedProjects() {
      createdProjects.forEach((project) => {
        const addedProject = addProjectToDOM(project);
        projectList.append(addedProject);
      });
    }

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("add-project-btn");
    addProjectBtn.textContent = "Add Project";
    mainContent.sidebar.append(addProjectBtn);

    addProjectBtn.addEventListener("click", () => {
      const projectInput = document.createElement("input");
      projectInput.classList.add("project-input");
      projectList.append(projectInput);
      addProjectBtn.remove();

      projectInput.addEventListener("blur", () => {
        const projectName = projectInput.value;
        if (projectName.trim() !== "" && projectName !== "Inbox") {
          const newProject = myToDoList.generateProject(projectName);
          const addedProject = addProjectToDOM(newProject);
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

  function addProjectToDOM(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.classList.add(
      project.getName().toLowerCase().replace(/\s+/g, "-")
    );
    const projectName = document.createElement("div");
    projectName.textContent = project.getName();
    projectName.classList.add("project-name");
    projectElement.append(projectName);

    projectElement.addEventListener("click", () => {
      clearTaskList();
      openProject(project, project.tasks);
    });

    // MAIN PROBLEM AREA ATM - FOR SOME REASON THE ELEMENT GETS REMOVED FROM DOM BUT THE TASK AREA DOES NOT CLEAR FULLY AND THE CURRENT PROJECT LOCAL STORAGE OBJECT DOESN'T GET CLEARED IF IT'S THE SAME PROJECT BEING DELETED
    if (project.getName() !== "Inbox") {
      const Remove = new Image();
      Remove.src = removeIcon;
      Remove.classList.add("remove-btn");

      projectElement.append(Remove);

      Remove.addEventListener("click", () => {
        clearTaskList();
        const currentProject = myToDoList.loadCurrentProject();
        if (currentProject.title === project.title) {
          myToDoList.deleteCurrentProject();
        }
        myToDoList.deleteProject(project);
        projectElement.remove();
      });
    }

    return projectElement;
  }

  function clearTaskList() {
    mainContent.projectArea.innerHTML = "";
  }

  // opening the project in the task area
  function openProject(project, tasks) {
    myToDoList.saveCurrentProject(project);
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

      const taskName = document.createElement("div");
      taskName.classList.add("task-name");
      taskName.textContent = task.title;

      const taskCircle = new Image();
      taskCircle.classList.add("task-circle");
      taskCircle.src = Circle;

      taskArea.append(taskElement);
      taskElement.append(taskCircle);
      taskElement.append(taskName);

      // ANOTHER BIG PROBLEM AREA - THERES AN ERROR IN THE SPLICING WHERE ANY TASKS THAT ARE COMPLETED ARE REMOVED FROM THE DOM BUT THE LAST ITEM ADDED TO LOCAL STORAGE IS DELETED, WHICH IS REALLY STRANGE WHEN YOU DELETE ANY TASKS NOT LAST ADDED AND UPON REFRESH THEY ARE BACK IN LOCAL STORAGE
      taskCircle.addEventListener("click", () => {
        task.isComplete = true;
        project.removeTask(task);
        myToDoList.saveToLocalStorage();
        myToDoList.saveCurrentProject(project);
        taskElement.remove();
      });
      return taskElement;
    }
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
          taskInput.remove();
          mainContent.projectArea.append(addTaskBtn);
        });
      });
    }

    tasks.forEach((task) => {
      addTaskToDOM(task);
    });
  }

  const createLayout = (function () {
    initiateSidebar();
    const currentProject = myToDoList.loadCurrentProject();
    if (currentProject) {
      clearTaskList();
      openProject(currentProject, currentProject.tasks);
    }
  })();
}
