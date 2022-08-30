// require parent class
const Employee = require('./Employee')

// Intern subclass construction
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    
    // methods for subcalss 
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    //  Intern  HTML card templete
    getHTMLCard() {
        return `<div class="card col-2 m-3">
                    <div class="card-header employee text-center bg-warning">
                        <h4>${this.getName()}</h4>
                        <h5>${this.getRole()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${this.getId()}</li>
                        <li class="list-group-item">
                            <a href='mailto:${this.getEmail()}'>
                                ${this.getEmail()}
                            </a>
                        </li>
                        <li class="list-group-item">
                                School: ${this.getSchool()}
                        </li>
                    </ul>
                </div>`;
    }
}

module.exports = Intern;