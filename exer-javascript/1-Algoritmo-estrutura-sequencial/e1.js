/* e1- Dado um número inteiro de 3 algarismos, inverter a ordem de seus algarismos. 
 Os três algarismos do número dado são diferentes de zero.*/

let num = 352;
let stringNum = num.toString();
let inverteString;
let inverteNum;

if(stringNum.length === 3){
  if(stringNum[0] != "0" &&  stringNum[1] != "0" &&  stringNum[2] != "0"){
    inverteString = stringNum[2] + stringNum[1] + stringNum[0];
    inverteNum = parseInt(inverteString)
    console.log(inverteNum);
    return;
  }
}