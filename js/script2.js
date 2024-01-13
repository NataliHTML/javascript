"use strict";
// Урок 9
// if(1) {
// 	console.log('Ok!');
// } else{
// console.log('Error');
// }


// const num = 50;

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100){
// 	console.log('Много');
// }else
// {console.log('Ok!')}

// (num ===50) ? console.log('Ok!') : console.log('Error');
// const num = '50';

// switch(num){
// 	case '49':
// 		console.log('Не верно');
// 		break;
// 	case '100':
// 		console.log('Не верно');
// 		break;
// 	case '50':
// 		console.log('В точку!');
// 		break;
// 	default:
// 		console.log('Не в этот раз');
// 		break;
// }

// Урок 10

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries){ 
// 	console.log("Я сыт!");
// }

// console.log((hamburger && fries));


// const hamburger = 3;
// const fries = 4;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sddsddd');

// if(hamburger === 3 && cola === 1 && fries){ 
// 	console.log("Все сыты!");
// } else {
// 	console.log("Мы уходим");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2  || fries === 3 && nuggets) { 
// 	console.log("Все довольны!");
// } else {
// 	console.log("Мы уходим");

// 	console.log(hamburger || cola || fries);

// 	let johnReport, alexReport, samReport, mariaReport = 'done';

// 	console.log(johnReport || alexReport || samReport || mariaReport);

// Урок 11

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// Урок 12

// let num = 50;

// while (num <= 55){
//    console.log(num);
//    num++;
// }

// do {
//    console.log(num);
//    num++;
// }
// while(num < 55)

// for (let i = 1; i < 8; i++){
//    console.log(num);
//    num++;
// }
// for (let i = 1; i < 10; i++){
//    if (i === 6){
//       // break;
//       continue;
//    }
   
//    console.log(i);
// }

// Урок 13

for (let i=0; i< 3; i++){
   console.log(i);
   for (let j=0; j< 3; j++){
      console.log(j);
   }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i<length; i++){
   for (let j = 0; j < i; j++){
      result += "*"
   }

   result += '\n';
}

console.log(result);

// first: for (let i=0; i< 3; i++){
//    console.log(`First level: ${i}`);
//    for (let j=0; j< 3; j++){
//       console.log(`Second level: ${j}`);
//       for (let k=0; k < 3; k++){
//          if (k === 2) continue first;
//          console.log(`Third level: ${k}`);
//       }
//    }
// }

first: for (let i=0; i< 3; i++){
   console.log(`First level: ${i}`);
   for (let j=0; j< 3; j++){
      console.log(`Second level: ${j}`);
      for (let k=0; k < 3; k++){
         if (k === 2) break first;
         console.log(`Third level: ${k}`);
      }
   }
}