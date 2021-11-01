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



// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//  return { category: category, priority: priority, completed: completed, ...data };
//   // Change code above this line
// }console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// Change code below this line


// const bookShelf = {

//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//   return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   return `Updating book ${oldName} to ${newName}`;
//   },
 
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
    
//     let ind = this.books.indexOf(oldName);
//     const res = this.books.splice(ind, 1, newName);


// return res;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions(){
//  const res = this.potions;
  
// return res;
// }
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// const res = this.potions.indexOf(potionName).pop(potionName);

// return res;
//     // Change code above this line
//   },
// };

// ================ карточка товарів ===============================================

// const cards = {
// items: [],

// getItems(){
//   return this.items;
// },
// add(product){
// this.items.push(product);
// },
// remove(prodactName){
//   const { items } = this
//   for(let i = 0; i < items.length; i += 1){
//     const {name} = items[i];

//     if(prodactName === name){
// console.log('нашли токой продукт:', prodactName);
// console.log(i);
// items.splice(i, 1);
//     };
//   };
//   // const ind = this.items.indexOf(prodactName);
//   // const clean = this.items.splice(ind, 1);
// },
//  clear(){
// this.items = [];
//  },
//  countTotalPrice(){
//    let total = 0;
//    for(const {price} of this.items){
// total += price
//    }
//    return total;
//  },
// };

// console.log(cards.getItems());


// cards.add({ name: 'mango', price: 150 });
// cards.add({ name: 'kiwi', price: 120 });
// cards.add({ name: 'ajaks', price: 170 });
// cards.add({ name: 'banana', price: 110 });

// console.table(cards.getItems());

// console.log('total: ',cards.countTotalPrice());

// cards.remove('mango');
// console.table(cards.getItems());

// cards.clear();
// console.log(cards.getItems());


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//    addPotion(newPotion) {
//     for(const potion of this.potions) {
//     if (potion.name.includes(newPotion.name)) {
//      return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }
//      this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
    
//      for(const potion of this.potions){
//     if(potion.name === potionName){
//     this.potions.splice(this.potions.indexOf(potion), 1)
//     };
//     };


  
//   },
//   updatePotionName(oldName, newName) {
   
//     for(const potion of this.potions){
//     if(potion.name === oldName){
//   potion.name = newName;
//     };
//     };
    
//      },
    
   
//   // Change code above this line
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// const fnaA = function (massage,callback){
//   console.log(massage);

//   callback(100);
// };

// const fnaB = function (Number){
// console.log(Number);
// };
// fnaA ('qwqwqw', fnaB);





// const doMath = function (a, b, callBack){
// const result = callBack(a, b);
// console.log(result);
// };
// const add = function (x, y){
//   return x + y;
//   };

// doMath (2, 3, add);
// doMath (20, 30, function(z, d){
//   return z - d;
// });


// ==============================


// const filter = function(array, test){
//   const res = []
// for(const arr of array){
//   console.log(arr);
//  const passed = test(arr);

//  if(passed){
//    res.push(arr);
//  };
// };
// return res;
// };



// const atTheOldToad = [
  
//   { name: "Speed potion", price: 460 },
//   { name: "Dragon breath", price: 780 },
//   { name: "Stone skin", price: 520 },
  
// ],

// const resultPrice = function (atTheOldToad) {
//   return atTheOldToad.price >= 600;
// };

//     const r3 = filter(atTheOldToad, resultPrice)
//       console.log(r3);
    

// const fnA = function(name){
// const innervar = 555;
//   const fnB = function(dish){
//     console.log(innervar);
//     console.log(` ${name}, готовить ${dish}`);

//   };
//   return fnB;
// };
// const mango = fnA('mango');

// console.log(mango);

// mango('котлети');
// mango('суп');

// const fnA = (a,b,c) => a+b+c;

//  =================================   MAP =======================
// console.log(fnA(5,10,15));

