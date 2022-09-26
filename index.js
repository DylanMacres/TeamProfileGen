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
const outputPath =path.join(OUTPUT_DIR, "profile.html")

// Array  for the team to be pushed to 
let employees = [];


  let questionsManager = ([
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
  ])
  
  function managerHtml (){
    inquirer.prompt(questionsManager)
  .then(response => {
    const manager = new Manager (response.name, response.ID, response.email, response.officeNumber)
    employees.push(manager);
    // const startPage = fs.writeFile("./dist/final.html", )


  const managerCard = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
  </head>
  <body>
  
      <header class="text-center custom header">
          <h3>Meet the Team!</h1>
      
      </header>
  
      <div class="container-fluid"></div>
      <section class="row"></section>
  
  <form>
  <div class= "col-sm-3">
    
  </div>
  </form>
  <div class="col-12 col-md-10">>
  </div>
  <div class=" text-center">
      <h3>hello world!</h3></div>
      
      
      <section class="container-fluid  ">
          <div class="row">
            <div class="col-2 boxes card">
              <h4 class="card-header" id="day1">${manager.getName()}</h4>
              <h5>${manager.getRole()}</h5>
            </div>
            <div class="cardInfo">
            <p> ID: ${manager.getID()}</p>
            <p> Email:<a href="Email to:" ${manager.getEmail()}"${manager.getEmail()}</p></a>
            <p> Office Number: ${manager.getOfficeNum()}</p>
            </div>
            </section>
         </div>   
            `;
            fs.writeFile("./dist/final.html", managerCard,function(err){
              if(err){
                console.log('not working')
              }
            } )
            // fs.writeFile("./dist/final.html", managerCard, (err)=> 
            // err ? console.error(err): console.log('IT WORKED!'))
            whatsNext();
  })
}

  let internQuestions = ([
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
  ])
  function empIntern() {
    inquirer.prompt(internQuestions)
  .then (response => {
    const intern = new Intern (response.name, response.ID, response.email, response.school );
    employees.push(intern);
    const internCard = `<div class="col-2 boxes card">
    <h4 class="card-header" id="day1">${intern.getName()}</h4>
    <h5>${intern.getRole()}</h5>
  </div>
  <div class="cardInfo">
  <p> ID: ${intern.getID()}</p>
  <p> Email:<a href="Email to:" ${intern.getEmail()}"${intern.getEmail()}</p></a>
  <p> Office Number: ${intern.getSchool()}</p>
  </div>`
  fs.writeFile("./dist/final.html", internCard,function(err){
    if(err){
      console.log('not working')
    }
  } )
    whatsNext();
 
  })
}
  let engineerQuestions = ([
  
    {
    type: 'input',
    message: "What is your Engineer'0s name?",
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

  ])
  function empEngineer(){
    inquirer.prompt(engineerQuestions)
  .then(response => {
    const engineer = new Engineer(response.name, response.ID, response.email, response.github);
    employees.push(engineer);
    const engineerCard = `<div class="col-2 boxes card">
    <h4 class="card-header" id="day1">${engineer.getName()}</h4>
    <h5>${engineer.getRole()}</h5>
  </div>
  <div class="cardInfo">
  <p> ID: ${engineer.getID()}</p>
  <p> Email:<a href="Email to:" ${engineer.getEmail()}"${engineer.getEmail()}</p></a>
  <p> Office Number: ${engineer.getGithub()}</p>
  </div>`
  fs.writeFile("./dist/final.html", engineerCard,function(err){
    if(err){
      console.log('not working')
    }
  } )
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
            empEngineer();
    } else if(response.choicesList == "Add Intern"){
      empIntern();
    
    }else {
      noMore();
    }
    
        })
    }

managerHtml();
// empIntern();
// empEngineer();
function noMore(){
  return;
}