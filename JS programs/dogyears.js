//PROBLEM STATEMENT:converting human years to Dog Years//
let myAge=25;
// my age is 19//
let earlyYears=2;
// first two dog years=10.5//
earlyYears *=10.5;

let laterYears= myAge-2;
//since we already accounted for the first two years, taking myAge variable and substracting 2 from it//
laterYears *=4;
//calculating number of dog years accounted for by my later Years//
console.log(earlyYears+' '+laterYears);
myAgeInDogYears= earlyYears+laterYears;
//my age in dog years is the summation of his laterYears and laterYears//
var myName='AHARNA'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)