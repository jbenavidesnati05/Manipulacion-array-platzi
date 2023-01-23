numbers = [2,4,6,8]

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]*2;
    console.log(element);
}

numbersMap = numbers.map(item => item*2)
console.log(numbersMap);