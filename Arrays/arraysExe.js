"use strict"
// This is an exercise meant for arrays and making you better at them
// The fill() method returns an array by filling all elements with a specified value.

// Write a function that creates a new array with given values

/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
const fill = (arraySize, value) => new Array(arraySize).fill(value);
   
   const data = 3;
   const valueToFill = 'j';
   let newArray = fill(data, valueToFill)
   console.log(newArray) // ['a', 'a', 'a']

//Reverse. Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable.

/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const arrays = (array) => {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i -= 1 ){
    reversed.push(array[i])
    }
    return reversed;
}
const data1 = [1, 2, 3, 4];
let reversedNum = arrays(data1);
console.log(reversedNum);

// Compact. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/
const compact = (array) => array.filter((el)=>el)

const data2 = [0, 1, false, 2, undefined, '', 3, null];
let compactedData =  compact(data2);  
console.log(compactedData) // [1, 2, 3]

const compact2 = (array) => {
    let arrFinalCompact = [];
    for (let i = 0; i < array.length; i++)
    if (array[i]){
    arrFinalCompact.push(array[i]);
    }
    // console.log(arrFinalCompact)
    return arrFinalCompact;    
}
const data3 = [0, 1, false, 2, undefined, '', 3, null];
let compactedData1 =  compact2(data3);  
console.log(compactedData1) // [1, 2, 3]
