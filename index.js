// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        message: 'What is the title of your project? :',
        name: "title",
        type: 'input',
    },
    {
        message: 'Describe your project :',
        name: "description",
        type: 'input',
    },
    {
        message: 'Enter any installation instruction :',
        name: "install",
        type: 'input',
    },
    {
        message: 'Enter usage information :',
        name: "usage",
        type: 'input',
    },
    {
        message: 'What are the contribution guidelines? :',
        name: "contribution",
        type: 'input',
    },
    {
        message: 'Provide test instructions :',
        name: "test",
        type: 'input',
    },
    {
        message: 'Plesae Select license :',
        name: "license",
        type: 'list',
        choices: ['Apache', 'MIT', 'IBM', 'BSD3', 'No License'],
    },    {
        message: 'What is your Github username? :',
        name: "user",
        type: 'input',
    },
    {
        message: 'Enter your email address :',
        name: "email",
        type: 'input',
    },
    {
        message: 'How can you be reached? :',
        name: "contact",
        type: 'input',
    },

]


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./testingReadME/README.md', generateMarkdown(data), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('success');
        }

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
        // const markdownData = generateMarkdown(answers);
        writeToFile(answers);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();


