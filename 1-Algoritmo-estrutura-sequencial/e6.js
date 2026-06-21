/**E6
 * Dados o primeiro termo e a razão de uma progressão aritmética, determinar a soma dos seus primeiros cinco termos. 
 */

const qtdTermos = 5
const numPrimeiro = 2;
const razao = 3;
let progressao = [numPrimeiro];

for(let index = 0; index < qtdTermos -1; index++){
  progressao.push(progressao[index] + razao);
}

let soma = progressao.reduce((acumalador, valorAtual) => acumalador + valorAtual, 0)

console.log(progressao, soma);