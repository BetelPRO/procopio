function select4() {
    const quatro = document.getElementById("_400ml")

    quatro.classList.add("_400m")
    const treze = document.getElementById("_300ml")

    treze.classList.remove("_300m")
}

function select3() {
    const treze = document.getElementById("_300ml")

    treze.classList.add("_300m")
    const quatro = document.getElementById("_400ml")

    quatro.classList.remove("_400m")
}

function one() {
    if (document.getElementById("leite").checked) {
        const leite = document.getElementById("leite_jpg");
        leite.classList.toggle("peg");
    };
    
    if (document.getElementById("paçoca").checked) {
        const paçoca = document.getElementById("paçoca_jpg")
        paçoca.classList.toggle("peg")
    };
}

function two() {
    if (document.getElementById("granola").checked) {
        const granola = document.getElementById("granola_jpg");
        granola.classList.toggle("peg");
    };
    
    if (document.getElementById("jujuba").checked) {
        const jujuba = document.getElementById("jujuba_jpg")
        jujuba.classList.toggle("peg")
    };
}

function tree() {
    if (document.getElementById("confete").checked) {
        const confete = document.getElementById("confete_jpg");
        confete.classList.toggle("peg");
    };
    
    if (document.getElementById("bolinha").checked) {
        const bolinha = document.getElementById("bolinha_jpg")
        bolinha.classList.toggle("peg")
    };
}

function con() {
    let pedido = "com ";

    if (document.getElementById("_400").checked) {
        tamanho = "400 ml \n";
        msg_pedido = "Açaí de 400ml\n"
    };
    
    if (document.getElementById("_300").checked) {
        tamanho = "300 ml \n";
        msg_pedido = "Açaí de 300ml\n"
    };

    if(document.getElementById("leite").checked) {
        pedido = pedido + "*Leite* \n";
    };
    
    if(document.getElementById("paçoca").checked) {
        pedido = pedido + "*Paçoca* \n";
    };
    
    if(document.getElementById("granola").checked) {
        pedido = pedido + "*Granola*  \n";
    };
    
    if(document.getElementById("jujuba").checked) {
        pedido = pedido + "*Jujuba*  \n";
    };
    
    if(document.getElementById("confete").checked) {
        pedido = pedido + "*Confete* \n";
    };
    
    if(document.getElementById("bolinha").checked) {
        pedido = pedido + "*Bolinha* \n";
    };

    if (document.getElementById("_400").checked || document.getElementById("_300").checked){
        let mensagem;
        mensagem = "Olá gostaria de pedir um Açaí de " + tamanho + pedido;
        msg_pedido = msg_pedido + pedido
        if(confirm(msg_pedido) == true) {
            window.open("https://wa.me/+5581986728498?text=" + mensagem);
        }
    }
    else {
        alert("Escolha o Tamanho do Açaí")
    }
};

