const letters = ["a","b","c","d"];
const numbers = [1,2,3,4,5,6];

// con ciclo for 
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(index+1, element);
}
// con forEach 
letters.forEach(element => console.log( "letra =",element));
numbers.forEach(element => console.log("numero= ",element));