const Engineer = require('../lib/Engineer');

test('Get email should return a valid email', () => {
    const engineer = new Engineer('David', '1', 'davidemp@gmail.com', 'ddgithub');
    expect(engineer.getGithub()).toEqual(engineer.github);
})

