const form = document.getElementsByClassName("form")[0];

form.onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const linguagens = document.getElementById("linguagem").value.split(" ");

  localStorage.setItem("userInfo", JSON.stringify({ name, idade, linguagens }));
  document.location.reload();
};

window.onload = () => {
  const userInfo =
    localStorage.getItem("userInfo") == null
      ? false
      : JSON.parse(localStorage.getItem("userInfo"));

  if (userInfo != false) {
    const h1 = document.createElement("h1");
    const input = document.createElement("input");
    h1.innerHTML = `Olá ${userInfo.name}, você tem ${userInfo.idade} anos e já esta aprendendo ${userInfo.linguagens}`;
    input.setAttribute("type", "submit");
    input.value = "Refazer formulário";

    input.addEventListener("click", () => {
      localStorage.clear();
      document.location.reload();
    });

    document.body.appendChild(h1);
    document.body.appendChild(input);
  } else {
    form.style.display = "flex";
  }
};
