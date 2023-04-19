import { toDate, isToday, isThisWeek, subDays } from "date-fns";

const createProject = (title) => {
  return {
    title,
    tasks: [],

    addTask(todo) {
      this.tasks.push(todo);
    },

    removeTask(todoIndex) {
      this.tasks.splice(todoIndex, 1);
    },

    getTasks() {
      return this.tasks;
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

export { createProject };
