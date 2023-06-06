let theme = document.getElementById("checkbox");
theme.addEventListener("click", function () {
  document.querySelector(".corpo-dark").classList.toggle("corpo-light");

  document
    .querySelector(".container-principal-dark")
    .classList.toggle("container-principal-light");

  document.querySelector(".sobre-mim-dark").classList.toggle("sobre-mim-light");

  document
    .querySelector(".container-interativo-dark")
    .classList.toggle("container-interativo-light");

  document.querySelector(".bloco-dark").classList.toggle("bloco-light");

  document
    .querySelector(".titulo-bloco-dark")
    .classList.toggle("titulo-bloco-light");

  document
    .querySelector(".texto-bloco-dark")
    .classList.toggle("texto-bloco-light");
});
