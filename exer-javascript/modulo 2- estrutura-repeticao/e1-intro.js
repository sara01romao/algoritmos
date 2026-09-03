const n = 5;

for(let index = 1; index <= n; index++){
  console.log(calcImpar(index));
}

function calcImpar(num){
  const impar = (2*num) - 1;
  return impar
}