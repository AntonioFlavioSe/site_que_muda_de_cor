//Um site que ao clicar a cor de fundo muda:

//Declarando as primeiras variaveis
const color = ["Red", "Blue", "Yellow", "Purple", "Green"];
const btn = document.getElementById("btn");
const colors = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.background = color[randomColor];
  //console.log(randomColor);
  colors.textContent = color[randomColor];
});

//Funcao pra criar numeros randomicos;
function getRandomColor() {
  return Math.floor(Math.random() * color.length);
}
