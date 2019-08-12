import elFactory from "./factory.js";

const createEmployeeComponent = (employeeObj) => {
  const container = document.querySelector("#container")
  const employeeArticle = elFactory("article", { classList: ["employee"] })
  const employeeNameHeader = elFactory("header", { classList: ["employee__name"] })
  const employeeName = elFactory("h1", {}, employeeObj.name)
  const deptSection = elFactory("section", { classList: ["employee__department"] }, "Works in the " + employeeObj.department.deptName + " department")
  const compSection = elFactory("section", {classList: ["employee__computer"]}, "Currently using a " + employeeObj.computer.model)
  container.appendChild(employeeArticle)
  employeeArticle.appendChild(employeeNameHeader)
  employeeNameHeader.appendChild(employeeName)
  employeeArticle.appendChild(deptSection)
  employeeArticle.appendChild(compSection)
}

export default createEmployeeComponent