const Manager = require('../lib/Manager');

// tests for manager class
describe('Manager', () => {
    it('should create an object when initialized', () => {
        const manager = new Manager('David', '1', 'davidemp@gmail.com');
        expect(typeof manager).toEqual('object');
    });

    it('should return the manager office number', () => {
        const manager = new Manager('David', '1', 'davidemp@gmail.com', '559-425-6325');
        expect(manager.getOfficeNumber()).toEqual('559-425-6325');
    });

    it('should return a "manager" role', () => {
        const manager = new Manager('David', '1', 'davidemp@gmail.com');
        expect(manager.getRole()).toEqual('Manager');
    });
})
