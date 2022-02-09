window.onload = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
  <h1 class="header__title">Desafios Comunidade Ballerini</h1>
  <nav class="header__nav">
	  <ul class="header__list">
		  <li class="header__item"><a class="header__link" href="../desafio1/desafio1.html">Desafio 1</a></li>
		  <li class="header__item"><a class="header__link" href="../desafio2/desafio2.html">Desafio 2</a ></li>
		  <li class="header__item"><a class="header__link" href="../desafio3/desafio3.html">Desafio 3</a></li>
		  <li class="header__item"><a class="header__link" href="../desafioExtra/desafioExtra.html">Desafio Extra</a></li>
	  </ul>
  </nav>
`;
};
