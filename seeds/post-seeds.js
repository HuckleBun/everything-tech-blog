const { Post } = require('../models');

const postSeeds = [];

const posts = () => Post.bulkCreate(postSeeds, {individualHooks: true});

module.exports = posts;