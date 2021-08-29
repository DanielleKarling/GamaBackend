const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema(
  {
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: false },
    email: { type: String, unique: false, required: false },
    dataNacimento: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    endereco: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: false },
    telefone1: { type: String, unique: false, required: false },
    telefone2: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: false },
    contato: { type: String, unique: false, required: false },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Candidate", CandidateSchema);
