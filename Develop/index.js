// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project? (required)'
        },
        {
            type: 'input',
            name: 'authorName',
            message: 'What is your name? (required)'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install your project? (required)'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What usage is your project intended for?'
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List colloborators and third party assests'
        },
        {
            type: 'input',
            name: 'License',
            message: 'Licensing'
        },
        
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser();
