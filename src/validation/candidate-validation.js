const { body, validationResult } = require("express-validator");
const validaCpf = require("./cpf-validator");

module.exports = candidateValidation = [
  body("nome").exists().notEmpty().withMessage("Nome deve ser informado"),
  body("dataNacimento")
    .exists()
    .notEmpty()
    .withMessage("Data de nascimento deve ser informado"),
  body("endereco")
    .exists()
    .notEmpty()
    .withMessage("Endereco deve ser informado"),
  body("bairro").exists().notEmpty().withMessage("Bairro deve ser informado"),
  body("cidade").exists().notEmpty().withMessage("Cidade deve ser informado"),
  body("cep").exists().notEmpty().withMessage("CEP deve ser informado"),
  body("email").exists().notEmpty().withMessage("E-mail deve ser informado"),
  body("celular").exists().notEmpty().withMessage("Celular deve ser informado"),
  body("cargo")
    .exists()
    .notEmpty()
    .withMessage("Cargo pretendido deve ser informado"),
  body("identidade")
    .exists()
    .notEmpty()
    .withMessage("Identidade deve ser informada"),
  body("cpf")
    .exists()
    .notEmpty()
    .withMessage("CPF deve ser informado")
    .custom(validaCpf),
];
