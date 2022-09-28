//Adding the classes //

const Employee = require("./lib/employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/Manager");
// const indexfile =
//adding the dependicies //

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");
const { resolve } = require("path");
const { start } = require("repl");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "profile.html");



let questionsManager = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
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
    name: "officeNum",
  },
];

function managerHtml() {
  inquirer.prompt(questionsManager).then((response) => {
    const manager = new Manager(
      response.name,
      response.ID,
      response.email,
      response.officeNum
    );
   

    const managerCard = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="dist/css/style.css"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Team Profile Generator</title>
  </head>
  <body>
  <div>
      <header class="text-center custom header">
          <h3>Meet the Team!</h1>
      </header>
      <div class="container"></div>
      <div class="row"></div>
  <div>
  </div>
  </div>
  <section class="row">
  <div class=" text-center">
          <div class="card" style="width: 20rem;">
            <div class="card-body">
              <h4 class="card-header text-center">${manager.getName()}</h4>
              <h5>${manager.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${manager.getID()}</li>
            <li class="list-group-item"> <a href="Emailto: ${
              manager.email
            }" class="card-link">${manager.email}</a></li>
            <li class="list-group-item"> Office Number: ${manager.getOfficeNum()}</li>
            </ul>
            </div>
         </div>   
            `;
    fs.writeFile("./dist/final.html", managerCard, function (err) {
      if (err) {
        console.log("not working");
      }
    });
    // fs.writeFile("./dist/final.html", managerCard, (err)=>
    // err ? console.error(err): console.log('IT WORKED!'))
    whatsNext();
  });
}

let internQuestions = [
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
];
function empIntern() {
  inquirer.prompt(internQuestions).then((response) => {
    const intern = new Intern(
      response.name,
      response.ID,
      response.email,
      response.school
    );
    employees.push(intern);
    const internCard = `<div class="card" style="width: 20rem;">
    <div class="card-body">
      <h4 class="card-header text-center">${intern.getName()}</h4>
      <h5>${intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"> ID: ${intern.getID()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
    <li class="list-group-item"> School: ${intern.getSchool()}</li>
    </ul>
    </div>
 </div>   `;
    fs.appendFile("./dist/final.html", internCard, function (err) {
      if (err) {
        console.log("not working");
      }
    });
    whatsNext();
  });
}
let engineerQuestions = [
  {
    type: "input",
    message: "What is your Engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "ID",
  },

  {
    name: "input",
    message: "What is the engineer's email?",
    name: "email",
  },

  {
    type: "input",
    message: "What is your engineer's github username?",
    name: "github",
  },
];
function empEngineer() {
  inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.name,
      response.ID,
      response.email,
      response.github
    );
    employees.push(engineer);
    const engineerCard = `<div class="card" style="width: 20rem;">
    <div class="card-body">
      <h4 class="card-header text-center">${engineer.getName()}</h4>
      <h5>${engineer.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"> ID: ${engineer.getID()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
    <li class="list-group-item"> GitHub: ${engineer.getGithub()}</li>
    </ul>
    </div>
 </div> `;
    fs.appendFile("./dist/final.html", engineerCard, function (err) {
      if (err) {
        console.log("not working");
      }
    });
    whatsNext();
  });
}

function whatsNext() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Finish"],
        name: "choicesList",
      },
    ])
    .then((response) => {
      if (response.choicesList == "Add Engineer") {
        empEngineer();
      } else if (response.choicesList == "Add Intern") {
        empIntern();
      } else {
        noMore();
      }
    });
}

managerHtml();
// empIntern();
// empEngineer();
function noMore() {
  return;
}
