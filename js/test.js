// 'use strict'

// // ============= кофе машина ===========

// // let message = '';
// // let price = 0;

// // const nameCapCan = '5';
// // console.log(nameCapCan);
// // let quantyty = 10 * '10';
// // quantyty = Number(quantyty);
// // console.log(quantyty);
// // const coffeMachine = prompt ('введи каву');

// // if (coffeMachine === 'amerycano') {
// //   message = 'отримайте свою американо';
// //   price = 70;
// // }
// // else  if(coffeMachine === 'latte'){
// //     message = 'отримайте свою лате';
// //     price = 80;
// //   }
// //   else {
// //     message = 'вибачте немає зараз в заказі';
// //   }
// // switch(coffeMachine){
// //   case 'amer':
// //     message = 'отримайте свою американо';
// //       price = 70;
// //       break;
// //       case 'late':
// //         message = 'отримайте свою лате';
// //         price = 80;
// //         break;
// //         default:
// //           message = 'вибачте немає зараз в заказі';

// // }
// // console.log(`${message}, ${price} грн;`);


// // функція для виведення вартості заказу ========

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line 
// const message = `You ordered droids worth ${(orderedQuantity*pricePerDroid)+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
 
//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50))
// console.log(makeOrderMessage(4, 300, 100))
// console.log(makeOrderMessage(10, 70, 200))

// const cuantity = 155
// console.log(`wewddeed2d ${cuantity}`)

// //  ======= рівнвсть =======

// const a = 2;
// const b = 5;
// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false

// //  ======= код для порахування кількості елементів ======== 

// const uyi = "gaf";
// console.log(uyi.length);

// //  ======= код для приведення всіх букв до малих toLowerCase() (для коректного пошуку) =======

// const brand = 'Samsung';
// const narmalizedBrand = brand.toLowerCase();
// console.log(narmalizedBrand);
// console.log(brand[0]);
// console.log(brand.slice(2));

// //  ======= код для пошуку слів (в даному випадку слова спам) =======

// const blacklisterWord = 'спам';
// const string = 'привіт це не спам це абдул';
// console.log (string.includes(blacklisterWord));


// // ===== шаблонні строки=======

// const firstName = 'Volodymyr';
// const lastName = 'Mariia';
// const room = 716;
// const type = 'VIP';
// const welcomeMsg = `Гості ${firstName} ${lastName} поселяться в ${room} в кімнаті ${type}`;
// console.log( welcomeMsg);

// // ======= функція для введення правильності пароля =======

// function isValidPassword(password) {
//  const SAVED_PASSWORD = 'jqueryismyjam';
//  // Change code below this line
//  const isMatch = password === 'jqueryismyjam';

//  // Change code above this line
//  return isMatch;
// }
// console.log(isValidPassword("mangodab3st"))
// console.log(isValidPassword("kiwirul3z"))
// console.log(isValidPassword("jqueryismyjam"))

// // ======= приведення типів ====== 0 nan null "" '' false undefined - приводить в false, все решта в  true

// console.log(Boolean(5));

// // ======= логічне і або або / якщо вписане false відразу перебиває (правда неправда) !pvsy.' d lheue cnjhjye

// console.log(6 && 5 && 7); 
// console.log(6 || 5 || 7);
// console.log(!true);

// // ======= перервірити чи число попадає в відрізок

// const x1 = 10;
// const x2 = 30;
// const number = 20;
// console.log( `Число ${number} попарає в ${x1}`, number > x2);
// console.log( `Число ${number} попарає в відрізок від ${x1} до ${x2}`, number > x1 &&  number < x2);
// const res = number < x1 ||  number > x2
// console.log( `Число ${number} попарає в відрізок до ${x1} від ${x2}`, res);

// // ======= дозволити другу відкрити чат=======
// // повинен бути онлайн/ другом / бути в режимі не офлайн

// const isOnline = true;
// const isFrend = true;
// const isDnd = false;

// const isOpenChat = isOnline && isFrend && isDnd;
// console.log(`чи можна вікрити чат`, isOpenChat)

// // ====== доступ для віп і про

// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log(`є доступ`,canAccessContent);

// // ======= витвления =========

// if(50 > 30){
//  console.log('x > y');
// } else {
//  console.log('x < y');
// } 

// const salary = 1800;
// if(salary <= 500){
// console.log('Рівень 1')
// } else if(salary > 500 && salary < 1000){
//  console.log('рівень 2')
// } else {
//  console.log('Рівень 4')
// }

// // ======= перевірка товарів на складі ========

// function checkStorage(available, ordered) {
//  let message;
//  // Change code below this line 
// if(available <= ordered){
//  message = "Not enough goods in stock!";
// } else {
//  message = "Order is processed, our manager will contact you.";
// }
 
