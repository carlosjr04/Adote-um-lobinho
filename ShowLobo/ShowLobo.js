
const lobolocal = localStorage.getItem("lobotemp"); 
let lobos = JSON.parse(localStorage.getItem('lobos'));
console.log(lobos)
let loboatual = Number(lobolocal);
console.lo
let lobodalista = lobos.find(item => item.id === loboatual);
console.log(lobodalista); 
function aparecerlobo(){      
            


            let lobo1 =document.createElement("div");

            let lobo_exemplo = document.createElement("div");

            let imagem_exemplo = document.createElement("div");


            let fundo_azul = document.createElement("div");

            
            
            let imagem = document.createElement("img")
            if(loboatual%2===0){
                imagem.src = "../images/loboexemplo2.png"
            }else{
                imagem.src = "../images/loboexemplo.png"
            }
            
            imagem.alt = "Lobo na floresta"

            let botao_adocao = document.createElement("div");

            let adota = document.createElement("div");
            adota.innerText = "Adotar"
            adota.addEventListener("click", function() {
                window.location.href = "../AdotarLobo/AdotarLobo.html";
                });
            let excluir = document.createElement("div");
            excluir.innerText = "excluir"
            excluir.addEventListener("click", function() {
                let idremove= 10000;
                idremove = lobodalista.id;
                lobos = lobos.filter(lobo => lobo.id !== idremove);

                localStorage.setItem("lobos", JSON.stringify(lobos));
                alert(`O lobinho ${lobodalista.nome} foi removido :(` )
                window.location.href = "../ListaDeLobos/ListaDeLobos.html";
                });
            let texto_exemplo = document.createElement("p");
            texto_exemplo.innerText = lobodalista.descricao;

            

            

            lobo1.classList.add("lobo1");
            lobo_exemplo.classList.add("lobo_exemplo");
            imagem_exemplo.classList.add("imagem_exemplo");
            fundo_azul.classList.add("fundo_azul");
            
            texto_exemplo.classList.add("texto_exemplo");
            imagem.classList.add("imagem");
            botao_adocao.classList.add("botao_adocao");
            adota.classList.add("adota");
            adota.classList.add("adota:hover");

            excluir.classList.add("excluir");
            excluir.classList.add("excluir:hover");
            
            botao_adocao.append(adota);
            botao_adocao.append(excluir);

            imagem_exemplo.append(fundo_azul);
            imagem_exemplo.append(imagem);
            imagem_exemplo.append(botao_adocao);

            lobo_exemplo.append(imagem_exemplo);
            lobo_exemplo.append(texto_exemplo);

            lobo1.append(lobo_exemplo);
            
            let divexiste = document.querySelector(".lobo_final");
            divexiste.appendChild(lobo1);
            localStorage.removeItem("lobotemp");

            let nome =document.createElement("h2");
            nome.innerText = lobodalista.nome;

            let divnome = document.querySelector(".titulo_exemplo");
            divnome.append(nome);


            
        }
        
        
        document.addEventListener("DOMContentLoaded", function() {
    
            
            aparecerlobo();
        });