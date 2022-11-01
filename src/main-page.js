import "./main-page.css";
export { newProjectButton, container };

const container = document.createElement("div");
container.setAttribute("id", "container");
const projectPane = document.createElement("div");
projectPane.setAttribute("id", "projectPane");
const taskPane = document.createElement("div");
taskPane.setAttribute("id", "taskPane");
container.append(projectPane, taskPane);

const newProjectButton = document.createElement("div");
newProjectButton.setAttribute("id", "projectButton");
newProjectButton.textContent = "+ New Project";

let projectArray = [];

const projectMaker = (indexNo, name, tasks, delBtn) => {
  return { indexNo, name, tasks, delBtn };
};

const createProject = () => {
  let projectName = prompt("Set new project name:");

  const delBtn = document.createElement("img");
  delBtn.setAttribute("class", "delete");
  delBtn.dataset.indexNo = indexNoCounter();
  delBtn.src = "./components/multiplication.svg";

  const project = projectMaker(
    delBtn.dataset.indexNo,
    projectName,
    null,
    delBtn
  );
  if (projectName === null) {
    return;
  } else if (projectName === "") {
    alert("The project name can not be empty.");
    return;
  } else {
    projectArray.push(project);
    projectPaneDOM();
  }
};

const projectPaneDOM = () => {
  projectPane.innerHTML = "";
  projectArray.forEach((element) => {
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "projects");
    projectContainer.append(element.name, element.delBtn);
    projectPane.append(projectContainer);
  });
};

function deleteProject(e) {
  projectArray = projectArray.filter(x => x.indexNo !== e.target.dataset.indexNo)
  projectPaneDOM()
}

const indexNoCounter = (function () {
  let indexNo = -1;
  return function () {
    indexNo++;
    return indexNo;
  };
})();

newProjectButton.addEventListener("click", createProject);

container.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    deleteProject(e);
  }
});