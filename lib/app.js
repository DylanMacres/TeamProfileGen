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
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath =path.join(OUTPUT_DIR, "profile.html")

// Array  for the team to be pushed to 
let employees = [];

function managerHtml () {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name:'name',
    },
    {
      type: "input",
      message: "What is your manager's id number",
      name: "ID",
    },
    {
      type: "input",
      message: "What is your manager's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
  ]).then(response => {
    const manager = new Manager (response.name, response.ID, response.email, response.officeNumber)
    employees.push(manager);
    const startPage = fs.writeFile("./dist/final.html", )

    whatsNext();
  // const managerCard = ``
  })
}

  function empIntern() {
      inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your intern's id number",
      name: "ID",
    },
    {
      type: "input",
      message: "What is your intern's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What school is/did your intern attend?",
      name: "school",
    },
  ]).then (response => {
    const intern = new Intern (response.name, response.ID, response.email, response.school );
    employees.push(intern);
    whatsNext();
 
  })
}
  function empEngineer(){
  inquirer.prompt ([
  
    {
    type: 'input',
    message: "What is your Engineer's name?",
    name:'name'

  },
    {
      type: 'input',
      message: "What is the engineer's id?",
      name:'ID'
    },

    {
      name: 'input',
      message: "What is the engineer's email?",
      name: 'email'

    },

    {
      type: 'input',
      message: "What is your engineer's github username?",
      name:'github'

    }

  ]).then(response => {
    const engineer = new Engineer(response.name, response.ID, response.email, response.github);
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
