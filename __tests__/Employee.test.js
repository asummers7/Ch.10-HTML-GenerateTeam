const Employee = require('../lib/Employee');

const obj1 = {
    name: 'Alec',
    id: 12,
    email: 'asummers34@gmail.com'
}

describe('Employee', () => {
    it('should return an object with name,id,and email values', () => {
        const name = 'Alec';
        const id = 12;
        const email = 'asummers34@gmail.com';

        const employee = new Employee(obj1.name, obj1.id, obj1.email); 

        expect(employee).toEqual(obj1);
    });

    it('should return the name of Employee', () => {
        const employee = new Employee(obj1.name, obj1.id, obj1.email);

        const name = employee.getName();

        expect(name).toEqual(obj1.name);
    });

    it('should return the id of Employee', () => {
        const employee = new Employee(obj1.name, obj1.id, obj1.email);

        const id = employee.getId();

        expect(id).toEqual(obj1.id);
    });

    it('should return the email of Employee', () => {
        const employee = new Employee(obj1.name, obj1.id, obj1.email);

        const email = employee.getEmail();

        expect(email).toEqual(obj1.email);
    });
    it('should return the role of Employee', () => {
        const type = 'Employee'
        const employee = new Employee(obj1.name, obj1.id, obj1.email);

        const role = employee.getRole();

        expect(role).toEqual(type);
    });
})