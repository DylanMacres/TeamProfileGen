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
const { start } = require("repl");

// Array  for the team to be pushed to 
let employees = [];

function empManger (){
  inquirer.prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is your manager's id number",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is your manager's email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
  ]).then(results => {
    const manager = new Manager (results.managerName, results.managerID, results.managerEmail, results.officeNumber)
    employees.push(manager);
    start();
  })
}
  Intern: [
    {
      type: "input",
      message: "What is your intern's name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is your intern's id number",
      name: "internId",
    },
    {
      type: "input",
      message: "What is your intern's email address?",
      name: "interEmail",
    },
    {
      type: "input",
      message: "What school is/did your intern attend?",
      name: "internSchool",
    },
  ],
  Engineer: [{
    type: 'input',
    message: "What is your Engineer's name?",
    name:'engineerName'

  },
    {
      type: 'input',
      message: "What is the engineer's id?",
      name:'engineerID'
    },

    {
      name: 'input',
      message: "What is the engineer's email?",
      name: 'engineerEmail'

    },

    {
      type: 'input',
      message: "What is your engineer's github username?",
      name:'engineerGitHub'

    }

  ]
};


const newEmployee = {
    type: "list",
    message: "Do you want to add another employee?",
    name: "newEmployee",
    choices: ["Yes","No"]
}


// inquirer.prompt(questions)
// const questions = () => {
//   return inquirer.prompt([
//     {
//       type: "list",
//       name: "title ",
//       message:"What is the employee's title?",
//       choices: ["Manager", "Engineer", "Intern"]


//     },

    
    
//     {
//     type: 'input',
//     name: 'employeeName',
//     message: "What is the employee's name?",
//     },    
//     {
//       type: 'input',
//       name: 'employeeEmail',
//       message: "What is the employee's Email" },
//       {
//         type: "input",
//         name:"internSchool",
//         message:"What is the name of the school for the Intern?",
//         when: (response) => response.title == 'Intern',

//       },

//       {
//         type: "input",
//         when: (response) => response.title == "Engineer",
//         message: "What is your Github username?",
//         name: "engineerGithub",
//       },
//       {
//         type:"input",
//         when: (response) => response.title == "Manager",
//         message: "What is your office number?",
//         name: "managerOfficNum",

//       },

//   ])
// }

const addAnother = {
  type: 'list',
  message: "Would you like to add another employee, and if so, which job title?",
  choices: ["Engineer", "Intern", "No more employees to add"],
  name:"addingMore"
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