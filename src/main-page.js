import "./main-page.css";

const container = document.createElement("div");
container.setAttribute("id", "container");
const projectPane = document.createElement("div");
projectPane.setAttribute("id", "projectPane");
const taskPaneHolder = document.createElement("div");
taskPaneHolder.setAttribute("id", "taskPane");
container.append(projectPane, taskPaneHolder);
const projectContainer = document.createElement("div");
projectContainer.setAttribute("class", "projects");
projectPane.append(projectContainer);

const newProjectButton = document.createElement("div");
newProjectButton.setAttribute("id", "projectButton");
newProjectButton.textContent = "+ New Project";

//project related stuff

let projectArray = [];

const projectMaker = (indexNo, name, tasks, delBtn, selected) => {
  return { indexNo, name, tasks, delBtn, selected };
};

const createProject = () => {
  let projectName = prompt("Set new project name:");

  const delBtn = document.createElement("img");
  delBtn.setAttribute("class", "delete");
  delBtn.dataset.indexNo = indexNoCounter();
  delBtn.src = "../components/multiplication.svg";

  const project = projectMaker(
    delBtn.dataset.indexNo,
    projectName,
    null,
    delBtn,
    false
  );
  if (projectName === null) {
    return;
  } else if (projectName === "") {
    alert("The project name can not be empty.");
    return;
  } else {
    projectArray.push(project);
    setSelectedFalse();
    projectPaneDOM();
    taskPaneClear();
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
  projectArray = projectArray.filter(
    (x) => x.indexNo !== e.target.dataset.indexNo
  );
  projectPaneDOM();
  taskPaneClear();
}

function fontChanger(e) {
  document.querySelectorAll(".projects").forEach((project) => {
    project.style.fontSize = "2rem";
    //change the color slightly too & maybe add shadow
  });
  e.target.style.fontSize = "3rem";
}

function setSelectedFalse() {
  projectArray.forEach((project) => {
    project.selected = false;
  });
}

function toggleSelected(e) {
  if (projectArray.length > 1) {
    const selectedProject = projectArray.find(
      (x) => x.indexNo === e.target.lastChild.dataset.indexNo
    );
    selectedProject.selected = true;
    const unselectedProjects = projectArray.find(
      (x) => x.indexNo !== e.target.lastChild.dataset.indexNo
    );
    unselectedProjects.selected = false;
  } else {
    const selectedProject = projectArray.find(
      (x) => x.indexNo === e.target.lastChild.dataset.indexNo
    );
    selectedProject.selected = true;
  }
}

//counter for indexNo

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

//task related stuff

const taskMaker = (title, date, info, doneBtn, delBtn) => {
  return { title, date, info, doneBtn, delBtn };
};

function taskPaneExec(eventTarget) {
  fontChanger(eventTarget);
  toggleSelected(eventTarget);
  taskPanePopulator()
}

function taskPanePopulator() {
  const newTaskPane = document.createElement("div");
  newTaskPane.setAttribute("class", "taskPanes");
  taskPaneHolder.append(newTaskPane)

  const newTaskButton = document.createElement("div");
  newTaskButton.setAttribute("id", "taskButton");
  newTaskButton.textContent = "+ Add New Task";
  newTaskPane.append(newTaskButton);
}

function taskPaneClear() {
  taskPaneHolder.textContent = ""
}

function taskPaneDOM() {
  const taskContainer = document.createElement("div")
  taskContainer.setAttribute("class", "taskContainers")
  const upperTaskPane = document.createElement("div")
  upperTaskPane.setAttribute("class", "upperTaskPane")
  const taskName = document.createElement("div")
  taskName.textContent = "task"
  const functionPane = document.createElement("div")
  const lowerTaskPane = document.createElement("div")
  upperTaskPane.append(taskName, functionPane)
  taskContainer.append(upperTaskPane, lowerTaskPane)
  taskPaneHolder.append(taskContainer)
}

function createNewTask() {
  const newTask = prompt("Set new task")
  if (newTask === null) {
    return;
  } else if (newTask === "") {
    alert("The task name can not be empty.");
    return;
  } else {
    if (projectArray.find(item => item.selected === true).tasks === null) {
      projectArray.find(item => item.selected === true).tasks = `${newTask},`
      taskPaneDOM();
    } else {
      projectArray.find(item => item.selected === true).tasks += `${newTask},`
      taskPaneDOM();
    }
    
  }
}

container.addEventListener("click", function (e) {
  if (e.target.className === "projects") {
    taskPaneExec(e);
  }
});

container.addEventListener("click", function(e) {
  if (e.target.id === "taskButton") {
    createNewTask()
  }
})

export { newProjectButton, container };
