const Candidate = require("../models/Candidate");
const { validationResult } = require("express-validator");

module.exports = {
  async register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const candidateRequest = req.body;

    const duplicatedCPF = await Candidate.find({
      cpf: candidateRequest.cpf,
    }).exec();

    if (duplicatedCPF.length != 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "CPF já cadastrado, verifique!" }] });
    }

    try {
      const newCandidate = new Candidate(candidateRequest);
      const response = await newCandidate.save();
    } catch (err) {
      return res.status(500).send(err);
    }

    return res.status(200).send("ok");
  },
};
