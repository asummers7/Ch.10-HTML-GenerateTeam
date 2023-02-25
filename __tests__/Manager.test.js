const Manager = require('../lib/Manager');

const obj1 = {
    name: 'Alec',
    id: 12,
    email: 'asummers34@gmail.com',
    officeNumber: 13
}

describe ('Manager', () => {
    it('should create a new instance of Manager', () => {
        const manager = new Manager();

        expect(manager instanceof Manager).toEqual(true);
    });

    it('should create a new object with value of name, id, email, and officeNumber', () => {
        const manager = new Manager(obj1.name, obj1.id, obj1.email, obj1.officeNumber);

        expect(manager).toEqual(obj1);
    });

    it('should return the name of Manager', () => {
        const manager = new Manager(obj1.name, obj1.id, obj1.email, obj1.officeNumber);

        const name = manager.getName();

        expect(name).toEqual(obj1.name);
    });

    it('should return the id of Manager', () => {
        const manager = new Manager(obj1.name, obj1.id, obj1.email, obj1.officeNumber);

        const id = manager.getId();

        expect(id).toEqual(obj1.id);
    });

    it('should return the email of Manager', () => {
        const manager = new Manager(obj1.name, obj1.id, obj1.email, obj1.officeNumber);

        const email = manager.getEmail();

        expect(email).toEqual(obj1.email);
    });

    it('should return the role of Manager', () => {
        const type = 'Manager'
        const manager = new Manager(obj1.name, obj1.id, obj1.email, obj1.officeNumber);

        const role = manager.getRole();

        expect(role).toEqual(type);
    });

    it('should create a new card with manager values', () => {
        const div = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Alec</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 12</li>
          <li class="list-group-item">Email: <a href="mailto:asummers34@gmail.com" class="card-link">asummers34@gmail.com</a></li>
          <li class="list-group-item">Office number: 13</li>
        </ul>
      </div>`

        const manager = new Manager(obj1.name, obj1.id, obj1.email, obj1.officeNumber);
        const html = manager.generateHTML();

        expect(html).toEqual(div);

    })
})