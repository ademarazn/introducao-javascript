var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {
  if (event.target.tagName == "TD") {
    event.target.parentNode.classList.add("fadeout");
    setTimeout(() => {
      event.target.parentNode.remove();
    }, 500);
  }
});

/*pacientes.forEach((paciente) => {
  paciente.addEventListener("dblclick", () => {
    // console.log("Fui clicado com um duplo clique!");
    this.remove();
  });
});*/
