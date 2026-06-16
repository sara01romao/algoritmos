/** E2
 * Dado um número de 3 algarismos, construir outro número de quatro algarismos de acordo com a seguinte regra:
    a) Os três primeiros algarismos, contados da esquerda para a direita, são iguais aos do número dado;
    b) O quarto algarismo é um dígito de controle calculado da seguinte forma:
      - primeiro algarismo × 1
      - segundo algarismo × 3
      - terceiro algarismo × 5
    Somar os resultados acima. O dígito de controle é igual ao resto da divisão dessa soma por 7.
 */

let algarismo =  252; //2526
let algarismoArray = algarismo.toString();

function calcNumControler(algarismo){
  const firstNum = parseInt(algarismo[0]) * 1;
  const secondNum = parseInt(algarismo[1]) * 3;
  const thirdNum = parseInt(algarismo[2]) * 5;

  const soma = firstNum + secondNum + thirdNum;
  const rest = soma % 7;

  return rest;
}

let fourthNum = calcNumControler(algarismoArray);
const result = parseInt (algarismoArray + fourthNum);

console.log(result);