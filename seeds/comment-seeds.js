const { Comment } = require('../models');

const commentSeeds = [];

const comments = () => Comment.bulkCreate(commentSeeds, {individualHooks: true});

module.exports = comments;