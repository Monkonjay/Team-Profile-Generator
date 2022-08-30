// Require Classes
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// Create class instance based on roles
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

 // Generate card for individual roles
function renderTeamHTML(myTeam) {
    employeeCard = '';
    for (const employee of myTeam) {
        employeeCard += employee.getHTMLCard();
    }

    // Main template for HTML
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


                <div class="row justify-content-center">${employeeCard}</div>
                    
                
            </body>
            </html>`;
}

exports.addTeamMember = addTeamMember;
exports.renderTeamHTML = renderTeamHTML;