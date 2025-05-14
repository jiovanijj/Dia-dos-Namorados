// Dias desde que se conheceram (ex: 2022-03-01)
const dataConhecimento = new Date("2022-03-01");
const hoje = new Date();
const diferenca = hoje - dataConhecimento;
const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
document.getElementById("dias").textContent = dias;

// Carrossel de imagens
let indice = 0;
const imagens = [
  "fotos/foto1.jpg",
  "fotos/foto2.jpg",
  "fotos/foto3.jpg"
];

function mudarImagem(passo) {
  indice = (indice + passo + imagens.length) % imagens.length;
  document.getElementById("imagem").src = imagens[indice];
}
