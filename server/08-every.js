const numbers = [1,2,3,4,5,6,7,8];

const numbersEvery = numbers.every(item => item <=8);
console.log(numbersEvery);


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const teamEvery = team.every(item =>item.age<=18)
console.log("condicion para el team: ",teamEvery);

const numbers2 = [1,2,3,4,5,6,7,8];

