const string =
  "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia atque voluptas nostrum laborum et dolorum delectus temporibus molestiae. Vitae atque doloremque hic quidem sed ratione ipsa consectetur modi eos.";

const palavras = string.split(" ").length
let partes = string.split(".").length
const letras = string.length;

console.log(
  `Este parágrafo tem ${letras} letras, ${palavras} palavras, ${partes} frases`
);

<script src="desafio3/script.js"></script>