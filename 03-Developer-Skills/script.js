// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/////////////////////////////////////

//Using Google , StackOverflow an MDN

// PROBLEM ! :

// We work for a company  building a smart home thermometer. 
//Our most recent task is this.
// " Given an array of temperaturs of one day . 
//calculate the temperature amplitude .keep in 
// mind that sometimes there might be a sensor error. "

const temperatures = [3,-2,-6,-1,'error',9,10,13,15,17,14,9,5];

// 1) Understanding be problem 

// - What is temp amplitude ? Answer difference between highest and lowest temp

// - How to compute max and min temperatures?

// - What's a sensor eeror? And what do do ?

// 2) Breaking up into sub-problems

// - How to ignore errors?

// - Find max value in temp array

// - Find min value in temp array

// - Subtrack min from max (amplitude) and return it
const calcTemAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];
    for (let index = 0; index < temps.length; index++) {
        const curTemp = temps[index];
        //console.log( curTemp,'a1',max,min);
        //console.log(typeof curTemp,'t1',max,min);
        if(typeof curTemp !== 'number') continue
        //console.log(typeof curTemp,'t2',max,min);
        if(typeof curTemp > max)max =curTemp;
        if(typeof curTemp < min)min =curTemp;
        //console.log(typeof curTemp,'t3',max,min);
    }
    //console.log(max,min);
    return max - min
};
// 3  3 

// 0
const amplitude = calcTemAmplitude(temperatures);
console.table(amplitude) 
console.log(amplitude)
// PROBLEM 2:
// const calcTemAmplitudeNew = function(t1,t2){
//     const temps = t1.concat(t2)
//     console.log(temps);
//     let max = temps[0];
//     let min = temps[0];
//     for (let index = 0; index < temps.length; index++) {
//         const curTemp  = temps[index];
//         if(typeof curTemp !== 'number') continue
//         //console.log(typeof curTemp,'t2',max,min);
//         if( curTemp > max)max =curTemp;
//         if( curTemp < min)min =curTemp;
        
//     }
    
//     console.log(max,min);
//     return max - min
// }

// const amplitudeNew = calcTemAmplitudeNew([3,5,1],[9,0,5]);

// console.log(amplitudeNew)






// let newArray =[];
//  for (let i = 0 ; i < temperatures.length; i++) {
//   if(isNaN(temperatures[i])==true){
//     delete temperatures[i];
//   }
// else{
//   newArray.push(temperatures[i]);
// }
//  }

//  function getMinMaxForLoop(newArray){
//     let maximum = newArray[0];
//     let minimum = newArray[0];
//     for (let i = 0 ; i < newArray.length; i++) {
//       if (maximum < newArray[i]) {
//         maximum = newArray[i];
//       } if(minimum > newArray[i]) {
//         minimum = newArray[i];
//       }
      
//     }
//    let result =  (maximum, minimum); 
//    console.log(maximum,'max')
//    console.log(minimum,'min')
//     return result;
//   };
//   console.log(getMinMaxForLoop(newArray))

/////////////////////////////

// Debugging with the Console and Breakpiont

// A: IDENTIFY   B: FIND  C : FIX 

const measureKamil = function(){
  const measurement = {
    type:'temp',
    unit:'celsius',
    //value: prompt("Degrees celsius") // Find
     value :10
  } 
  console.table(measurement) 
  const kamil = measurement.value + 280;
  return kamil
 
};
//IDENTIFY
console.log(measureKamil());
console.log('changed') // Ctrl + s
//  1 ) Junior 2)  Senior 3) Lead 4) Leader 5) manager

// UI  UX  FRONT-END BACK-END 