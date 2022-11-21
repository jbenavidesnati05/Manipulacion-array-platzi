const totals = [1,2,3,4,5,6,7,8,9];
let  acumSuma = 0
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];

  acumSuma += totals[index]; 
  
}

console.log("total = ", acumSuma);
console.log("arreglo = ",totals);

const totalsReduce = totals.reduce((acumSuma,element) => {
  acumSuma + element , 0
})
console.log(totalsReduce);
