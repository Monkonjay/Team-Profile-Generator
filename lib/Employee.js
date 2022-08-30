// construct parent class
class Employee{
    constructor(name, id, email) {
        this.name =name;
        this.id = id;
        this.email = email;
    }
    // methods for parent class
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }


    getRole() {
        return 'Employee';
    }


    //Employee HTML card templete
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
                    </ul>
                </div>`;
    }
    
}



module.exports = Employee;