//  // Change code above this line
//  return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// // задача для вирахування вирахування вартості покупки дроідів і виведення залишку=======

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//  let message;
//  // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
//  const totalResult = customerCredits - pricePerDroid * orderedQuantity;
//  if(customerCredits < totalPrice) {
//  message = "Insufficient funds!";
//  } else {
//  message = `You ordered ${orderedQuantity} droids, you have ${totalResult} credits left`;
//  }
//  // Change code above this line
//  return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// //  =======  свіч =======

// function checkPassword(password) {
//  const ADMIN_PASSWORD = "jqueryismyjam";
//  let message;
//  // Change code below this line

//  switch(password){
//    case "mangohackzor":
//    message = "Access denied, wrong password!";
//      break;
     
//        case null:
//    message = "Canceled by user!";
//      break;
     
//        case "polyhax":
//    message = "Access denied, wrong password!";
//      break;
     
//        case "jqueryismyjam":
//    message = "Welcome!";
//      break;
     
//    default:
//  }

//  // Change code above this line
//  return message;
// }

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];



// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);


// // 1 цикл фор================================

// for(let i = 0; i <= 20; i += 2){
//  console.log(i);
// }

// for(let z = 5; z > 0; z -= 1){
//  console.log(z);
// }

// // 2 =============

// const min = 5;
// const max = 13;
// let total = 0;

// for( let i = 5; i < 13; i += 1){

//  if (i % 2 === 0){
// console.log(i)
// total += i
//  }
 
// }
// console.log(total)

// function makePizza() {
//  return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log( makePizza());

// const friends = ['kiwi', 'mango', 'awocado'];
// // const lastIndex = friends.length - 1;
// for (let i = 0; i < friends.length; i +=1 ){
//   console.log(friends[i]);
// }
// for (const friend of friends){
//   console.log(friend)
// }
// // ================================
// const numbers = [1, 2, 5, 8, 11, 14, 17, 20, 10];
// let total = 0;

// for(const number of numbers) {
//   total += number;
// }
// console.log(total);


// for (let i = 0; i < numbers.length; i += 2){
 
//   // console.log(numbers[i]);

//   if(numbers[i] % 2 !== 0){
//     console.log(`${numbers[i]} - нечетние`);

//    continue;
//   }
//   console.log(`${numbers[i]} - четние`);
//   total += numbers[i];
// }

// }
// for (const parent of parents){
//   // console.log(number);
//    if (parent % 2 !== 0) {
//     console.log('пропустити', parent);
//     continue;
//    }
//    console.log(`${parent} - четние`);
//    total += parent ;
// }
// console.log("total: ", total);

// // ============================================================

// const cards = [
//   'Карточка - 1',
//   'Карточка - 2',
//   'Карточка - 3',
//   'Карточка - 4',
//   'Карточка - 5',
//   'Карточка - 6',
//   'Карточка - 7'
// ];
// console.table(cards);
// // const cardsToMov = 'Карточка - 4';
// const index = cards.indexOf('Карточка - 4');
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);
// // const cant = 'Карточка - 25';
// // const index = 3;
// cards.splice(3, 0, 'Карточка - 25');
// console.table(cards);
// cards.splice(3, 0, 'Новая обновльонная карточка - 4')
// console.table(cards);




// =================================================

// const mass1 = [10, 20, 30];
// const mass2 = [40, 50, 60];

// let result123 = 0;

// const results = mass1.concat(mass2);
// console.log(results);

// for (const result of results) {
//  result123 += result;
 
//  console.log(result);
// }


// console.log(result123);
// const add = function (x,y) {
//   console.log(x);
// console.log(y);
//   const result = (x+y);
//   // console.log(result);
  
//   console.log('Визови мене едд');
//   return result;
// };

// const rxt =add(5,3);
// console.log(rxt);
// add(10,15);
// add(5,4);

// ============================ ФУНКЦІЇ============================

// const numbers = [1, 2, 5, 8, 11, 14, 17, 20, 10];
// let total = 0;

// for(const number of numbers) {
//   total += number;
// }
// console.log(total);

// const calculateTotalPrice = function (item) {
//   console.log(item);
//   let total = 0;
//   for(one of item){
//     total += one;
//   }
//  return total;
// }

// // console.log(calculateTotalPrice([1,2,3]));
// // можна так
// console.log(calculateTotalPrice([5,10,15,20]));
// console.log(calculateTotalPrice([100,200,300]));
// // можна так
// const result = calculateTotalPrice([1,2,3]);
// console.log(`Загальна сума покупок ${result}`);
// // const result1 = calculateTotalPrice([5,10,15,20]);
// // console.log(result1);
// // const result2 = calculateTotalPrice([100,200,300]);
// // console.log(result2);

// const Logins = ['petrushka', 'kiwi', 'mango', 'ananas']


// const findLogins = function (AllLogins, loginToFinds){


//   for (const login of AllLogins){
// if(login === loginToFinds){
//   return `пользователь ${loginToFinds} найден `;
// }
//   }

