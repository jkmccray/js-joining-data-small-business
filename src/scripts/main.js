import createEmployeeComponent from "./component.js";
import API from "./data.js";

API.getEmployeeInfo().then((employees) => {
  employees.forEach(employee => {
    createEmployeeComponent(employee)
  })
})