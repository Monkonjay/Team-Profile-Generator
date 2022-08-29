// require packages and dependencies
const inquirer = require('inquirer');
const path = require('path');
const helper = require('./src/helper');
const fs = require('fs');

// const generateHTML = require('./utils/generateMarkdown');

let myTeam = [];

// Questions for User Input
function getTeamMemberInfo(memberRole) {
    // collect additional info not inherited from Employee class
    extraInfo = '';
    if(memberRole === 'Engineer') {
        extraInfo = 'Github Username';   
    } else if (memberRole === 'Intern') {
        extraInfo = 'School Name'; 
    } else {
        extraInfo = 'Office Number'; 
    }
}

// prompt user for entry


//an array of questions for user input
const questions = [

    {
        message: `What is the ${memberRole}'s name? :`,
        name: "name",
        type: 'input',
    },
    {
        message: `What is the ${memberRole}'s ID? :`,
        name: "id",
        type: 'input',
    },
    {
        message: `What is the ${memberRole}'s email? :`,
        name: "email",
        type: 'input',
    },  
    {
        message: `What is the ${memberRole}'s ${extraInfo}? :`,
        name: "info",
        type: 'input',
    },
   
]


// // TODO: Create a function to write README file
// function writeToFile(data) {
//     fs.writeFile('./testingReadME/README.md', generateMarkdown(data), err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log('success');
//         }

//     })
// }

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


