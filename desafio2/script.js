function calcularMoedas(valor) {
  let valorNumero = parseFloat(valor)
  if(valorNumero == 'NaN'){
    alert('Insira um número válido')
    return
  }
  const moedas = [1, 0.5, 0.05];
  let moedasRecebidas = 0;

  moedas.forEach((moeda) => {
    console.log(
      `${parseInt(valor / moeda)} de R$${moeda.toFixed(2)} ${
        moeda < 1 ? "Centavos" : "Real"
      }`
    );

    moedasRecebidas += parseInt(valor / moeda);

    valor = valor % moeda;
  });

  console.log(
    `A quantidade mínima de moedas a serem recebidas como troco são ${moedasRecebidas}`
  );
}

window.onload = calcularMoedas(44.06)