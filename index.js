#!/usr/bin/env node
//Import the inquirer module which is a command line interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue.bold.italic("\n\t\t WELCOME! TO WORDS COUNT \t\n"));
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.greenBright.bold("Enter Your Sentence to count the words:"),
    },
]);
const words = answers.sentence.trim().split(" ");
//print the array of words to the console
console.log(chalk.bgGreen.bold.yellow(`your sentence word count is ${words.length}`));
