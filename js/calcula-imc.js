var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var paciente of pacientes) {

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  // console.log(tdPeso);
  // console.log(peso);

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  // console.log(tdAltura);
  // console.log(altura);

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    console.log("Altura inválida!");
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    // console.log(imc);
    tdImc.textContent = imc;
  }

}

function validaPeso(peso) {
  return peso > 0 && peso < 1000;
}

function validaAltura(altura) {
  return altura > 0 && altura < 3.0;
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
