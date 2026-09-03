/**E4
 * Dadas duas frações ordinárias a/b e c/d, determinar a sua soma e o seu produto.
 * 
 */

const a = 3;
const b = 8;
const c = 5;
const d = 6;

const soma  = ((a*d) + (b*c))/(b*d);
const multi = (a*c)/(b*d);

console.log("Soma: ", soma, "Multiplicação: ", multi);