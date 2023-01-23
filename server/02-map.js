// map es inmutable con el mismo numero de elementos 
const letters = ["a","b","c","d"];
const newLetters=[];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newLetters.push(" ++ "+element);
}
 const newLettersMap =letters.map(item => "*" +item+"*" );

console.log("original       => " + letters);
console.log("nuevo          => " + newLetters);
console.log("array con map  => " + newLettersMap);


