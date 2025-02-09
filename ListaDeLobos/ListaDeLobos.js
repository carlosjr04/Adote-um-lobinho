let lobos = JSON.parse(localStorage.getItem('lobos'));
let paginaatual=0;

let lobosadotados = []
let opcaoAtivada = false; 
for(i=0;i<lobos.length;i++){
    if(lobos[i].adotado===true){
        lobosadotados.push(lobos[i]);
    }
}
console.log(lobosadotados)
document.getElementById("checkbox").addEventListener("change", function() {
    opcaoAtivada = this.checked; 
    document.querySelector(".lobo_exemplo").innerHTML = ""; 
    listadelobos();
});

let loboadotadoindex = 0;
function listadelobos(){
    for(i=0;i<4;i++){
        let lobo1=0;
        let lobo2=0;
        if(i%2==0){
            let primeirolobo= paginaatual*4+1;
            let terceirolobo= paginaatual*4+3;
            let loboatual = 0;
            if(i==0){
                loboatual = primeirolobo;
            }else{
                loboatual = terceirolobo;         
            }
            let lobodalista =0;
            if(opcaoAtivada===true){
                lobodalista = lobosadotados[loboadotadoindex];
                loboadotadoindex+=1;

            }else{
                lobodalista = lobos.find(item => item.id === loboatual);

            }

            lobo1 =document.createElement("div");

            let imagem_exemplo = document.createElement("div");

            let fundo_azul = document.createElement("div");

            let link_foto = document.createElement("a")
            link_foto.href = "../ShowLobo/ShowLobo.html";
            
            let foto = document.createElement("img")
            foto.src = "../images/loboexemplo.png"
            foto.alt = "Lobo na floresta"

            let texto_exemplo = document.createElement("div");

            let texto = document.createElement("div");

            let textodiv = document.createElement("div");

            let nome = document.createElement("h2");
            nome.innerText = lobodalista.nome;

            let idade = document.createElement("p");
            idade.innerText = `Idade:${lobodalista.idade}`;

            let botao = document.createElement("button");
            botao.innerText = "Adotar";
            botao.addEventListener("click", function() {
                alert("Lobo adotado!");
            });
            

            let descricao = document.createElement("p");
            descricao.innerText = lobodalista.descricao;

            lobo1.classList.add("lobo1");
            imagem_exemplo.classList.add("imagem_exemplo");
            fundo_azul.classList.add("fundo_azul");
            foto.classList.add("imagem");
            texto_exemplo.classList.add("texto_exemplo");
            texto.classList.add("texto");
            nome.classList.add("nome");
            idade.classList.add("idade");
            botao.classList.add("adotar_botao");
            descricao.classList.add("desc")

            link_foto.append(foto);
            imagem_exemplo.append(fundo_azul);
            imagem_exemplo.append(link_foto);
            
            textodiv.append(nome);
            textodiv.append(idade);
            texto.append(textodiv);
            texto.append(botao);
            texto_exemplo.append(texto);
            texto_exemplo.append(descricao);

            lobo1.append(imagem_exemplo);
            lobo1.append(texto_exemplo);

            
        }else{
            let primeirolobo= paginaatual*4+2;
            let terceirolobo= paginaatual*4+4;
            let loboatual = 0;
            if(i==1){
                loboatual = primeirolobo;
            }else{
                loboatual = terceirolobo;         
            }
            const lobodalista2 = lobos.find(item => item.id === loboatual);

            lobo2 =document.createElement("div");

            let imagem_exemplo2 = document.createElement("div");

            let fundo_azul2 = document.createElement("div");

            let link_foto2 = document.createElement("a")
            link_foto2.href = "../ShowLobo/ShowLobo.html";
            
            let foto2 = document.createElement("img")
            foto2.src = "../images/loboexemplo2.png"
            foto2.alt = "Lobo na floresta"

            let texto_exemplo2 = document.createElement("div");

            let texto2 = document.createElement("div");

            let textodiv2 = document.createElement("div");

            let nome2 = document.createElement("h2");
            nome2.innerText = lobodalista2.nome;

            let idade2 = document.createElement("p");
            idade2.innerText = lobodalista2.idade;

            let botao2 = document.createElement("button");
            botao2.innerText = "Adotar";
            botao2.addEventListener("click", function() {
                alert("Lobo adotado!");
            });
            

            let descricao2 = document.createElement("p");
            descricao2.innerText = lobodalista2.descricao;

            lobo2.classList.add("lobo2");
            imagem_exemplo2.classList.add("imagem_exemplo2");
            fundo_azul2.classList.add("fundo_azul2");
            foto2.classList.add("imagem2");
            texto_exemplo2.classList.add("texto_exemplo2");
            texto2.classList.add("texto2");
            nome2.classList.add("nome2");
            idade2.classList.add("idade2");
            botao2.classList.add("adotar_botao2");
            descricao2.classList.add("desc2")

            link_foto2.append(foto2);
            imagem_exemplo2.append(fundo_azul2);
            imagem_exemplo2.append(link_foto2);
            
            textodiv2.append(nome2);
            textodiv2.append(idade2);
            texto2.append(textodiv2);
            texto2.append(botao2);
            texto_exemplo2.append(texto2);
            texto_exemplo2.append(descricao2);

            lobo2.append(imagem_exemplo2);
            lobo2.append(texto_exemplo2);

        }
        if(i%2==0){
            let divexiste = document.querySelector(".lobo_exemplo");
            divexiste.appendChild(lobo1);
        }else{
            let divexiste = document.querySelector(".lobo_exemplo");
            divexiste.appendChild(lobo2);
        }

    }
}

function avançar(){
    if(paginaatual<=250){
        
        paginaatual+=1;
        document.querySelector(".lobo_exemplo").innerHTML = "";
        listapaginas();
        listadelobos();
        
    }
}
function voltar(){
    if(paginaatual>0){
        
        paginaatual-=1;
        listapaginas();
        document.querySelector(".lobo_exemplo").innerHTML = "";
        listadelobos();
        
    }
    
}
function listapaginas(){
    document.querySelector(".listabotao").innerHTML = "";
    for(i=paginaatual;i<paginaatual+5;i++){
        
        let listadebotao = document.querySelector(".listabotao");
        let botao = document.createElement("button");
        botao.innerText = i+1;
        let numbotao=i;
        botao.addEventListener("click", function() {
            paginaatual=numbotao;
            console.log(paginaatual);
            document.querySelector(".lobo_exemplo").innerHTML = "";
            listapaginas()
            listadelobos();
        })
        botao.classList.add("botaofinal");
        botao.classList.add("botaofinalhover");
        if(paginaatual===i){
            botao.classList.add("botaoatual");
        }
        
        listadebotao.append(botao);
        
    }
    
}
document.addEventListener("DOMContentLoaded", function() {
    
    listapaginas();
    listadelobos();
});
document.getElementById("avancar").addEventListener("click", avançar);
document.getElementById("voltar").addEventListener("click", voltar);

