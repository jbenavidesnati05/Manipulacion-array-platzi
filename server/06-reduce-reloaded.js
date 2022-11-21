const items = [1,3,2,2,12,3,3];

const itemsReduceReloaded=  items.reduce((obj,item)=>{
  //code
  if (!obj[item]) {
    obj[item] = 1;
  }else{
    obj[item] = obj[item]+1;
  }
  return obj;
},{})

// console.log(itemsReduceReloaded);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];


const datamap = data.map(item=> item.level)
console.log(datamap);

const dataMapReduceReloaded=  datamap.reduce((obj,item)=>{
  //code
  if (!obj[item]) {
    obj[item] = 1;
  }else{
    obj[item] = obj[item]+1;
  }
  return obj;
},{})
console.log(dataMapReduceReloaded);