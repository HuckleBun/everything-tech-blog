const { User } = require('../models');

const userSeeds = [
    {
        username: 'hucklebun',
        email: 'micah@theduehrings.com',
        password: 'password'
    }
];

const users = () => User.bulkCreate(userSeeds, {individualHooks: true});

module.exports = users;