// Requires Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Function for Async & Await Structure
const writeFileAsync = util.promisify(fs.writeFile);

// validator() repeats question if user leaves it blank
const validator = (val) => {
    if (val !== "") {
        return true;
    }
}

// Inquirer prompts to gather info to plug into .md template
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "repo",
      message: "enter your repo url",
      validate: validator
    },
    {
      type: "input",
      name: "description",
      message: "write a short description of your mini project",
      validate: validator
    },
    {
      type: "input",
      name: "linkedin",
      message: "enter your linkedin url",
      validate: validator
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
      validate: validator
    },
    {
      type: "input",
      name: "contributors",
      message: "list any additional contributors",
      validate: validator
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
      validate: validator
    }
  ]);
}