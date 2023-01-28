let numbers = "1,2,3/3,2,1"
console.warn("longitud arreglo original")
console.log(numbers.length);
console.warn("Particion arreglos con split")
const numbers1 = numbers.split("/")
console.log(numbers1);
console.log(numbers1.length);
console.warn("arreglo 1")

const numbersA = numbers1[0]
console.log(numbersA);
console.log(numbersA.length);
console.warn("arreglo 2")

const numbersB = numbers1[1]
console.log(numbersB);
console.log(numbersA.length);
console.warn("Ciclo For")

let finalA = [];
for (let index = 0; index < numbersA.length; index++) {
    const element = parseInt(numbersA[index]);
    if (element == "1" || element == "2" ||element == "3") {
        finalA.push(element)
    }else{
        console.log("no es numero");
    }
}
console.log(finalA);

let finalB = [];
for (let index = 0; index < numbersA.length; index++) {
    const element = parseInt(numbersB[index]);
    if (element == "1" || element == "2" ||element == "3") {
        finalB.push(element)
    }else{
        console.log("no es numero");
    }
}
console.log(finalB);
let finalfinal = []

for (let i = 0; i < finalA.length; i++) {
    const suma = finalA[i] + finalB[i];
    finalfinal.push(suma)
}
console.warn("solucion final")
console.log(finalfinal);



