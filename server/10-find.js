const numbers = [1,2,3,4,5,3,6,7,8];

const numbersFind = numbers.find(item => item === 3 )
console.log(numbersFind);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const productsFind = products.find(item => item.price === 34);
console.log(productsFind);

const productsFindIndex = products.findIndex(item => item.price === 34);
console.log(productsFindIndex);