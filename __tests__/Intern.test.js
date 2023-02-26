const Intern = require('../lib/Intern');

const obj1 = {
    name: 'Alec',
    id: 12,
    email: 'asummers34@gmail.com',
    school: 'University of Utah'
};

describe ('Intern', () => {
    it('should create a new instance of Intern', () => {
        const intern = new Intern();

        expect(intern instanceof Intern).toEqual(true);
    });

    it('should create a new object with value of name, id, email, and school', () => {
        const intern = new Intern(obj1.name, obj1.id, obj1.email, obj1.school);

        expect(intern).toEqual(obj1);
    });

    it('should return the name of Intern', () => {
        const intern = new Intern(obj1.name, obj1.id, obj1.email, obj1.school);

        const name = intern.getName();

        expect(name).toEqual(obj1.name);
    });

    it('should return the id of Intern', () => {
        const intern = new Intern(obj1.name, obj1.id, obj1.email, obj1.school);

        const id = intern.getId();

        expect(id).toEqual(obj1.id);
    });

    it('should return the email of Intern', () => {
        const intern = new Intern(obj1.name, obj1.id, obj1.email, obj1.school);

        const email = intern.getEmail();

        expect(email).toEqual(obj1.email);
    });

    it('should return the role of Intern', () => {
        const type = 'Intern'
        const intern = new Intern(obj1.name, obj1.id, obj1.email, obj1.school);

        const role = intern.getRole();

        expect(role).toEqual(type);
    });

    it('should create a new card with Intern values', () => {
        const div = `<div class="card" style="width: 18rem;">
        <div class="card-body p-3 mb-2 bg-success text-white">
          <h5 class="card-title">Alec</h5>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 12</li>
          <li class="list-group-item">Email: <a href="mailto:asummers34@gmail.com" class="card-link">asummers34@gmail.com</a></li>
          <li class="list-group-item">School: University of Utah</li>
        </ul>
      </div>`

        const intern = new Intern(obj1.name, obj1.id, obj1.email, obj1.school);
        const html = intern.internHTML();

        expect(html).toEqual(div);

    })
})