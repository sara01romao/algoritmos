/**E5
 *  Dado um número inteiro que representa um número binário de cinco dígitos, 
 * determinar o seu equivalente decimal.
 */

const numBinario = 10101;
const binarioArray = numBinario.toString()
let resultDecimal= 0;

if(binarioArray.length === 5){

  for(let index = binarioArray.length - 1; index >= 0; index--){ 
    resultDecimal = resultDecimal + Math.pow(2, (binarioArray.length - 1 - index)) * parseInt(binarioArray[index]);
  }
  console.log(resultDecimal);
}