// const numbers = [5, 10, 15, 20, 25];
// const resMap = numbers.map(number => {
//   console.log(number);
//   return number * 2;
// });
// console.log(resMap);

// const players = [
  
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
    
//   ];

//   const playerNames = players.map(player => player.name);
//   console.log(playerNames);

//   const playerPrice = players.map(player => player.price);
//   console.log(playerPrice);

//   const playerTotal = players.map(player => {
  
//     return {
//       ...player,
//       price: player.price * 2,
//     };
//   });
//   console.table(playerTotal);

// ==========================================   FILTER ================================

// const numbers = [5,10,15,20,25];

// const totalFilters = numbers.filter(number => {
//   console.log(number);

//   return number < 10 || number > 20;
// })
// console.log(totalFilters);

// ================================== REDUCE ================================================

// const numbers = [5,10,15,20,25];

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);

//   return acc + number;
// }, 5 );
// console.log(total);

// ================================================

// const numbers = [5,10,15,20,25];

// const total = numbers.reduce((acc, number) => acc + number, 0 );
// console.log(total);

// =================================================

// const salary = {
//   mango: 500,
//   kiwi: 700, 
//   alax: 900,
// };
// const salaryVal = Object.values(salary).reduce((total, el) => total + el, 0);

// console.log(salaryVal);

// const tweets = [
//   { id: '000', liks: 5, tags:['thr','rhtrt']},
//   {id: '001', liks: 5, tags:['html','css','rrrr']},
//   {id: '002', liks: 5, tags:['js','react']},
//   {id: '003', liks: 5, tags:['hyh','ytghgh']},
// ];

// const totalTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags)

//   return acc;
// }, []);

// console.log(totalTags);

// ===================================================================

// const tweets = [
//   { id: '000', liks: 5, tags:['css','html']},
//   {id: '001', liks: 5, tags:['react','css','react']},
//   {id: '002', liks: 5, tags:['js','react']},
//   {id: '003', liks: 5, tags:['css','react']},
// ];

// const totalTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(totalTags);

// ========================= перебор за допомогою REDUCE ==========================


// const total = totalTags.reduce((acc, tweet) => {
// console.log(acc);
//   if (acc[tweet]) {
//     acc[tweet] += 1;
//     return acc;
//   }
//   acc[tweet] = 1;
//   return acc;
// }, {});

// ======================= SORT ===============================

// const numbers = [1, 30, 3, 20, 5, 15,].sort((a, b) => a - b);
// console.log(numbers);

// ================================== MAP + FLAT ===================================

// const tweets = [
//   { id: '000', liks: 5, tags:['css','html']},
//   {id: '001', liks: 5, tags:['react','css','react']},
//   {id: '002', liks: 5, tags:['js','react']},
//   {id: '003', liks: 5, tags:['css','react']},
// ];

// const tagsMap = tweets.flatMap(el => el.tags);
// console.log(tagsMap);

// ==================================== ЦЕПОЧКИ ВИЗОВОВ ======================

// const nambers = [1, 8, 2, 6, 15, 5, 10];

// const sortNumber = nambers
//   .filter(number => number > 2)
//   .map(number => number * 3)
//   .sort((a, b) => a - b);
// console.log(sortNumber);
// console.log(nambers);
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName) {},
// };
// // Change code above this line
// if(this.pizzas.includes(pizzaName)){
//    return onSuccess(pizzaName)
// }
//      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// ======================================================  FOREACH   ========================

// const numbers = [5, 10, 8, 15, 25];
// let total = 0;
// numbers.forEach(function (number) {
//   console.log(number);
//   total += number;
//   return total;
// });

// console.log('result', total);

// ==================================================== FOREACH ==========================
// function getCommonElements(firstArray, secondArray) {
//   let res = [];
//   firstArray.forEach(function (firstA) {
//     console.log(firstA);
//     if (secondArray.includes(firstA)) {
//       res.push(firstA);
//     }
    
//   })
//   return res;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));
const users =
  [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39
    }
  ];

