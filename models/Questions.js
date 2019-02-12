const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Question = new Schema ({
  title: String,
  answer: String,
})

module.exports = mongoose.model('Question', Question)