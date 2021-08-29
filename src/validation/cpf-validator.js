function validaCPF(cpf) {
  if (cpf.length != 11) {
    throw new Error("CPF invalido, fovor informar um CPF valido");
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
      throw new Error("CPF invalido, fovor informar um CPF valido");
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
      throw new Error("CPF invalido, fovor informar um CPF valido");
    }

    return true;
  }
}

module.exports = validaCPF;
