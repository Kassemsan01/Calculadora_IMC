const valor1 = document.querySelector("#container_input");
const valor2 = document.querySelector("#container_input1");
const contai = document.querySelector("#container");
const opera = document.querySelector("#operacao");

const IMC = (valorA, valorB) => {
  // opera.innerHTML = "";

  const result = Math.round(parseFloat(valorA / (valorB * valorB)));

  const templete = `<div class = "row">
        <div class = "result1"> Peso: ${valorA} </div>
        <div class = "result2"> Altura: ${valorB} </div>
        <div class ="result"> Seu IMC: ${result} </div>
    </div>`;

  const parser = new DOMParser();

  const htmlTemplate = parser.parseFromString(templete, "text/html");

  const row = htmlTemplate.querySelector(".row");

  opera.appendChild(row);

  if (result <= 18.5) {
    const baixo = `<div class = "row">
        <div class ="baixo"> Baixo peso </div>
        <img src="img/escala-de-peso.png" alt="balança" class = "imgBalanca"/>
    </div>`;

    const htmlTemplate = parser.parseFromString(baixo, "text/html");

    const row = htmlTemplate.querySelector(".row");

    opera.appendChild(row);
  } else if (result >= 18.6 && result <= 24.99) {
    const normal = `<div class = "row">
        <div class ="normal"> Dentro da media </div>
        <img src="img/verificado.png" alt="Sinal de verificado" class = "imgBalanca"/>
    </div>`;

    const htmlTemplate = parser.parseFromString(normal, "text/html");

    const row = htmlTemplate.querySelector(".row");

    opera.appendChild(row);
  } else if (result >= 25.0 && result <= 29.99) {
    const sobrepeso = `<div class = "row">
        <div class ="sobrepeso"> sobrepeso </div>
        <img src="img/perigo.png" alt="placa de perigo" class = "imgBalanca"/>
    </div>`;

    const htmlTemplate = parser.parseFromString(sobrepeso, "text/html");

    const row = htmlTemplate.querySelector(".row");

    opera.appendChild(row);
  } else if (result >= 30.0) {
    const obe = `<div class = "row">
        <div class ="obe"> Obesidade </div>
        <img src="img/balancas.png" alt="placa de perigo" class = "imgBalanca"/>
    </div>`;

    const htmlTemplate = parser.parseFromString(obe, "text/html");

    const row = htmlTemplate.querySelector(".row");

    opera.appendChild(row);
  }

  valor1.value = "";
  valor2.value = "";

  if (result <= 55.0) {
    const ideal = 55.0 - result;
  } else if (result >= 77.0) {
    const ideal = result - 77.0;
  }

  
};

contai.addEventListener("submit", (e) => {
  e.preventDefault();
  opera.innerHTML ="";

  const multiplicationNumber = valor1.value;

  const valorB = valor2.value;

  if (!multiplicationNumber || !valorB) return;

  IMC(multiplicationNumber, valorB);
});
