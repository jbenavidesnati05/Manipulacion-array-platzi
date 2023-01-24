const arreglo1 = [1,2,3,4] 
const arreglo2 = [1,2,3,4] 
const arreglo3 = [];
for (let i = 0; i < arreglo1.length; i++) {
    const element = arreglo1[i]+arreglo2[i];
    arreglo3.push(element)
}
console.log(arreglo3);