const numbers = [1,2,3,4];

let  acumSuma = 0

for (let index = 0; index < numbers.length; index++) {
  acumSuma = acumSuma + numbers[index]; 
}
console.log("arreglo = ",numbers);
console.log(acumSuma);

let acumulado = 0
const reduceNumbers = numbers.reduce((acumulado,item)=> acumulado +item)
console.log(reduceNumbers);

const numeros = [1,10,1];

const sumaNum = numeros.reduce((suma,item)=>suma+item)
console.log(sumaNum);

