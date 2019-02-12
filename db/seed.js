const Question = require("../models/Questions");
const seedData = require("./seedData.json");

Question.remove({})
  .then(() => {
    return Question.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });

// const Recipe = require('../models/Recipes')
// const seedData = require('./seedData.json')

// // const Comment = require('../models/Comments')
// // const seedComment = require('./seedComment.json')

// Recipe.remove({}).then(() => {
//   return Recipe.collection.insert(seedData)
// }).then(() => {
//   process.exit()
// })
