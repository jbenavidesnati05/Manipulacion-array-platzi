const pets = ['cat','dog','bat'];

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  console.log(element);
  if (element === 'dog') {
    console.log(index, 'el perro esta');
    
  }else{
    console.log(index, 'el perro no esta');
  }
  
}

const petsInclude = pets.includes("dog")
console.log(petsInclude)