const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]

const usersFlapMap = users.map(item =>item.attributes).flat()
console.log(usersFlapMap);

const usersFlapMapJuntos = users.flatMap(item =>item.attributes)
console.log(usersFlapMapJuntos);
