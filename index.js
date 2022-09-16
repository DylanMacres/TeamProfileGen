//Adding the classes //

const Employee = require("./lib/employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/Manager");

//adding the dependicies //

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");
const { resolve } = require("path");

// const questions = {
//   Manager: [
//     {
//       type: "input",
//       message: "What is your manager's name?",
//       name: "managerName",
//     },
//     {
//       type: "input",
//       message: "What is your manager's id number",
//       name: "managerId",
//     },
//     {
//       type: "input",
//       message: "What is your manager's email address?",
//       name: "managerEmail",
//     },
//     {
//       type: "input",
//       message: "What is the manager's office number?",
//       name: "officeNumber",
//     },
//   ],

//   Intern: [
//     {
//       type: "input",
//       message: "What is your intern's name?",
//       name: "internName",
//     },
//     {
//       type: "input",
//       message: "What is your intern's id number",
//       name: "internId",
//     },
//     {
//       type: "input",
//       message: "What is your intern's email address?",
//       name: "interEmail",
//     },
//     {
//       type: "input",
//       message: "What school is/did your intern attend?",
//       name: "internSchool",
//     },
//   ],
// };


// const newEmployee = {
//     type: "list",
//     message: "Do you want to add another employee?",
//     name: "newEmployee",
//     choices: ["yes","no"]
// }


const questions = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "title ",
      message:"What is the employee's title?",
      choices: ["Manager", "Engineer", "Intern"]


    },
    
    
    
    {
    type: 'input',
    name: 'employeeName',
    message: "What is the employee's name?",
    },    
    {
      type: 'input',
      name: 'employeeEmail',
      message: "What is the employee's Email" },
      {
        type: "input",
        name:"internSchool",
        message:"What is the name of the school for the Intern?",
        when: (response) => response.title == 'Intern',

      },

      {
        type: "input",
        when: (response) => response.title == "Engineer",
        message: "What is your Github username?",
        name: "engineerGithub",
      },
      {
        type:"input",
        when: (response) => response.title == "Manager",
        message: "What is your office number?",
        name: "managerOfficNum",

      },


      {
        type: 'confirm',
        name: "moreEmps",
        message: "Would you like to add another employee?"
      }

  ])
}

function addEmployee () {
    inquirer.prompt ([{
        type:'list',
        message:"Choose the employee's role",
        name:'employeeRole',
        choices:['Manager', 'Intern', 'Engineer' ]
    }]).then((choices) => {
        if(choices.employeeRole === "Manager"){
            managerCount++
        }
    })
}