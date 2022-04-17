#!/usr/bin/env node

const inquirer = require("inquirer");
const fs = require("fs");
console.log(); // get args

const nameOfProject = process.argv[2];

if (process.argv.length <= 2) {
  console.error("Missing required argument <app-name>");
}
inquirer
  .prompt([
    {
      type: "checkbox",
      message: "Select toppings 🧑‍🎓",
      name: "toppings",
      choices: [],
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
