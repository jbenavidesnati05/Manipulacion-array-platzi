const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log(orders);
console.log("original", orders);
// const newOrders= orders.map(item => item.total)
// console.log("new Orders = "+ newOrders);

// const newOrders2 = orders.map(item => {
//   item.tax = 0.19*item.total
//   return item
// })

// console.log(newOrders2);

const newOrders3 = orders.map(item => {
  item.tax = 0.19*item.total
  return {
    ...item,
    tax:0.19
  }
})
console.log(newOrders3);
