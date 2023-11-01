//Trabalhando com Condicionais

function condicionais() {
    const listaDestino = new Array("salvador", "Rio", "Cuiaba");

    const idadeComprador = 18;
    const estarAcompanhada = false;
    const temPassagemComprada = true;

    console.log("Destinos Posssiveis:")
    console.log(listaDestino);

    if (idadeComprador >= 18 || estarAcompanhada == true) {
        console.log("Boa Viagem!!");
        listaDestino.splice(2, 1);
    } else {
        console.log("Nao é maior de idade e nao posso vender");
    }

    console.log("Embarque: \n\n");
    if (idadeComprador >= 18 && temPassagemComprada){
        console.log("Boa Viagem");
    }else{
        console.log("nao pode embarcar");
    }
}

condicionais()


