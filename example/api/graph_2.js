var GRAPH = {
  me: {},
  table: {
    id: 1,
    state: 'SERVING',
  },
  menu: [
    {id: 'hot', name: '推荐', items: [
      {id: 1, name: '燕窝鸡丝汤', thumb: 'https://placehold.it/128/128', price: 1200},
      {id: 2, name: '海参烩猪筋', thumb: 'https://placehold.it/128/128', price: 3400},
      {id: 3, name: '鲜蛏萝卜丝羹', thumb: 'https://placehold.it/128/128', price: 5600},
      {id: 4, name: '海带猪肚丝羹', thumb: 'https://placehold.it/128/128', price: 7800},
      {id: 5, name: '鲍鱼烩珍珠菜', thumb: 'https://placehold.it/128/128', price: 9000}
    ]},
    {id: 1, name: '荤菜', items: [] },
    {id: 2, name: '素菜', items: [] },
  ],
  order: {
    id: 1,
    draft: [
      {id: 1, name: "燕窝鸡丝汤", thumb: "https://placehold.it/128/128", price: 1200, count: 1},
    ],
    confirmed: [
      {id: 1, name: "燕窝鸡丝汤", thumb: "https://placehold.it/128/128", price: 1200, count: 1},
      {id: 2, name: "海参烩猪筋", thumb: "https://placehold.it/128/128", price: 3400, count: 1},
      {id: 3, name: "鲜蛏萝卜丝羹", thumb: "https://placehold.it/128/128", price: 5600, count: 1},
      {id: 4, name: "海带猪肚丝羹", thumb: "https://placehold.it/128/128", price: 7800, count: 1},
      {id: 5, name: "鲍鱼烩珍珠菜", thumb: "https://placehold.it/128/128", price: 9000, count: 1}
    ],
    count: 6,
    amount: 28200,
  },
};
