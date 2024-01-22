//Desafio DIO
let player = {
    nome: "Yuki", idade: 20, tipo: "mago"
}

function atacar(x){
    if(x.tipo === "mago"){
        console.log(`O ${x.tipo} atacou usando magia`)
    }
    if(x.tipo === "guerreiro"){
        console.log(`O ${x.tipo} atacou usando espada`)
    }
    if(x.tipo === "monge"){
        console.log(`O ${x.tipo} atacou usando artes marcias`)
    }
    if(x.tipo === "ninja"){
        console.log(`O ${x.tipo} atacou usando shuriken`)
    }
}
atacar(player)