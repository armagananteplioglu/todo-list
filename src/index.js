import "./index.css"

const mainContent = document.querySelector("#content")
const header = document.createElement("div")
header.setAttribute("id", "header")
header.textContent = "Noob's To Do List"

mainContent.append(header)