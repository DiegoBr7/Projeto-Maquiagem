// Criando a função
function somarNumeros() {
    let numeros;
    let total = 0;

    // Loop para gerar e somar cinco números aleatórios
   
        numeros = Math.floor(Math.random() * 101);
        console.log(`Número sorteado: ${numeros}`);
        total += numeros;


    // Exibindo o total da somatória e uma linha separadora no console
    console.log(`Total da somatória: ${total}`);
    console.log(`----------------------------`);
}

// Chamando a função duas vezes
somarNumeros();
somarNumeros();