// return `пользователь ${loginToFinds} не найден `;

// return AllLogins.includes(loginToFinds) ? `пользователь ${loginToFinds} найден ` : `пользователь ${loginToFinds} не найден `;

// };


// console.log(findLogins(Logins, 'petrushka'));
// console.log(findLogins(Logins, 'kiwi1'));
// console.log(findLogins(Logins, 'mango1'));
// console.log(findLogins(Logins, 'ananas1'));

// ================= rest ====================

// const add = function (...agrds) {
// console.log(agrds);
// let total = 0;
// for(const agr of agrds){
// total += agr;
// }
// return total;
// };
// console.log(add(1,2,3));
// console.log(add(1,2,3,4,5,6));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
// const totalPrice = message.split().length * pricePerWord;
//  return totalPrice;

//   // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// ======================= щотчик фор (пояснення в ментора) ====================

// function calculateTotal(number) {
//   // Change code below this line
//    let min = 0;
//    for(let i = 0; i <= number; i += 1){
//     console.log(i);
//    min += i;
   
//    }
 
//    return min;
   
//    // Change code above this line
//    }
//    console.log(calculateTotal(1));
//    console.log(calculateTotal(3));
//    console.log(calculateTotal(7));
//    console.log(calculateTotal(18));
//    console.log(calculateTotal(24));


  //  ================================================================================
  // const fruits = ['apple', 'plum', 'pear', 'orange'];

  // for (let i = 0; i < fruits.length; i+=1) { // Change this line
  //   const fruit = fruits[i]; // Change this line
  //   console.log(fruit);
  // }

  // або то саме що вище======================================


//   for (const fruit of fruits) { // Change this line
//     // Change this line
//    console.log(fruit);
//  }
// //  ==============================================


//  function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for(let i = 0; i <= order.length - 1; i += 1){
//   // const ord = order[i];
//  total += order[i]; 
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// =================================================================
// function findLongestWord(string) {
//   // Change code below this line
//  let longestWord = "";
//  const stringSplit = string.split(" ");
 
//   for (const word of stringSplit){
//     if (word.length > longestWord.length){
//       longestWord = word;
//     }
//   }  
  

// return longestWord;
  
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// =============================================================================

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   let numberTotal = 0;
//   const numberMin = min;
//   const numberMax = max;
  
//   for(let i = numberMin; i <= numberMax; i += 1){
   
//   numbers.push(i);
    
//   }
  

//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// ===============================================================

// function filterArray(numbers, value) {
//   // Change code below this line
// let total = [];
//  for(const number of numbers) {

//  if(number > value){
//  total.push(number);
//  }
 
//  }
  
 

// return total;
//  // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// =============================================================== 25 =================

// function getCommonElements(array1, array2) {
//   // Change code below this line
// let numbers = [];
 
// for(const elements of array1){
 
// if(array2.includes(elements)){
//  numbers.push(elements);
// }
// }

// return numbers;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ===================================================== 29 =========================================

// function getEvenNumbers(start, end) {
//   // Change code below this line
// let total = 0;
 
//  for(const element of start){
   
//  if(element % end === 0){
//  total += element;
//  }
//  }

// return total;
//    // Change code above this line
//  }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// function getEvenNumbers(start, end) {
//   // Change code below this line
// let total = [];
 
 
//   for (let i = start; i <= end, i += 1;){
//  console.log(i);

//   }
// total.push(end[i]);
  


//  return total;
//    // Change code above this line
//  }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// const min = 12;
// const max = 19;

// for (let i = min; i <= max; i += 1){
//   console.log(i);
// }

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let total = [];
 
 
//   for (let i = start; i < end, i += 1;){
//  console.log(i);
// if(i % 2 === 0){
// } 
// total.push(i);

  
// }

//  return total;
//    // Change code above this line
//  }

// function includes(array, value) {
//   // Change code below this line

  
//   for(const arr of array){
//  if(arr === value){
//  return true;
//  };
    
//   };
  
  
//   return false;
  
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPink = {
//   inputName
// };
// console.log(colorPink);

// const totalPrice {
//   name: "Track submishyn",
//   track: [track1, track2,track3],
// }


// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// // Change code below this line
// console.log(apartment.location);
// console.log(apartment);
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
// },

  
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// // Change code below this line
// console.log(apartment);
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
  
//   const keys = Object.keys(object);
//   console.log(keys);
//   for(const key of keys){
//     propCount += key;
//   };
  
 

//   propCount = (Object.keys(object). length);
  
//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for(const color of colors){
// console.log(color.hex);
// // hexColors.push(colors.hex);
// // console.log(hexColors);
// };
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for(const product of products){
//   console.table(product);
 

// //  if(product.name){
// // return product.price;
// // } else {
// // return null;
// // };  
// };
//  // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


