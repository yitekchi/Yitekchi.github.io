/* Linking a JAvascript File  */

// let js = "12321321";
// let JAvascript = 'herip';

// Data Type

// let javascriptisFun = true
// console.log(typeof '12345');

// JavascriptisFun = 'YES!';
// console.log(typeof JavascriptisFun)

// let year

// console.log(typeof year)

// year= 2023
// console.log(typeof null)
/////////////////////

// let , const , var

// let age = 30
// age = 31;
// age = 35;
// lastname = 55;

// const brithYEar = 1990;
// const brithYEars = 1991;

// var job = 'developer';
// job =`teacher`

// lastname = 'Elyar'

/////////////////////////////

//Basci Opoerator

// const now = 2030;
// const ageMohammad = now - 1985;
// const ageGuli = now-2023;

//console.log(ageMohammad / 5,ageGuli*2);

// const fristname = 'Mohammad';

// const lastnames = 'abdulla';

//console.log(fristname+''+lastnames);

//Assignment operators

// var x = 10+5
//    x= 5+5
//    y=4-2
// console.log(x)


// if(true){
// let Letvireble = 'mohammed';
// console.log(Letvireble)
// }

// if(true){
//    const Letvireble = 'abaidulla';

//    }
  
//  console.log(Varvireble)
//  var  Varvireble = 'this is a test';

// this  is  a comment

// var string = 'thisis  a  testing';

// var number = 123456;

// var  boolean = true & false;
// var Amina = {familis:'Elyar', YExi:'30'}
//  var car = ['BMW','Audi','Volvo']
// console.log(Amina.YExi);


// var number = 123456;
// var number1 = 123456;
// var string = '123456';

// if (string === number || number1 == number) {
//    console.log('this anwser is right !')
// } else {
//    console.log('this anwser is false !')
// }
   
// Oprerato precedence

// const Now = 2050;

// const Ageablat = Now - 1990;

// const AgeAlim = Now- 1995;

// console.log(Now-1990 <= Now - 1995);

// x = y = 25-10-5;

// console.log(x,y)
// const averageAge = (Ageablat + AgeAlim)/ 2;

// console.log(Ageablat,AgeAlim,averageAge);

// Strings and Template Literals

// const fristname = 'Elyar';
// const job = 'teacher';
// const brithYear = '1986';
// const year = 2040;
// const Elyar = "I am" + fristname + ',a'+(year - brithYear)+'year old'+job+'!';
// console.log(Elyar)

// const AlimjanNew = `i am ${fristname} , a ${year - brithYear} year old ${job} !`;

// console.log(AlimjanNew);
// Taking Decisions if/else Statements

// const age = 15;

// if (age >= 18) {
//    console.log('Men Shoporluk Perawa  alsa bulidu !')
// } else {
//    const yeasrLeft = 38 - age ;
//    console.log(` men  Shoporluk Perawa  alsa bolmaydu  qun ki men ${yeasrLeft}!`)
// }

// const brithYear = 1985;

// let century;

// if (brithYear <= 2000) {
//    century = 20;
// } else {
//    century = 21;
// }
// console.log(century)

//Type Conversion and Coercion

// Type Conversion

// const inputYear ='1991';
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18);

// if(Number(inputYear)===inputYear){
//    console.log('true');
// }
 
// //Type coercion
// console.log("i am" +30+"years old");
// console.log(Number('23'+'10') +3);
// console.log('23'/'2');

// let n ='1' + 1 //11
// n = n-1;
// console.log(n)

// Truthy and falsy Values

// 5 falsy values :0 , undefined , null ,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean('Elyar'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// const money = {};
// if (money) {
//    console.log("Don't spend it all");
// } else {
//    console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//    console.log("Don't spend it all");
// } else {
//    console.log("You should get a job!");
// }

// Equality Operators: == Vs ===

// const age = '18';
// if (age === 18) {
//    console.log("Don't spend it all")
// }
// if(age == 18){
//    console.log("You should get a job!");
// }

// const favorite = Number(prompt("bu tor bikat ke kirmek qi bolsigiz yexigizni  kirguzug "))

// console.log(favorite)
// console.log(typeof favorite);

// if (favorite === 23) {
//    console.log("Don't spend it all")
// } else if(favorite === 7) {
//    console.log("You should get a job!")
// }else if(favorite === 9){
//    console.log("bu 9 ")
// }else{
//    console.log("nothings")
// }

// Logical Operayor 
// const hasDriverLicense = true //A
// const hasGoodVision = true //B

// console.log(hasDriverLicense&&hasGoodVision);
// console.log(hasDriverLicense||hasGoodVision);
// console.log(!hasGoodVision);

// if (!hasDriverLicense&&hasGoodVision) {
//    console.log("Don't spend it all")
// } else {
//    console.log("You should get a job!")
// }

// Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.75;

// const BMIMark = massMark  /heightMark **2;
// const BMIJohn = massJohn /(heightJohn*heightJohn)
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark ,BMIJohn,markHigherBMI)

// The swich Statement 

//const day = 'tuesday';

// switch (day) {
    
//     case 'monday':// day === 'monday'
//     console.log('plane course structure')
//     console.log('Go to coding meetup') 
//         break;
//      case 'tuesday':
//         console.log('work at company') 
//         break;
//         case 'wednesday':
//             console.log('homework 2') 
//         break;
//         case 'thursday':
//         console.log('homework') 
//         break;
//         case 'friday':
//             console.log('prepare theory videos') 
//             break;
//         case 'saturday':
//         case 'sunday':
//                 console.log('dating') 
//           break;
//     default:
//         break;
// }
// if (day === 'monday') {
//     console.log('plane course structure')
//     console.log('Go to coding meetup')
// }else if (day === 'tuesday') {
//     console.log('work at company 1') 
// }else if (day === 'wednesday') {
//     console.log('work at company 2 ') 
// }else if (day === 'thursday') {
//     console.log('work at company 3') 
// }else if (day === 'friday') {
//     console.log('prepare theory videos')
// }else if (day === 'saturday' ||day === 'sunday' ) {
//     console.log('dating')  
// }

//////////////////////////////

// Statements and Expresssions

// 3+4
// 1990
// true && false && !false
// var str ='';
// if (40>10) {
//      str += '40 bigger';
//      //console.log(str)
// }

//  const me = 'Elyar'
//  console.log(`i'm  ${2040 - 1985} years old ${me}`);

// The Conditional (Ternary) Operator

const age = 23 ;

// age >= 40 ? console.log('i like to drink thee') : console.log('i like to drink water')

// let drink2;
// if (age >= 25) {
//     drink2 = 'thee';

// }else{
//     drink2 = 'water'
// }
// console.log(drink2)