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
  const ordersDelivered = orders.filter(item => item.delivered == false);
  console.log(ordersDelivered);
  const ordersDeliveredAnd100 = orders.filter(item => item.delivered && item.total > 100)
  console.log(ordersDeliveredAnd100)

 const nameNico = orders.filter(item => item.customerName == "Nicolas")
 console.log(nameNico);

 const search = (query) => {
    return orders.filter(item =>{
        return item.customerName.includes(query)
    })
 }
 console.log(search("a"));