// ============================= задача 48 в автопровірці ===================================

// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).reduce((acc, user) => {
//   return (acc + user.balance);
// }, 0);
// };
// console.log(getTotalBalanceByGender(users, "male"));


// const res = users.reduce((acc, user) => {
//   return (acc + user.balance) / users.length;
// }, 0);
// console.log(res);

// const res = users.map(user => user.friends).sort((a, b) => b.friends.length - a.friends.length);
// const res = users.sort((a, b) => b.friends.length - a.friends.length)
// console.log(res);

//   const sortByDescendingFriendCount = users => {
//   return [...users].sort((firstFriend, secondFriend) => secondFriend.friends.length - firstFriend.friends.length);
// };

// console.log(users);

// const getUsersWithFriend = (users, friendName) => {
  
//   return users.filter(user => user.friends.includes(friendName));
  
 
// };

// console.log(getUsersWithFriend(users,"Briana Decker"))


// users.filter(
//   (course, index, array) => array.indexOf(course) === index
// ); 

// const res = users.flatMap(user => user.friends).filter(user.friend =>);
// console.log(res);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", c: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b) => a.rating - (b.rating));

// const sortedByDescentingRating = [...books].sort((a,b) => b.rating - (a.rating));

// const counter = { 
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },

// };


// const objC = {
//   z:5,
// };
// console.log('objC:', objC);

// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB:', objB);


// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA:', objA);

// objA.z = 1000;
// console.log('objA:', objA.z);

// console.log(objA.hasOwnProperty('y'));
// const dynniobj = Object.create({messge: 'eeeeeee'});
//   dynniobj.message = 'erefeef',

//   console.log(dynniobj.message);
// console.log(dynniobj);

// const Car = function ({ brand, model, price } = {}) {

//   this.brand =  brand;
//   this.model = model;
//   this.price = price;
  
// };
//   Car.prototype.sayHi = function () {
//     console.log('sayHi -->',this);
//     console.log('Hello:');
//   };
// console.log(Car.prototype);
 
// Car.prototype.changPrice = function (newPrice) {
//   this.price = newPrice;
// };


// const myCar = new Car({brand: 'Audi', model: 'Q3', price: '350000'});
// console.log(myCar);

// myCar.sayHi();
// myCar.changPrice(1000);

// const myCar2 = new Car({ brand: 'BMW', model: 'X5', price: '500000'});
// console.log(myCar2);
// myCar2.sayHi();
// myCar2.changPrice(9999999);


// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price:'450000'});
// console.log(myCar3);
// myCar3.sayHi();

// const User = function ({ email, password } = {}) {
//   this.email = email,
//     this.password = password
// };
// User.prototype.pend = function (newPassword) {
//   this.password = newPassword
// };
 
// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail
//  };

// const userFn = new User({ email: 'vova@gmail.com', password: 'Forysiak' });

// userFn.pend('Taras');
// userFn.changeEmail('14071992.pedro@gmail.com');
// console.log(userFn);

// ===========================================  КЛАСИ І ПРОТОТИПИ (КОНСТРУКТОРИ) ===================================

// class Car {

//   static descriotion = 'Клас описующий автомобіль'; // статичне свойство

//   static logInfo(carObj) {
//     console.log('Car loginfo -->', carObj);
//   }

  // #test = 'test'; // приватне свойство
  // mySuperPablic = 555; // оголошення публічного свойства

  // constructor({ brand, model, price } = {}) {
  //   console.log('Виконується конструктор');
  //   console.log(this);
  //   this.brand = brand;
  //   this._model = model;
  //   this._price = price;

  //   // this.mySuperPablic = 555; публічне свойство, ще один вид оголошення

  //   // console.log(this.#test); // оголошення приавтного свойства
  // }
  
  // changePrice(newPrice) {
  //   this.price = newPrice
  // }
  // updataModal(newModal) {
  //   this.model = newModal
  // }
  // get price() {
  //   return this._price;
  // }
  // set price(newPrice) {
  //   this._price = newPrice;
  //  }

  // get model() {
  //   return this._model;
  // }
  // set model(newModel) {
  //   this._model = newModel;
  //  }

