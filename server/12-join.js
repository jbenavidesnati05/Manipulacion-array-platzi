const elements = ['Fire', 'Air', 'Water'];

let separador = "--"
let rta = " "

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];

  rta = rta + element + separador;
}

console.log(rta);

const elementsJoin = elements.join("**");
console.log(elementsJoin);

const title = "curso de manipulacion de arrays";

const titleSplit = title.split(" ");
console.log(titleSplit);

const titleJoin = titleSplit.join("|-|")
console.log(titleJoin);