const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

// console.log("-".repeat(10));

const productIndex = products.find(item => item.id == '🥞')

if (productIndex!== -1) {

  myProducts.push(products[productIndex]);
  products.splice(products.findIndex,1)
}


console.log("products", products);
console.log("Encontrando pizza = ",productIndex);
console.log("myProducts = ", myProducts);

// const updata = 

const productsV2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];