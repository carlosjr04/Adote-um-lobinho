let lobos = JSON.parse(localStorage.getItem("lobos"));

function addLobo() {
  let nomeLobo = document.querySelector(".texto").value;
  let anosLobo = parseInt(document.querySelector(".numero").value);
  let urlLobo = document.querySelector(".url").value;
  let descricaoLobo = document.querySelector("#descricao").value;
  lobos.push({
    id: lobos.length + 1,
    nome: nomeLobo,
    idade: anosLobo,
    descricao: descricaoLobo,
    imagem: urlLobo,
    adotado: false,
    nomeDono: null,
    idadeDono: null,
    emailDono: null,
  });
  localStorage.setItem("lobos", JSON.stringify(lobos)); //salva no local storage
}

let salvar = document.querySelector("#salvar");
salvar.addEventListener("click", addLobo);
