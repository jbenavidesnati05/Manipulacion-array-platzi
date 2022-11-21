const numbers = [1,2,3,4,5,6,7,8];

let rta = false;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];

    if (element % 2 === 0) {
      rta = true;

      break;
    }
}
  console.log(rta)

