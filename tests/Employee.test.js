const Employee = require('../lib/Employee');

// testing employee class
describe('Employee', () => {
    it('should create an object when initialized', () => {
        const employee = new Employee('David', '1', 'davidemp@gmail.com');
        expect(typeof employee).toEqual('object');
    });

    it('should return a valid email', () => {
        const employee = new Employee('David', '1', 'davidemp@gmail.com');
        expect(employee.getEmail()).toEqual(employee.email);
    });

    it('should return an "employee" role', () => {
        const employee = new Employee('David', '1', 'davidemp@gmail.com');
        expect(employee.getRole()).toEqual('Employee');
    });
})
