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

const questions = {
  Manager: [
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
  ],

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
};


const newEmployee = {
    type: "list",
    message: "Do you want to add another employee?",
    name: "newEmployee",
    choices: ["yes","no"]
}