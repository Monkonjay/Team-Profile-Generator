// require parent class
const Employee = require('./Employee')

// construct manager subclass
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    // manager subclass methods
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    // Manager HTML card templete
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
                            <a href='phone:${this.getOfficeNumber()}'>
                                Phone: ${this.getOfficeNumber()}
                            </a>                               
                        </li>
                    </ul>
                </div>`;
    }
}

module.exports = Manager;