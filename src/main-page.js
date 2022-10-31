import "./main-page.css";
export { newProjectButton, container }

const container = document.createElement("div")
container.setAttribute("id", "container")
const projectPane = document.createElement("div")
projectPane.setAttribute("id", "projectPane")
const taskPane = document.createElement("div")
taskPane.setAttribute("id", "taskPane")
container.append(projectPane, taskPane)

const newProjectButton = document.createElement("div")
newProjectButton.setAttribute("id", "projectButton")
newProjectButton.textContent = "+ New Project"

let projectsArray = [];

function Projects(name) {
  this.name = name;
}
/*
const createProject = () => {
    let projectName = prompt("Set new project name:");
    const project = new Projects(projectName);
    if (projectName === null) {
      return;
    } else if (projectName === "") {
      alert("The project name can not be empty.");
      return;
    } else {
      projectsArray.push(project);
      console.log(projectsArray);
      displayProjects();
      addProjectFunctionality();
    }
};

const displayProjects = () => {
    projectPane.innerHTML = "";
    projectsArray.forEach((element) => {
      const projectContainer = document.createElement("div");
      projectContainer.setAttribute("class", "projects");
      projectContainer.append(element.name);
      projectPane.append(projectContainer);
    });
};

const addProjectFunctionality = () => {
    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("id", "delete");
    deleteButton.src = "../components/multiplication.svg"
    projectContainer.append(deleteButton)
};
*/

const createProject = {
    exec: () => {
        createProject.makeProjectName()
        createProject.createContainer(createProject.projectDeleteButton())
        console.log(createProject.projectDeleteButton())
    },
    makeProjectName: () => {
        let projectName = prompt("Set new project name:");
        const project = new Projects(projectName);
        if (projectName === null) {
          return;
        } else if (projectName === "") {
          alert("The project name can not be empty.");
          return;
        } else {
          projectsArray.push(project);
        }
    },
    createContainer: (feature1) => {
        projectPane.innerHTML = "";
        projectsArray.forEach((element) => {
            const projectContainer = document.createElement("div");
            projectContainer.setAttribute("class", "projects");
            projectContainer.append(element.name, feature1);
            projectPane.append(projectContainer);
        });
    },
    projectDeleteButton: () => {
        const deleteButton = document.createElement("img");
        deleteButton.setAttribute("class", "delete");
        deleteButton.src = "../components/multiplication.svg"
        return deleteButton
    },
    something: () => {
        console.log("lol")
    }
}

newProjectButton.addEventListener("click", createProject.exec);

container.addEventListener("click", function(e) {
  if (e.target.className == "delete") {
    createProject.something()
  }
})