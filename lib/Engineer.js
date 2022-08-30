const Employee = require('./Employee')

// construct subclass
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    // methods for Engineer subclass
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

      // Engineer HTML card templete
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
                            <a href='https://github.com/${this.getGithub()}' target='_blank'>
                                GitHub: ${this.getGithub()}
                            </a>
                                
                        </li>
                    </ul>
                </div>`;
    }
}

module.exports = Engineer;