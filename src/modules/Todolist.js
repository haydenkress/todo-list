import createTask from "./Task";
import createProject from "./Project";

export default function toDoList() {
  let projects = [];

  return {
    projects,

    saveToLocalStorage: function () {
      //console.log(this.projects);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    },

    deleteCurrentProject: function () {
      const localItem = localStorage.removeItem("currentProject");
      if (!localItem) {
        console.log("No current project");
      }
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

    saveCurrentProject: function (project) {
      localStorage.setItem("currentProject", JSON.stringify(project));
    },

    loadCurrentProject: function () {
      const currentProject = JSON.parse(localStorage.getItem("currentProject"));
      if (currentProject) {
        const project = createProject(currentProject.title);
        if (currentProject.tasks) {
          // Update to use 'currentProject.tasks' instead of 'project.tasks'
          project.tasks = currentProject.tasks.map((taskData) => {
            const task = createTask(taskData.title);
            task.isComplete = taskData.isComplete;
            return task; // Update to return 'task' instead of 'project.tasks'
          });
        }
        return project;
      }
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
      const projectIndex = this.projects.findIndex(
        (p) => p.title === project.title
      );
      this.projects[projectIndex] = project;
      this.saveToLocalStorage();
      this.saveCurrentProject(project);
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
        (project) => project === projectName
      );
      this.projects.splice(this.projects.indexOf(projectToDelete), 1);
      this.saveToLocalStorage();
    },
  };
}
