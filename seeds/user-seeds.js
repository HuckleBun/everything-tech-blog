const { User } = require('../models');

const userSeeds = [];

const users = () => User.bulkCreate(userSeeds, {individualHooks: true});

module.exports = users;