import { toDate, isToday, isThisWeek, subDays } from "date-fns";

const createProject = (title) => {
  const tasks = [];
  return {
    title,
    tasks,

    addTask(todo) {
      tasks.push(todo);
    },

    getName() {
      return this.title;
    },

    removeTask(todoIndex) {
      this.tasks.splice(todoIndex, 1);
    },

    getTasks() {
      return tasks;
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
