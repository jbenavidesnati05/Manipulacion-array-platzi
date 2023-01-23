const words = ["spray", "limit", "elite","exuberant"];

const newWords = [];

for (let i = 0; i < words.length; i++) {
  const item = words[i];
  if(item.length<=5){
      newWords.push(item)
    }
}

 console.log("newWords");
 console.log(newWords);

 const newWordsFilter = words.filter(item => item.length<=5);
 console.log("newWordsFilter");
 console.log(newWordsFilter);


















// // sin filter 
// for (let index = 0; index < words.length; index++) {
//     const item = words[index];
//     // console.log(item);
//     if (item.length>=6 ) {
//         newWords.push(item);
//     }
// }
// console.log(newWords);

// con filter 
// const newWordsFilter = words.filter(item => item.length>=6);
// console.log("filter",newWordsFilter);


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


// const ordersFilter = orders.filter(item => item.delivered && item.total>=100)
// console.log("entregado =", ordersFilter);

// const search = (query)=> {
//     return orders.filter(item => {
//         return item.customerName.includes(query);
//     })
// }

// console.log(search("a"));