class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar (){
        let ataque;
        if (this.tipo == "mago") {
            ataque = "magia";
        } else if (this.tipo == "guerreiro" ){
            ataque = "espada";
        } else if (this.tipo == "monge") {
            ataque = "artes marciais";
        } else if (this.tipo == "ninja") {
            ataque = "shuriken";
        } else{
            console.log("Você inseriu um tipo de herói inválido")
            return;
        }
        console.log(`O tipo ${this.tipo} atacou usando ${ataque}`);

    }

}

let classesHeroi = new heroi ("Anna", "24", "guerreiro")
console.log (classesHeroi)
classesHeroi.atacar();