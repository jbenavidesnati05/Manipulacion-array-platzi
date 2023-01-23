const products = [
  {
    name: "papa",
    price: 10,
    stock: true,
  },
  {
    name: "arroz",
    price: 60,
    stock: false,
  },
  {
    name: "yuca",
    price: 6,
    stock: true,
  },
  {
    name: "cebolla",
    price: 8,
    stock: true,
  },
  
];

console.log(products);

const productsName = products.map(item => item.name);
console.log(productsName);

const productsTaxes = products.map(item =>{
    return {
        ...item,
        totalTaxes: 1.19*item.price
      }
  })
console.log(productsTaxes);
