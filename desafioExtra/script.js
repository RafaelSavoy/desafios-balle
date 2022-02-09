const form = document.getElementById("form");

function generateUser(name, idade, habilidades) {
  const userInfos = [name, idade, habilidades];
  const userClasses = ["Nome", "Idade", "Habilidades"];

  const ul = document.getElementById("resultado");
  const li = document.createElement("li");
  userInfos.forEach((e, i) => {
    li.classList.add("resultado__item");
    const div = document.createElement("div");
    div.classList.add(userClasses[i].toLowerCase());

    const span1 = document.createElement("span");
    span1.classList.add("userInfo");
    const span2 = document.createElement("span");
    span2.classList.add("userInfo--info");

    span1.innerHTML = `${userClasses[i]}: `;
    span2.innerHTML = `${e}`;

    div.appendChild(span1);
    div.appendChild(span2);
    li.appendChild(div);
  });
  ul.appendChild(li);
}

form.addEventListener("submit", (e) => {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const habilidades = document.getElementById("habilidades").value;
  e.preventDefault();
  generateUser(nome, idade, habilidades);
});
