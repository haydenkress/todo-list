import createTask from "./Task";
import createProject from "./Project";

export default function toDoList() {
  let projects = [];

  return {
    projects,

    saveToLocalStorage: function () {
      console.log(this.projects);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    },

    loadFromLocalStorage: function () {
      const projectsData = JSON.parse(localStorage.getItem("projects"));
      if (projectsData) {
        this.projects = projectsData.map((projectData) => {
          const project = createProject(projectData.title);
          if (projectData.tasks) {
            project.tasks = projectData.tasks.map((taskData) => {
              const task = createTask(taskData.title); // Update to use 'title' property instead of 'name'
              task.isComplete = taskData.isComplete; // Set isComplete property from taskData
              return task;
            });
          }
          return project;
        });
      } else {
        this.generateProject("Inbox");
        this.saveToLocalStorage(); // Save the updated myToDoList object with default projects to local storage
      }
      return this.projects;
    },

    getProject: function (projectName) {
      return this.projects.find((project) => project.getName() === projectName);
    },

    getProjects: function () {
      this.loadFromLocalStorage();
    },

    setProjects: function (projects) {
      this.projects = projects;
      this.saveToLocalStorage();
    },

    generateProject: function (name) {
      const project = createProject(name);
      this.projects.push(project);
      project.addTask(createTask("do the dishes"));
      this.saveToLocalStorage();
      return project;
    },

    saveTask: function (project, title) {
      const task = createTask(title);
      project.addTask(task);
      this.saveToLocalStorage();
      return task;
    },

    addProject: function (newProject) {
      if (this.projects.find((project) => project.name === newProject.name))
        return;
      this.projects.push(newProject);
      this.saveToLocalStorage();
    },

    deleteProject: function (projectName) {
      const projectToDelete = this.projects.find(
        (project) => project.getName() === projectName
      );
      this.projects.splice(this.projects.indexOf(projectToDelete), 1);
      this.saveToLocalStorage();
    },
  };
}
