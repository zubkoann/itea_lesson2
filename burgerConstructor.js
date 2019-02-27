const Ingredients = [
  'Булка',
  'Огурчик',
  'Рыбная котлета',
  'Соус карри',
  'Кисло-сладкий соус',
  'Помидорка',
  'Маслины',
  'Острый перец',
  'Капуста',
  'Кунжут',
  'Сыр Чеддер',
  'Сыр Виолла',
  'Сыр Гауда',
  'Майонез'
];
const Ingredients2 = [
  'Булка',
  'Огурчик',
  'Котлетка',
  'Сыр Чеддер',
  'Сыр Виолла',
  'Сыр Гауда',
  'Майонез'
]
const Ingredients3 = [
  'Булка',
  'Огурчик',
  'Котлетка',
  'Рыбная котлета',
  'Соус карри',
  'Кисло-сладкий соус',
  'Помидорка',
  'Маслины',
];

var OurMenu = [];
var OurOrders = [];

const Burger = function (name, composition, cookingTime) {
  this.name = name;
  this.composition = composition;
  this.cookingTime = cookingTime;
  OurMenu.push(this)
}
Burger.prototype.showComposition = function () {
  let {composition, name, cookingTime} = this;
  let compositionLength = composition.length;
  if (compositionLength !== 0) {
    composition.map(function (item) {
      console.log('Состав бургера', name, item, 'время готовки', cookingTime);
    })
  }
}
new Burger('Burger1', Ingredients, 120);
new Burger('Burger2', Ingredients2, 220)
new Burger('Burger3', Ingredients3, 20)

OurMenu.forEach(item=>item.showComposition());


function Order(orderBurder, condition, value) {
  this.id = Math.random() * 10000;
  this.orderNumber = this.id;
  this.orderBurder = orderBurder;
  this.condition = condition;
  this.value = value;
  OurOrders.push(this);
}

Order.prototype.checkBurger = function () {
  let flag = true;
  let b =false;
  let count=0;
  let {orderBurder, condition, value} = this;
  if (!!orderBurder) {
    OurMenu.forEach(item => {
      if (item.name == orderBurder) {
        console.log(`Бургер ${orderBurder}, будет готов через ${item.cookingTime} минут`);
        flag = false;
      }
    })
  } else if (condition == "has") {
        flag = true;
    OurMenu.forEach(item => {
      if (item.composition.some(el => el == value) && flag) {
        console.log(`Бургер ${item.name}, с ${value}, будет готов через ${item.cookingTime} минут.`);
        flag = false;
      }
    })
  } else if (condition == "except") {
        flag = true;
    OurMenu.forEach(item => {
      if (item.composition.some(el => el !== value) && flag) {
        console.log(`Бургер ${item.name},без ${value}, будет готов через ${item.cookingTime} минут.`);
        flag = false;
      }
    })
  }
  if(flag ){
    console.log(`К сожалению такого бургера нет`);
    while (!b && count<OurMenu.length){
      b = confirm(`Сделать заказ?${OurMenu[count].name}?`);
      count++
    }
    if(b){
      console.log(`Бургер ${OurMenu[count-1].name},будет добавлен в заказ.`);
      new Order(OurMenu[count-1].name);
    }
  }
}


new Order('Burger1');
new Order('', 'has', 'Котлетка');
new Order('', 'has', 'Бекон');
new Order('', 'except', 'Котлетка');
new Order('', 'except', 'Бекон');

console.log(OurOrders);

OurOrders.forEach(item =>  item.checkBurger())

console.log(OurOrders);
