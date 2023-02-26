const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub () {
        return this.github; 
    };

    getRole() {
        return 'Engineer';
    };

    engineerHTML() {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body p-3 mb-2 bg-success text-white">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}" class="card-link">${this.email}</a></li>
          <li class="list-group-item">Github: <a href="https://www.github.com/${this.getGithub()}" class="card-link">${this.getGithub()}</a></li>
        </ul>
      </div>`
    }
}

module.exports = Engineer