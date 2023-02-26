const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool () {
        return this.school; 
    };

    getRole() {
        return 'Intern';
    };

    internHTML() {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body p-3 mb-2 bg-success text-white">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}" class="card-link">${this.email}</a></li>
          <li class="list-group-item">School: ${this.getSchool()}</li>
        </ul>
      </div>`
    }
}

module.exports = Intern