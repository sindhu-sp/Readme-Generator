// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    name: "title",
    type: "input",
    message: "Project title?",
  },
  {
    name: "description",
    type: "input",
    message: "Project description?",
  },
  {
    name: "installation",
    type: "input",
    message: "Project installation directions?",
  },
  {
    name: "usage",
    type: "input",
    message: "Project usage?",
  },
  {
    name: "credits",
    type: "input",
    message: "Project collaborator names?",
  },
  {
    name: "license",
    type: "input",
    message: "Project license?",
  },
  {
    name: "contributing",
    type: "input",
    message: "Contributing guidelines?",
  },
  {
    name: "github",
    type: "input",
    message: "Github user name?",
  },
  {
    name: "tests",
    type: "input",
    message: "Project tests?",

  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

  });

}


// TODO: Create a function to initialize app
function init() {
  console.log("Please answer the prompts to generate a README.md")
  const data = inquirer.prompt(questions)
    .then(answer => {
      if (answer) {
        generateMarkdown(answer);
        writeToFile("./utils/README.md", generateMarkdown(answer));
      }
      console.log(answer)
      console.log('Successfully wrote to README.md!');
    });

}

// Function call to initialize app
init();