let lobos = JSON.parse(localStorage.getItem("lobos"));

function addLobo() {
  let nomeLobo = document.querySelector(".texto").value;
  let anosLobo = parseInt(document.querySelector(".numero").value);
  let urlLobo = document.querySelector(".url").value;
  let descricaoLobo = document.querySelector("#descricao").value;
  let idfinal=0;
  for ( i = 1; i < lobos.length; i++) { 
    if (lobos.find(item => item.id === i)) { 
        continue;
    }else{
        idfinal = i;
        break;
    }
}
  
  lobos.push({
    id: idfinal,
    nome: nomeLobo,
    idade: anosLobo,
    descricao: descricaoLobo,
    imagem: urlLobo,
    adotado: false,
    nomeDono: null,
    idadeDono: null,
    emailDono: null,
  });
  localStorage.setItem("lobos", JSON.stringify(lobos));
  alert("Lobo adicionado!")
}

let salvar = document.querySelector("#salvar");
salvar.addEventListener("click", addLobo);
