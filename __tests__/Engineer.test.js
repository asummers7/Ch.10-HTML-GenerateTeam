const Engineer = require('../lib/Engineer');

const obj1 = {
    name: 'Alec',
    id: 12,
    email: 'asummers34@gmail.com',
    github: 'asummers7'
};

describe ('Engineer', () => {
    it('should create a new instance of Engineer', () => {
        const engineer = new Engineer();

        expect(engineer instanceof Engineer).toEqual(true);
    });

    it('should create a new object with value of name, id, email, and github', () => {
        const engineer = new Engineer(obj1.name, obj1.id, obj1.email, obj1.github);

        expect(engineer).toEqual(obj1);
    });

    it('should return the name of Engineer', () => {
        const engineer = new Engineer(obj1.name, obj1.id, obj1.email, obj1.github);

        const name = engineer.getName();

        expect(name).toEqual(obj1.name);
    });

    it('should return the id of Engineer', () => {
        const engineer = new Engineer(obj1.name, obj1.id, obj1.email, obj1.github);

        const id = engineer.getId();

        expect(id).toEqual(obj1.id);
    });

    it('should return the email of Engineer', () => {
        const engineer = new Engineer(obj1.name, obj1.id, obj1.email, obj1.github);

        const email = engineer.getEmail();

        expect(email).toEqual(obj1.email);
    });

    it('should return the role of Engineer', () => {
        const type = 'Engineer'
        const engineer = new Engineer(obj1.name, obj1.id, obj1.email, obj1.github);

        const role = engineer.getRole();

        expect(role).toEqual(type);
    });

    it('should create a new card with Engineer values', () => {
        const div = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Alec</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 12</li>
          <li class="list-group-item">Email: <a href="mailto:asummers34@gmail.com" class="card-link">asummers34@gmail.com</a></li>
          <li class="list-group-item">Github: <a href="https://www.github.com/asummers7" class="card-link">asummers7</a></li>
        </ul>
      </div>`

        const engineer = new Engineer(obj1.name, obj1.id, obj1.email, obj1.github);
        const html = engineer.engineerHTML();

        expect(html).toEqual(div);

    })
})