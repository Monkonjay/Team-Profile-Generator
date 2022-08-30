const Intern = require('../lib/Intern');

// tests for intern class
describe('Intern', () => {
    it('should create an object when initialized', () => {
        const intern = new Intern('David', '1', 'davidemp@gmail.com');
        expect(typeof intern).toEqual('object');
    });

    test('should return the intern school', () => {
        const intern = new Intern('David', '1', 'davidemp@gmail.com', 'Fresno State');
        expect(intern.getSchool()).toEqual('Fresno State');
    });

    it('should return an "engineer" role', () => {
        const intern = new Intern('David', '1', 'davidemp@gmail.com');
        expect(intern.getRole()).toEqual('Intern');
    });
})
