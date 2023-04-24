import createTask from "./Task";
import toDoList from "./Todolist";
const myToDoList = toDoList();
const createProject = (title) => {
  const tasks = [];

  function getProjectTasksFromLocalStorage(projectName) {
    const projectsData = JSON.parse(localStorage.getItem("projects"));
    if (projectsData) {
      const projectData = projectsData.find(
        (project) => project.title === projectName
      );
      if (projectData) {
        return projectData.tasks || []; // Return tasks array or an empty array if not found
      }
    }
  }

  return {
    title,
    tasks,

    addTask(todo) {
      this.tasks.push(todo);
    },

    getName() {
      return title;
    },

    removeTask(todoIndex) {
      this.tasks.splice(todoIndex, 1);
    },

    getTasks() {
      const tasksFromLocalStorage = getProjectTasksFromLocalStorage(this.title);
      if (tasksFromLocalStorage) {
        return tasksFromLocalStorage;
      } else {
        return this.tasks;
      }
    },
  };
};

export default createProject;
