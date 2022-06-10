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
    comparaDez = 'menor';
    comparaVinte = 'menor';

    if (num1 === num2) {
        saoIguais = '';
    }
    if ((num1+num2) > 10){
        comparaDez = 'maior';
    }
    if ((num1+num2) > 20){
        comparaVinte = 'maior';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais. Sua soma é ${num1+num2}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;
}
console.log(comparaNumeros(13,2));