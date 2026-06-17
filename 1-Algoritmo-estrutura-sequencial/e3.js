/**E3
 * 
Dado um número inteiro de segundos, determinar o seu valor equivalente em graus, minutos e segundos.
Se a quantidade de segundos for insuficiente para dar o valor em graus, o valor em graus deve ser zero. A mesma observação 
continua válida em relação a minutos e segundos.

Exemplos:
3.600 segundos = 1 grau, 0 minutos, 0 segundos.
3.500 segundos = 0 graus, 58 minutos, 20 segundos.
 * 
 */

const entrada = parseInt(3600);
const grauValue = 3600;
const minutoValue = 60;
const segundosValue = 1;

let grauResult = 0;
let minutoResult = 0;
let segundosResult = 0;
let resto;

function verificaEquivalencia(numEquivalente){
   let result = 0;

   if(resto == undefined && entrada >= numEquivalente){
      result = entrada / numEquivalente;
      resto = entrada % numEquivalente;
      
   }else if(resto >= numEquivalente){
     result = resto / numEquivalente;
     resto = resto % numEquivalente;
   }

   return parseInt(result);
}

grauResult= verificaEquivalencia(grauValue);
minutoResult= verificaEquivalencia(minutoValue);
segundosResult= verificaEquivalencia(segundosValue);

console.log(entrada + ": " + grauResult + " grau, " + minutoResult.toFixed(0) + " minutos, " +  segundosResult + " segundos ");