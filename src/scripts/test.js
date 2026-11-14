var html = '<span class="test"></span>'
// 定義變數
var number = 100;

// 重新賦值
var number = 200;

var burgerIsOpened = false;

if (number < 300) {
  // 作用域裡的定義變數，只是相同名稱，但用 var 會汙染其餘同名變數。
  var number = 300;
  console.log(number)
}

// number = 200;
console.log(number)


// let
// 定義變數
let number2 = 100;
// 重新賦值
number2 = 200;

if (number2 < 300) {
  // 作用域裡定義變數，只是名稱一樣，但不應該受影響。
  let number2 = 300;
  console.log('number2 作用域 => ', number2)
}
// number = 200;
console.log('number2 作用域 => ', number2)

// const
// const 是不能重新賦值的變數定義
const burgerEl = document.querySelector('.o-burger');
burgerEl?.addEventListener('click', function() {
  // 
})
// 不能寫這樣：burgerEl = document.querySelector('.o-burger-2');

// Array 陣列
const fruits = ['Apple', 'Banana', 'Pineapple'];
console.log(fruits[1])

// const 是不能等號後面整個改掉，但可以改變陣列或物件內部的資料。
fruits[1] = 'Cherry'
console.log(fruits);

// 陣列裡面有物件
// Object 物件是有名字的資料。
const fruitsDetail = [
  {
    // keyname: value
    // key: value
    name: 'Apple',
    price: 40,
    // area: ['日本', '美國', '紐西蘭']
    area: [
      { name: 'Japan', cost: '35' },
      { name: 'US', cost: '20' },
      { name: 'Taiwan', cost: '30' },

    ],
    importer: {
      name: '',
      address: {
        zip: '',
        city: '',
        country: '',
        address: '',
      },
      tel: '0912345678'
    }
  },
  {
    name: 'Banana',
    price: 35,
  },
  {
    name: 'Pineapple',
    price: 30,
  }
]

// console.log('name => ', fruitsDetail[0]['name'])
console.log('name => ', fruitsDetail[0].name)

const apple = fruitsDetail[0];
console.log(apple.name)

console.log(apple.area[0].name)
console.log(apple.importer.tel)

// 物件解構，拿出指定 key 的值
const { importer: { tel, address } } = apple
console.log('物件解構 => ', tel)
console.log('物件解構 => ', address)

// 具名函式
// function mulNumber(number) {
//   return number * 2;
// }

// 匿名函式
const mulNumber = function(number, multiple = 2, callback) {
  const result = number * multiple;
  callback();
  return result;
}

const number3 = mulNumber(100, 4, function() {
  console.log('編譯完成')
});
console.log(number3)