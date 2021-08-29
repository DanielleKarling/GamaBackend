const express = require("express");
const { body, validationResult } = require("express-validator");
const CandidateController = require("./controllers/CandidateController");
const candidateValidation = require('./validation/candidate-validation')
const routes = new express.Router();

routes.post(
  "/register", 
  candidateValidation,
  CandidateController.register
);
routes.get("/", (req, res) => {
  res.send("itimalia");
});
module.exports = routes;
