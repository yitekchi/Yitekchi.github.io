'use strict';

///////////////////
// let hasDriverLicense = true;
// const passTest = true;

// if (passTest) hasDriverLicense = true
// if (hasDriverLicense) console.log('i can drice :D')  


//  x = 3.14;    // This will not cause an error.
//  myFunction();
 
//  function myFunction() {
 
//    y = 3.14;  // This will cause an error (y is not defined).
//  }

// Functions
// var my = 'Abdusami';
// function logger(){
//     console.log( 'My name is Elyar',my)
// }

// calling /running /invoking function

// logger(my);
// function fruiProcessor(apples , oranges){
//     const juice = `Juice with ${apples} apples and ${oranges}oranges `;
//     return juice
// }

// const appleJuice = fruiProcessor(5,0);
// console.log(appleJuice);
// const appleOrangeJuice = fruiProcessor(2,3);
// console.log(appleOrangeJuice);

// const num = Number('23')
/////////////////////////////////

// Function Declarations VS Expressions

// Function Declarations 
// const d = new Date();
// let year = d.getFullYear();
// function calcAge1(brithYear){
//     return year - brithYear;
// }

// const age1 = calcAge1(1919);
// console.log(age1)
// function calculator(a,b){
//     return a*b;
// }
// const age2 = calculator(2,10);
//console.log(age2)
// Function Expressions 
// const calcAge3 = function(brithYear){
//     return 2030 - brithYear 
// }
// const age3 = calcAge3(1995)
// console.log(age1,age2,age3)

// Arrow Function

// const calAge3 = brithYear => 2023 - brithYear;
// const age3 = calAge3(1990);
// console.log(age3);

// const yearsUnitilRetirement = (brithYear ,firstName) =>{
//     const age = 2023 - brithYear;
//     const retirement = 65 -age;
//     //return retirement
//     return `${firstName} retires in ${retirement} year`;
// }

// console.log (yearsUnitilRetirement(1990,'Amine'));
// console.log(yearsUnitilRetirement(1980,'Alim'));

///////////////////////////////////

// Function Calling Other Function
// function cutFruitpieces(fruit){
//     return fruit*4
// }
//console.log(cutFruitpieces(10))

// function fruitProcessor(apples ,Oranges){
//     const applePieces = cutFruitpieces(apples);
//     const orangePieces = cutFruitpieces(Oranges);
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}pieces of orange`;
//     return juice;
// }
// console.log(fruitProcessor(5,10));
///////////////////////////////////////

// Reviewing Function

// const calAge = function (brithYear){
//     return 2037 - brithYear
// }

// const yearsUnitilRetirement = function(brithYear,firstName){
//     const age = calAge(brithYear);
//     const retirement = 65-age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   }else {
//     console.log(`${firstName} has already retired`);
//     return -1
//   }
// }

// console.log(yearsUnitilRetirement(1991,'Erkin'));
// console.log(yearsUnitilRetirement(1950,'Muhammed'));

// Introduction to arrays

//  bir maxina var bar .  bu var..  bmw ,audi , toyota 

// const friend1 = 'aygul';
// const friend2 = 'aysa';
// const friend3 = 'alim';
// const friends = ["aygul","aysa","alim"];
// console.log(friends);

// const y = new Array(1990,1890,1999,2008,2020);

// console.log(friends[0]);
// console.log(friends[2])
// console.log(friends[friends.length - 1]);

// friends[2] = 'kasim';

//console.log(friends);

// const firstName = ' rozi';

// const Amine = [firstName ,'teacher', 2323 - 1999 , 'Job' ,friends];

// console.log(Amine);
// console.log(Amine.length);
// Exercise

// const calAge = function(brithYear){
//     return 2040 -brithYear;
// }
// const years = [1990,1890,1999,2008,2020];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1]);
// console.log(age1,age2,age3)
// const ages = [calAge(years[0]),calAge(years[1]),calAge(years[years.length - 1])];
// console.log(ages);

//////////////////////////// 

// Basic Array  Operation (Methods)

const friends = ["Abeydul",'muhammad','nuzugum','Amine'];

// Add elements

const newLengh = friends.push("abletjan");
console.log(friends)
console.log(newLengh)

friends.unshift('ayishe');

console.log(friends);

// Remove elements

friends.pop();//last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);
console.log(friends.indexOf('nuzugum'))
console.log(friends.indexOf('ayishe'));

if (friends.includes("nuzugum")) {
    console.log('you have a friend called nuzgum');
    
}else{
    console.log('you have dont  have nuzgums');
}

////////////////////////////// 




























