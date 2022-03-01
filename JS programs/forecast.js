//PROBLEMSTATEMENT: conversion of temperature to various units//
const kelvin= 0;
//forecast today=293;//
const celsius = kelvin-273;
//difference between celsius to kelvin is 273//
let fahrenheit = celsius*(9/5)+32;
//change of celsius to fahrenheit//
fahrenheit =Math.floor(fahrenheit);
//rouding decimal value //
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let Newton= celsius*(33/100);
Newton= Math.floor(Newton);
console.log(`Newton Temputare ${Newton}`);