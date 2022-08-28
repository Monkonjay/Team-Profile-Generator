const Employee = require('../lib/Employee');

test('Get email should return a valid email', () => {
    const employee = new Employee('David', '1', 'davidemp@gmail.com');
    expect(employee.getEmail()).toEqual(employee.email);
})