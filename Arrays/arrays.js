"use strict"
//ARRAYS
// var days = [1, 2, 3, 4, 5, 6, 7];
// let numberOfIndexes = days.length - 1;
// console.log(numberOfIndexes);
// console.log(days, days.length)
// console.log(days.indexOf(7));
var days = [];
days[0] = ["Monday"];
days[1] = ["Tuesday"];
days[2] = ["Wednesday"];
days[3] = ["Thursday"];
days[4] = ["Friday"];
days[5] = [];
days[6] = ["Sunday"];



//Iterate over the elements in the days item using a for loop
for (let i = 0; i < days.length; i++){
    console.log(days[i]);
}

//Iterate ove the elements using the forEach method (ES5)
days.forEach(function(days){
    console.log(days)
});

//Iterate over the array elements using for...of statement (ES6)
// Advantages
    // 1. Iterates over a large variety of objects
    // 2. Can use normal flow control statements i.e (break/contiue) 
let colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Orange"]
for (let color of colors){
    console.log(color)
}

//Array Methods
// Concat(): joins two arrays and returns a new array
var arrNum = [1,2,3]
var arrNumNew = arrNum.concat(4,5,6)
console.log(arrNumNew);

//Join(): joins all the elements of an array into a string
var colours = [ "blue", "red", "green", "yellow"]
var colorString = colours.join("~");
console.log(colorString);

// pop(): removes the last element in an array and returns that element
var lastElement = days.pop();
console.log(lastElement);

// push(); adds one or more elements at the end of an array and return the resulting length 0f the array
var newSunday = days.push("Sunday");
console.log(newSunday)

//shift(): removes the first element of an array and return that element
var weekLess = days.shift();
console.log(weekLess)

// Unshift(); adds one or more elements at the beginning of an array and returns the new length
var weekFull = days.unshift("Monday");
console.log(weekFull, days[0])

// Revers(); reverses the element of an array returning first to last and vice versa
var diffDays = days.reverse();
console.log(diffDays); 

// Sort(); sorts the element of an array
var myArr = [3, 1, 4, 2, 5, 7, 9, 10, 8, 6] 
myArr.sort(function(a,b){
    return b - a;
});
console.log(myArr);

  // filer(); this function iterates through the entire list and returns an array of all elements that pass the condition. It should return a truth value
  var itemsToBuy = [
    {name: "27 inch Monitor", price:"35000"},
    {name: "Desk", price:"15000"},
    {name: "Mechanical Keyboard", price:"5000"},
    {name: "Mouse", price:"2000"},
    {name: "Chair", price:"12000"},
    {name: "Extension", price:"4500"},
    {name: "Microphone set", price:"5000"},
    {name: "Tab", price:"50000"},
    {name: "Speaker", price:"10000"}
    ]
    var expensiveItems = itemsToBuy.filter(function(item){
        return item.price > 10000; 
    })
    console.log(expensiveItems);
    
// reduce() returns the sum after iterating thro the elements in an object
let initialValue = 0;
let sum = itemsToBuy.reduce((currentPrice, item)=>currentPrice + item.price, initialValue)
console.log(Number.parseInt(sum, 10))