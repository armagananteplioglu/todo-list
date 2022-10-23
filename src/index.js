import "./index.css"
import { header } from "./header.js"
import { newProjectButton, container } from "./main-page.js"

const mainContent = document.querySelector("#content")


mainContent.append(header, newProjectButton, container)