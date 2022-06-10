/*
Crie uma função que recebe dois números como parâmetros. OK
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/

function comparaNumero(num1, num2) {         // Função que realizara as operações com 2 parametros
    const primeirafrase = criaPrimeiraFrase(num1, num2); // Invoca função da primeira frase
    const segundafrase = criaSegundaFrase(num1, num2); // Invoca função da segunda frase

    return `${primeirafrase} ${segundafrase}`; //Output: Os números 1 e 2 não são iguais (primeira frase). Sua soma é 3, que é menor que 10 e menor que 20. (segunda frase)
}

function criaPrimeiraFrase(num1, num2) { 
    let primeirafrase = `Os números ${num1} e ${num2}`; // Definida primeira frase
    let simNao = 'não'; // Diferenciador da frase escrita

    if (num1 === num2) { // Comparador - Se numero num1 é igual a num2
        simNao = ''; // remove o 'não' se iguais
    }

    return `${primeirafrase} ${simNao} são iguais.`; // Retorna a frase "Os numeros X e Y (não) são iguais."
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;    // Realiza soma
    let comparaDez = 'menor';   // Valor padrão menor para comparar com 10
    let comparaVinte = 'menor'; //Valor padrão menor para comparar com 20

    if (soma > 10) { // Concidional
        comparaDez = 'maior'; // Altera para maior caso 'soma' seja maior que o valor 10.
    }

    if (soma > 20) { // Condicional
        comparaVinte = 'maior'; // Altera para maior caso 'soma' seja maior que o valor 10.
    }

    return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`; // retorna a frase 'Sua soma é (valor soma), que é 'maior/menor' que 10 e 'maior/menor' que 20.
}

console.log(comparaNumero(3,4)); // envia mensagem no console comparando os numeros num1 e num2 definidos na função.