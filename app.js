// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let inputAmigo=document.getElementById("amigo");
let amigos=[];
let listaAmigos=document.getElementById("listaAmigos");
let resultado=document.getElementById("resultado");

//Obtiene el valor del input y lo coloca en el array amigos
function agregarAmigo(){
    if(inputAmigo.value != ""){
        amigos.push(inputAmigo.value);
        actualizarAmigos()
    }else{
        alert("Por favor, inserte un nombre");
    }
    inputAmigo.value=""
}

//Actuliza la lista que muestra la lista de amigos
function actualizarAmigos(){
    listaAmigos.innerHTML="";
    for(let i=0;i<amigos.length;i++){
        let li=document.createElement("li");
        li.textContent=amigos[i]
        listaAmigos.appendChild(li);
    }
}

//Elige al amigo secreto
function sortearAmigo(){
    let indice=Math.floor(Math.random()*amigos.length)+1;
    if(amigos.length != 0){
        return resultado.innerHTML=`El amigo secreto sorteado es: ${amigos[indice]}`;
    }else{
        alert("Por favor, inserte un nombre");
    }
}
