let lobos = JSON.parse(localStorage.getItem("lobos"));

function escolherIndiceImpar() {
  let indicealeatorio = 0;
  while (indicealeatorio % 2 === 0) {
    indicealeatorio = Math.floor(Math.random() * lobos.length);
  }
  let lobodalista = undefined;
  while (lobodalista === undefined) {
    lobodalista = lobos.find((item) => item.id === indicealeatorio);
  }
  return lobodalista;
}

function escolherIndicePar() {
  let indicealeatorio = 1;
  while (indicealeatorio % 2 !== 0) {
    indicealeatorio = Math.floor(Math.random() * lobos.length);
  }
  let lobodalistapar = undefined;
  while (lobodalistapar === undefined) {
    lobodalistapar = lobos.find((item) => item.id === indicealeatorio);
  }
  return lobodalistapar;
}

function listadelobos() {
  let primeirolobo = escolherIndiceImpar();
  console.log(primeirolobo);
  let segundolobo = escolherIndicePar();
  console.log(segundolobo);

  let engloba = document.createElement("div");

  let imagem_exemplo = document.createElement("div");

  let fundo_azul = document.createElement("div");

  let link_foto = document.createElement("a");
  link_foto.href = "../ShowLobo/ShowLobo.html";
  link_foto.addEventListener("click", function () {
    let loboatual = lobodalista.id;
    localStorage.setItem("lobotemp", loboatual);
    window.location.href = "ShowLobo.html";
  });

  let foto = document.createElement("img");
  foto.src = "../images/loboexemplo.png";
  foto.alt = "Foto do Lobo";

  let texto_exemplo = document.createElement("div");

  let nome = document.createElement("h2");
  nome.innerText = primeirolobo.nome;

  let idade = document.createElement("p");
  idade.innerText = "Idade: " + primeirolobo.idade;
  let descricao = document.createElement("p");
  descricao.innerText = primeirolobo.descricao;

  engloba.classList.add("engloba");
  imagem_exemplo.classList.add("imagem_exemplo");
  fundo_azul.classList.add("fundo_azul");
  foto.classList.add("imagem");
  texto_exemplo.classList.add("texto_exemplo");
  nome.classList.add("nome");
  idade.classList.add("idade");
  descricao.classList.add("descricao");

  link_foto.append(foto);

  imagem_exemplo.append(fundo_azul);
  imagem_exemplo.append(link_foto);

  texto_exemplo.append(nome);
  texto_exemplo.append(idade);
  texto_exemplo.append(descricao);

  engloba.append(imagem_exemplo);
  engloba.append(texto_exemplo);

  let lobo1 = document.querySelector(".lobo_exemplo1");
  lobo1.append(engloba);
}

document.addEventListener("DOMContentLoaded", listadelobos());
