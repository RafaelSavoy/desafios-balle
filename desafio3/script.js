document.getElementsByClassName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const string = document.getElementById("frases").value;

  const palavras = string.split(" ")
  const palavrasSemEspaco = palavras.filter(e => {
    return e != ''
  })

  let partes = string.split(".").length;
  const letras = string;
  const letrasSemEspacos = letras.replace(" ", "");

  document.getElementById(
    "resultado"
  ).innerHTML = `Este parágrafo tem ${letrasSemEspacos.length} letras, ${palavrasSemEspaco.length} palavras, ${partes} frases`;
});
