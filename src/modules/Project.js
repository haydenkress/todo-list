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

    addTask: function (todo) {
      this.tasks.push(todo);
    },

    getName: function () {
      return title;
    },

    removeTask: function (taskName) {
      const taskToDelete = this.tasks.find((task) => task === taskName); // Changed from task.name to task.title assuming title is the property name
      this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);
      myToDoList.saveCurrentProject(this);
    },

    getTasks: function () {
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