// };


// console.dir(Car);

// console.log(Car.descriotion);

// consrcarProt = new Car({ brand: 'Audi', model: 'A6', price: '450000' });
// console.log(consrcarProt);
// consrcarProt.model = 'Q8';
// console.log(consrcarProt.model);
// consrcarProt.price = '4444444444444';
// console.log(consrcarProt.price);
// console.log(consrcarProt);

// Car.logInfo(consrcarProt);
// consrcarProt.changePrice(99999);
// consrcarProt.updataModal('Q5');
// console.log(consrcarProt.getModel());
// consrcarProt.changePrice(98989898);
// console.log(consrcarProt);

// ========================================== GET SET =====================================

// const obj = {
//   _a: 5,
//   get a() {
//     return this._a
//   },

//   set a(x) {
//     this._a = x;
//   },
// };

// obj.a = 100;
// console.log(obj);

// ============================ НАСЛІДОВАННЯ =======================================

// class Hero {
//   constructor(name = 'hero', xp = 0) {
//     this.name = name;
//     this.xp = xp;
//   }

//   geinXp(amout) {
//     console.log(`${this.name} получает ${amout} опита`)
//     this.xp += amout;
//   }

// };

// const mango = new Hero({ name: 'Mango', xp: 1000 });


// class Warning extends Hero{
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} атакує іспользуя ${this.weapon}`);
//   }

// };

// class Bedsteck extends Warning {
//   constructor(name, xp, majwether) {
//     super(name, xp);
//     this.majwether = majwether
//   }

//   lowel() {
//     console.log(`${this.name} ----- ${this.majwether}`);
//   }

// };

// const kiwi = new Bedsteck('kiwi', 700, 'miwina');
// kiwi.lowel();
// kiwi.geinXp(700);

// class Bero extends Hero {
//   constructor(name, xp, stepp = []) {
//     super(name, xp);
//     this.stepp = stepp;
//   }

//   cast() {
//     console.log(`${this.name} щось там щось там ${this.stepp}`);
//   }
// };


// const mango = new Warning('Mango', 1000, 'алебарда');
// mango.attack();



// mango.geinXp(1000);
// console.log(mango);
// // console.log(mango.__proto__ === Warning.prototype);
// // console.log(Warning.prototype.__proto__);

// const poly = new Bero('poly', 500, [1, 5, 10]);
// console.log(poly);
// poly.cast();
// poly.geinXp(200)

// ============================================== РІШЕННЯ 2 ЗАДАЧІ В АВТОПРОВІРЦІ =======================================

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],

//    getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//  addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// }
// customer.setDiscount(0.2);
// console.log(customer.getDiscount()); 
// customer.addOrder(5000, "Steak")

// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ==================================================================== 3   задача 5 модуля==============================
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log( historyService.getEmails());

// ================================================== PROTOTYPE ==========================

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(animal);
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name);

// ================================================================================

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };


// const child = Object.create(parent);
// z: 5;

// child.name = "Jason";
// child.age = 27;


// console.log(child.surname);
// console.log(child.hasOwnProperty('heritage'));

// =================================================================== 10 задача ======================

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const index = this.items.indexOf(itemToRemove)
//     this.items.splice(index,1)

//   }

// };

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




// ================================================== 12 задача модуль  5 =============================
// class Car {
//   // Change code below this line
// #brand
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//   return this.#brand;
//   }
//   changeBrand(newBrand){
//   this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;
  
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get Brand() {
//     return this.#brand;
//   }

//   set changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get Model() {
//     return this.#model;
//   }

//   set updateModel(newModel) {
//     this.#model = newModel;
//   }

//   get Price() {
//     return this.#price;
//   }

//   set Price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// ===================================================== 17 =====================
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice > 'MAX_PRICE'){
//      return
//     } 
    
//    this.#price = newPrice
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// =============================================== 18 задача 5 модуля ==========================================

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice(price){
// if(price > 50000){
// return("Error! Price exceeds the maximum");
  
// }
//   return("Success! Price is within acceptable limits");
  
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// ============================================= 19 задача 5 модуля ===========================


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
// constructor({email, accessLevel}){
//   super(email);
//   this. accessLevel = accessLevel;

// }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// const navEl = document.querySelector('li');
// console.log(navEl);

// ========================================= задачі в вс коді ======================================

// =============================================  ДОМ ==================================================


// // ===================== як замінити строку в h1-h6  і всіх тегах з текстом ===================
// const herotitleEl = document.querySelector('.hero__title');
// console.log(herotitleEl);
// console.log(herotitleEl.textContent);
// herotitleEl.textContent = 'Я сладкий перажочек'

// const buttonActionEl = document.querySelectorAll('.js-action button');
// console.log(buttonActionEl[0].dataset.action);


// ============================================ як додоти заголовок h1 з текстом в js ============================

// const remoweTitle = document.createElement('h1');
// remoweTitle.textContent = 'Це заголовок сторінки';
// remoweTitle.classList.add('page__title');
// document.body.appendChild(remoweTitle);
// console.log(remoweTitle);

// ============================================= домашня робота завдання 2 ==============================================

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];



// const remoweItem = document.createElement('li');
// remoweItem.textContent = 'Potatoes';
// remoweItem.classList.add('item');

// const remoweItem1 = document.createElement('li');
// remoweItem1.textContent = 'Mushrooms';
// remoweItem1.classList.add('item');
 
// const remoweItem2 = document.createElement('li');
// remoweItem2.textContent = 'Garlic';
// remoweItem2.classList.add('item');

// const remoweItem3 = document.createElement('li');
// remoweItem3.textContent = 'Tomatos';
// remoweItem3.classList.add('item');

// const remoweItem4 = document.createElement('li');
// remoweItem4.textContent = 'Herbs';
// remoweItem4.classList.add('item');

// const remoweItem5 = document.createElement('li');
// remoweItem5.textContent = 'Condiments';
// remoweItem5.classList.add('item');

// const navItem = document.querySelector('ul#ingredients');
// navItem.append(remoweItem, remoweItem1, remoweItem2, remoweItem3, remoweItem4, remoweItem5);


//  ============================================ завдання 3 =====================================

// const images = [
// {
// url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
// alt: 'White and Black Long Fur Cat',
// },
// {
// url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
// alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
// },
// {
// url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
// alt: 'Group of Horses Running',
// },
// ];

// const imageItem = document.createElementNS('li');
// const imageEl = document.createElement('img');
// imageEl.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260';
// imageEl.alt = 'Group of Horses Running';
// imageEl.width = 320;
// imageEl.height = 180;
//  imageItem.appendChild(imageEl);

// // const imageItem2 = document.createElementNS('li');
// const imageEl2 = document.createElement('img');
// imageEl2.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260';
// imageEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// imageEl2.width = 320;
// imageEl2.height = 180;
// //  imageItem2.appendChild(imageEl2);

// // const imageItem3 = document.createElementNS('li');
// const imageEl3 = document.createElement('img');
// imageEl3.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260';
// imageEl3.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// imageEl3.width = 320;
// imageEl3.height = 180;
// //  imageItem3.appendChild(imageEl3);

// const heroEl = document.querySelector('.gallery');
// heroEl.append(imageItem, imageItem2, imageItem3);


// ============================================= домашня робота завдання 1 ===================================

//  const resOfItemLi = document.querySelector('ul#categories');
// const categoriesLength = resOfItemLi.children.length;
// console.log(`Number of categories: ${categoriesLength}`);

// const resOfCategories = document.querySelectorAll('h2');
// console.log(resOfCategories);

// const res = resOfCategories.map(el => el);
//  console.log(res)



// const title = document.querySelectorAll('h2');
// console.log(title.textContent);

// console.log(resOfItemLi); 
// console.log(resOfItemLi.children);
// const categoriesValue = resOfItemLi.children;
// console.log(categoriesValue);
// const liItem = categoriesValue.children;
// console.log(liItem);

// const liItem = document.querySelectorAll('li');
// console.log(liItem);
// const targetButtonClick = document.querySelector('.target-btn');
// const hendelButtonSeciutyry = document.querySelector('.btn');
// const hendelButtonBars = document.querySelector('.btn2');

// targetButtonClick.addEventListener('click', () => {
//   console.log('click');

//   hendelButtonSeciutyry.addEventListener('click', onTargetBtnClick);
// });

// hendelButtonBars.addEventListener('click', () => {
//   console.log('зніми мені клік з кнопки');

//   hendelButtonSeciutyry.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick() {
//   console.log('клік по цельовій кнопці');
// }

// const divContainer = document.querySelector('.js-container');
// console.log(divContainer);

// divContainer.addEventListener('click', onClickButton);

// function onClickButton(e) {

//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(e.target.textContent);
// }



//  ===============================  скрипт для динамічного додавання кнопки ===============================================================================

// const addButton = document.querySelector('.add-BTN');

// addButton.addEventListener('click', oncreateBtn);
// let lasOfCreate = 6;
// function oncreateBtn() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${lasOfCreate}`;
//   btn.type = 'button'

