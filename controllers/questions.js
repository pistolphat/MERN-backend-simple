// const express = require("express");
// const router = express.Router();
// const Question = require("../models/Questions");

// // GET - homepage displaying all questions
// router.get("/", (req, res) => {
//   Question.find({}).then(question => {
//     res.render("index", { question });
//   });
// });

// // Clicked to add new item - take to new page
// router.get("/new", (req, res) => {
//   res.render("questions/new");
// });

// // Create new question based on model - from homepage
// router.post("/", (req, res) => {
//   Question.create({
//     title: req.body.title,
//     answers: req.body.answers,
//   }).then(question => {
//     res.redirect("/");
//   });
// });

// // Click to show and redirect to /:id
// router.get("/:id", (req, res) => {
//   Question.findOne({ _id: req.params.id }).then(question => {
//     res.render("questions/edit", question);
//   });
// });

// // Update specific item by ID
// router.put("/:id", (req, res) => {
//   Question.findOneAndUpdate({ _id: req.params.id }, req.body).then(question => {
//     res.redirect("/");
//   });
// });

// // Delete
// router.delete("/:id", (req, res) => {
//   Question.findOneAndDelete({ _id: req.params.id }).then(() => {
//     res.redirect("/");
//   })
// });

// module.exports = router;

// //send user to specific page to edit item
// // router.get("/questions/:id", (req, res) => {
// //   Question.findOne({ _id: req.params.id }).then(() => {
// //     res.render("/questions");
// //   });
// // });