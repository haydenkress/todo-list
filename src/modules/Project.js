import { toDate, isToday, isThisWeek, subDays } from "date-fns";

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
      tasks.push(todo);
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

    getTasksToday() {
      return this.tasks.filter((task) => {
        const taskDate = new Date(task.getDateFormatted());
        return isToday(toDate(taskDate));
      });
    },

    getTasksThisWeek() {
      return this.tasks.filter((task) => {
        const taskDate = new Date(task.getDateFormatted());
        return isThisWeek(subDays(toDate(taskDate), 1));
      });
    },
  };
};

export default createProject;