//   divContainer.appendChild(btn);
// lasOfCreate += 1;
// 


// ================================================= скрипт для динамічного зазначення і відзначення кнопки (додавання і знімання класу css)===================== 

// const container = document.querySelector('.js-tags');
// let selectedTag = null;

// container.addEventListener('click', onTargetButtonClick);
// function onTargetButtonClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const tagsActiveBtn = document.querySelector('.tags__button-active');
//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__button-active');
//   console.log(tagsActiveBtn);

  
//   if (tagsActiveBtn) {
//     tagsActiveBtn.classList.remove('tags__button-active');
//   }
//   // tagsActiveBtn?.classList.remove('tags__button-active');
 
//   selectedTag = e.target.dataset.button;
//   console.log(selectedTag);

  
// }

// const container = document.querySelector('.js-tags');
// let selectedTag = new Set();

// container.addEventListener('click', onTargetButtonClick);

// function onTargetButtonClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   // console.log(e.target);
//   const btn = e.target;
//   const tag = btn.dataset.button
//   const isActive = btn.classList.contains('tags__button-active');
//   if (isActive) {
//     selectedTag.delete(tag);
//   } else {
//     selectedTag.add(tag);
//   }
//   btn.classList.toggle('tags__button-active');
//   // selectedTag.push(e.target.dataset.button);
//   // const res = selectedTag.filter((el,index,array) => array.indexOf(el) === index);
//   // console.log(res);
//   //  selectedTag.add(e.target.dataset.button);
 
//   console.log(selectedTag);
// };
// ================================================================================================
  
// const coorsOutputRef = document.querySelector('.js-trottle');
// let mouseMoveInvocationCounter = 0;
const items = [
  {lable: 'js'},
  {lable: 'css'},
  {lable: 'html'},
  {lable: 'react'},
  { lable: 'notejs' },
  {lable: 'lodash'},
  { lable: 'SQL'},
]
const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('.js-input'),
 }
refs.input.addEventListener('input', onFilterChange);



const listItemMarkup = renderOfMassyw(items);
createEl(listItemMarkup);
console.log(listItemMarkup);
function renderOfMassyw(items) {
  return items.map(item => `<li>${item.lable}</li>`).join('');
}

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();
  const toFilteredItems = items.filter(t => t.lable.toLowerCase().includes(filter));
   const listItemMarkup = renderOfMassyw(toFilteredItems);
 createEl(listItemMarkup);

}
function createEl(marcup) {
  refs.list.innerHTML = marcup;
}
