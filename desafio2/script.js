function calcularMoedas(valor) {
  alert(valor);
  if (isNaN(valor)) {
    alert("Insira um número válido");
    return [];
  }
  const moedas = [1, 0.5, 0.05];
  let moedasRecebidas = 0;

  let resultado = "";

  moedas.forEach((moeda, index) => {
    resultado += `<p>${parseInt(valor / moeda)} moedas de R$${moeda.toFixed(
      2
    )} ${moeda < 1 ? "Centavos" : "Real"} </p>`;

    moedasRecebidas += parseInt(valor / moeda);

    valor = valor % moeda;
  });

  resultado += `A quantidade mínima de moedas a serem recebidas como troco são ${moedasRecebidas}`;

  document.getElementById("resultado").innerHTML = resultado;
}
const number = document.getElementById("number");

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  calcularMoedas(number.value.replace(/,/g, "."));
};
