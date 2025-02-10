const lobolocal = localStorage.getItem("lobotemp"); 
let lobos = JSON.parse(localStorage.getItem('lobos'));
console.log(lobolocal);
let lobousado = Number(lobolocal)
lobodalista = lobos.find(item => item.id === lobousado);

console.log(lobodalista)
function mostrarlobo(){
    
    
    let divmaior = document.createElement("div")
    let imagem = document.createElement("img");
    let texto = document.createElement("div");

    let nomelobo = document.createElement("h1");
    let id = document.createElement("p");

    imagem.src = "../images/loboexemplo_menor.png";
    imagem.alt = "lobo na floresta";
    nomelobo.innerText = lobodalista.nome;
    id.innerText = lobodalista.id;

    divmaior.classList.add("divmaior")
    imagem.classList.add("imagem");
    texto.classList.add("texto");
    nomelobo.classList.add("nomelobo");
    id.classList.add("id");

    texto.append(nomelobo)
    texto.append(id)

    divmaior.append(texto)
    divmaior.append(imagem)

    let adote = document.querySelector(".adote");
    adote.append(divmaior)
    

}
document.addEventListener("DOMContentLoaded", function() {
    mostrarlobo();
});