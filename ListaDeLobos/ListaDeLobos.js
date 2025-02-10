let lobos = JSON.parse(localStorage.getItem('lobos'));
let paginaatual=0;

let lobosadotados = []
let lobosnaoadotados = []
let opcaoAtivada = false; 
for(i=0;i<lobos.length;i++){
    if(lobos[i].adotado===true){
        lobosadotados.push(lobos[i]);
    }
}
for(i=0;i<lobos.length;i++){
    if(lobos[i].adotado===false){
        lobosnaoadotados.push(lobos[i]);
    }
}

document.getElementById("checkbox").addEventListener("change", function() {
    opcaoAtivada = this.checked; 
    document.querySelector(".lobo_exemplo").innerHTML = ""; 
    listadelobos();
});
console.log(lobosadotados)
console.log(lobosnaoadotados)
let index_lobosvalidos = 0;
function pegarid() {
    let lobovalido = 0
    if(opcaoAtivada===true){
                
        lobovalido = lobosadotados[index_lobosvalidos];
        index_lobosvalidos+=1
        return lobovalido
    }else{
        lobovalido = lobosnaoadotados[index_lobosvalidos];
        index_lobosvalidos+=1
        return lobovalido
    }
}

function listadelobos(){
    for(i=0;i<4;i++){
        let lobo1=0;
        let lobo2=0;
        if(i%2==0){
            
            
                 
            let lobodalista =pegarid();
            
            

            lobo1 =document.createElement("div");

            let imagem_exemplo = document.createElement("div");

            let fundo_azul = document.createElement("div");

            let link_foto = document.createElement("a")
            link_foto.href = "../ShowLobo/ShowLobo.html";
            link_foto.addEventListener("click", function() {
                let loboatualid = lobodalista.id;
                localStorage.setItem("lobotemp", loboatualid);
                window.location.href = "ShowLobo.html"; 
            })
            
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
            if( opcaoAtivada===true){
                botao.innerText = "Adotado";
                botao.addEventListener("click", function() {
                    alert("Lobo já foi adotado!");
                });

            }else{
                botao.innerText = "Adotar";
                botao.addEventListener("click", function() {
                    localStorage.setItem("lobotemp", lobodalista.id);
                    window.location.href = "../AdotarLobo/AdotarLobo.html"; 
                });
            }
            

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
            if( opcaoAtivada===true){
                botao.classList.add("adotado_botao");
            }else{
                botao.classList.add("adotar_botao2");
            }
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
            let lobodalista2 =pegarid();

            lobo2 =document.createElement("div");

            let imagem_exemplo2 = document.createElement("div");

            let fundo_azul2 = document.createElement("div");

            let link_foto2 = document.createElement("a")
            link_foto2.href = "../ShowLobo/ShowLobo.html";
            link_foto2.addEventListener("click", function() {
                let loboatualid = lobodalista2.id;
                localStorage.setItem("lobotemp", loboatualid); // Salva a variável no armazenamento local
                window.location.href = "ShowLobo.html"; 
            })
            
            
            let foto2 = document.createElement("img")
            foto2.src = "../images/loboexemplo2.png"
            foto2.alt = "Lobo na floresta"

            let texto_exemplo2 = document.createElement("div");

            let texto2 = document.createElement("div");

            let textodiv2 = document.createElement("div");

            let nome2 = document.createElement("h2");
            nome2.innerText = lobodalista2.nome;

            let idade2 = document.createElement("p");
            idade2.innerText = `Idade:${lobodalista2.idade}`;

            let botao2 = document.createElement("button");

            if( opcaoAtivada===true){
                botao2.innerText = "Adotado";
                botao2.addEventListener("click", function() {
                alert("Lobo já foi adotado!");
                });

            }else{
                botao2.innerText = "Adotar";
                botao2.addEventListener("click", function() {
                    localStorage.setItem("lobotemp", lobodalista2.id);
                    window.location.href = "../AdotarLobo/AdotarLobo.html"; 

                });
            }
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
            if( opcaoAtivada===true){
                botao2.classList.add("adotado_botao");
            }else{
                botao2.classList.add("adotar_botao2");
            }

            
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
    if(paginaatual>=0 && paginaatual<=2 ){
        for(i=0;i<5;i++){
        
            let listadebotao = document.querySelector(".listabotao");
            let botao = document.createElement("button");
            botao.innerText = i+1;
            let numbotao=i;
            botao.addEventListener("click", function() {
                paginaatual=numbotao;
                
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
    }else{
        for(i=paginaatual-2;i<paginaatual+3;i++){
        
            let listadebotao = document.querySelector(".listabotao");
            let botao = document.createElement("button");
            botao.innerText = i+1;
            let numbotao=i;
            botao.addEventListener("click", function() {
                paginaatual=numbotao;
                
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
    
    
}
document.addEventListener("DOMContentLoaded", function() {
    
    listapaginas();
    listadelobos();
});
document.getElementById("avancar").addEventListener("click", avançar);
document.getElementById("voltar").addEventListener("click", voltar);

