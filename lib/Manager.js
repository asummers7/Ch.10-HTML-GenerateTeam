const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

    managerHTML() {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}" class="card-link">${this.email}</a></li>
          <li class="list-group-item">Office number: ${this.officeNumber}</li>
        </ul>
      </div>`
    }
}

module.exports = Manager