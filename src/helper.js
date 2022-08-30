const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// Helper function to create an instance of appropriate class based on the employee type.
function addTeamMember(employee_type, name, id, email, info){
    switch (employee_type) {
        case 'Manager':
            return new Manager(name, id, email, info);
        case 'Engineer':
            return new Engineer(name, id, email, info);
        case 'Intern':
            return new Intern(name, id, email, info);
        default:
            return new Employee(name, id, email);
    }
}

// Helper function that takes in an array of `team` members and returns the generated HTML for the team.
function renderTeamHTML(team) {
    // Generate the HTML card for each of the team member.
    teamCardsHTML = '';
    for (const team_member of team) {
        teamCardsHTML += team_member.getHTMLCard();
    }

    // Create HTML by embedding the cards HTML generated.
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
                <title>Team Generator</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="../dist/style.css"/>
            </head>
            <body>
                <div id="header" class="card bg-info">
                    <div class="card-header">
                        <h1>My Team</h1>
                    </div>
                </div>


                <div class="row justify-content-center">${teamCardsHTML}</div>
                    
                
            </body>
            </html>`;
}

exports.addTeamMember = addTeamMember;
exports.renderTeamHTML = renderTeamHTML;