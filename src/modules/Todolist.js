import { compareAsc, toDate } from "date-fns";
import { createTask } from "./Task";
import createProject from "./Project";

export default function toDoList() {
  let projects = [];

  function generateProject(name) {
    const project = createProject(name);
    projects.push(project);
    project.addTask(createTask("do the dishes"));
    saveToLocalStorage();
  }

  generateProject("Inbox");
  generateProject("Today");
  generateProject("This Week");

  function saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  function loadFromLocalStorage() {
    const projectsData = JSON.parse(localStorage.getItem("projects"));
    projects = projectsData.map((projectID) => {
      const project = createProject(projectID.title);
      if (projectID.tasks) {
        project.tasks = projectID.tasks.map((taskData) =>
          createTask(taskData.name, taskData.date)
        );
      } else {
        //saveToLocalStorage();
      }
      return project;
    });
    return projects;
  }

  return {
    projects,

    loadFromLocalStorage,
    generateProject,

    setProjects(projects) {
      this.projects = projects;
      saveToLocalStorage();
    },

    getProjects() {
      loadFromLocalStorage();
    },

    contains(projectName) {
      return this.projects.some((project) => project.getName() === projectName);
    },

    addProject(newProject) {
      if (this.projects.find((project) => project.name === newProject.name))
        return;
      this.projects.push(newProject);
      saveToLocalStorage();
    },

    getProject,

    deleteProject(projectName) {
      const projectToDelete = this.projects.find(
        (project) => project.getName() === projectName
      );
      this.projects.splice(this.projects.indexOf(projectToDelete), 1);
      saveToLocalStorage();
    },

    updateTodayProject() {
      this.getProject("Today").tasks = [];

      this.projects.forEach((project) => {
        if (project.getName() === "Today" || project.getName() === "This week")
          return;

        const todayTasks = project.getTasksToday();
        todayTasks.forEach((task) => {
          const taskName = `${task.getName()} (${project.getName()})`;
          this.getProject("Today").addTask(
            createTask(taskName, task.getDate())
          );
        });
      });
      saveToLocalStorage();
    },

    updateWeekProject() {
      this.getProject("This Week").tasks = [];

      this.projects.forEach((project) => {
        if (project.getName() === "Today" || project.getName() === "This Week")
          return;

        const weekTasks = project.getTasksThisWeek();
        weekTasks.forEach((task) => {
          const taskName = `${task.getName()} (${project.getName()})`;
          this.getProject("This Week").addTask(
            createTask(taskName, task.getDate())
          );
        });
      });

      this.getProject("This week").setTasks(
        this.getProject("This week")
          .getTasks()
          .sort((taskA, taskB) =>
            compareAsc(
              toDate(new Date(taskA.getDateFormatted())),
              toDate(new Date(taskB.getDateFormatted()))
            )
          )
      );
      saveToLocalStorage();
    },
  };
}
