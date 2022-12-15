function escreverMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Manor de idade');
    }
}

function pagamento(condicaoPagamento, precoEtiqueta) {

    if (condicaoPagamento === 1) {
        let precoDebito = precoEtiqueta * 0.9;
        console.log(precoDebito);
    } else if (condicaoPagamento === 2) {
        let precoDinheiro = precoEtiqueta * 0.85;
        console.log(precoDinheiro);
    } else if (condicaoPagamento === 3) {
        let precoDuasVezes = precoEtiqueta;
        console.log(precoDuasVezes);
    } else {
        let precoParcelado = precoEtiqueta * 1.1;
        console.log(precoParcelado);
    }
}

pagamento(2, 100);


