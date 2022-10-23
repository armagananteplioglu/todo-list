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
newProjectButton.addEventListener("click", createProject)

function createProject () {
    const projectName = prompt ("Set new project:")
    const projectContainer = document.createElement("div")
    const delProject = document.createElement("img")
    delProject.src = "../components/multiplication.svg"
    projectContainer.textContent = projectName
    projectContainer.appendChild(delProject)
    projectPane.append(projectContainer)
}