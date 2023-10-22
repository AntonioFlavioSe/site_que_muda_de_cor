//Um site que ao clicar a cor de fundo muda:

//Declarando as primeiras variaveis
const color = ["Red", "Blue", "Yellow", "Purple", "Green"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  document.body.style.background = color[3];
});

//console.log(color);
