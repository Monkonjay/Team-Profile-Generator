const Engineer = require('../lib/Engineer');

// test for engineer class
describe('Engineer', () => {
    it('should create an object when initialized', () => {
        const engineer = new Engineer('David', '1', 'davidemp@gmail.com');
        expect(typeof engineer).toEqual('object');
    });

    it('should return a valid github account', () => {
        const engineer = new Engineer('David', '1', 'davidemp@gmail.com', 'ddgithub');
        expect(engineer.getGithub()).toEqual(engineer.github);
    });

    it('should return an "engineer" role', () => {
        const engineer = new Engineer('David', '1', 'davidemp@gmail.com');
        expect(engineer.getRole()).toEqual('Engineer');
    });
})





