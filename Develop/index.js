// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
        {
            // Name of project
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project? (required)'
        },
        {
            // Name of autho
            type: 'input',
            name: 'authorName',
            message: 'What is your name? (required)'
        },
        {
            // installation input
            type: 'input',
            name: 'Installation',
            message: 'How do you install your project? (required)'
        },
        {
            // usage input
            type: 'input',
            name: 'Usage',
            message: 'What usage is your project intended for?'
        },
        {
            // credits input
            type: 'input',
            name: 'Credits',
            message: 'List colloborators and third party assests'
        },
        {
            // license select
            type: 'checkbox',
            name: 'License',
            message: 'Licensing',
            choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None'],
        },  
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('write success');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
