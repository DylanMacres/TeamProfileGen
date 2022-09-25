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

function managerHtml () {
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
  ]).then(response => {
    const manager = new Manager (response.managerName, response.managerID, response.managerEmail, response.officeNumber)
    employees.push(manager);

    whatsNext();
  // const managerCard = ``
  })
}

  function empIntern() {
      inquirer.prompt([
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
  ]).then (response => {
    const intern = new Intern (response.internName, response.internId, response.internEmail, response.internSchool );
    employees.push(intern);
    whatsNext();
 
  })
}
  function empEngineer(){
  inquirer.prompt ([
  
    {
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

  ]).then(response => {
    const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGitHub);
    employees.push(engineer);
    whatsNext();
  })
};



    function whatsNext() {
      inquirer
        .prompt([
          {
            type: 'list',
            message:'What would you like to do next?',
            choices:["Add Engineer", "Add Intern", "Finish"],
            name:'choicesList',
          }
        ]).then((response) => {
          if(response.choicesList == "Add Engineer"){
            this.empEngineer();
    } else if(response.choicesList == "Add Intern"){
      this.empIntern();
    
    }else {
      this.noMore();
    }
    
        })
    }
function noMore(){
  fs.writeFileSync(outputPath, render(employees))
};
