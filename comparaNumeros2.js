/*
Crie uma função que recebe dois números como parâmetros. OK
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/

function comparaNumeros(num1, num2) {
    saoIguais = 'não';
    comparaDezVinte = restanteFrase(num1, num2);

    if (num1 === num2) {
        saoIguais = '';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais. ${comparaDezVinte}`;
}

function restanteFrase(num1, num2) {
    soma = num1 + num2;
    comparaDez = 'menor';
    comparaVinte = 'menor';

    if(soma > 10){
        comparaDez = 'maior';
    }

    if(soma > 20){
        comparaVinte = 'maior';
    }
    return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;
}

console.log(comparaNumeros(13,13));