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

    //an array of questions for user input
    inquirer.prompt([
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
        }
    ]).then(function({name, id, email, info}) {
        myTeam.push(helper.addTeamMember(memberRole, name, id, email, info));
        getEmployeeDetails();
    });
}

function getEmployeeDetails() {
    inquirer.prompt([{
        message: 'Add additional team member? :',
        name: "member_role",
        type: 'list',
        choices: ['Engineer', 'Intern', 'Done']
    }]).then(function({member_role}) {
        if(member_role === 'Done') {
            buildTeam();
        } else {
            getTeamMemberInfo(member_role);
        }
    });
}

function buildTeam() {
    let teamPage = helper.renderTeamHTML(myTeam);
    fs.writeFile(path.join(__dirname, 'dist', 'index.html'), teamPage, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Success!');
    });

}

getTeamMemberInfo('Manager');


