// ASSESSMENT 3: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () =>{
    it("takes in a number and returns an array that length containing the numbers of the Fibonacci sequence", () => {
       expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]) 
    })
})

// FAIL  ./code-challenges.test.js
// fibonacci
//   ✕ takes in a number and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

// ● fibonacci › takes in a number and returns an array that length containing the numbers of the Fibonacci sequence

//   ReferenceError: fibonacci is not defined



// b) Create the function that makes the test pass.

// Psuedo Code:
// Create a function with the name fibonacci
// Input: the values of fibLength1 and fibLength2
    //inside the function I want to take the sum of the of two numbers then add the sum to the previous number i.e 1 + 1 = 2, 2 + 1 = 3, 3 + 2...
// Ouput: for fibLength1 [1, 1, 2, 3, 5, 8] for fibLength 2 [1, 1, 2, 3, 5, 8]

const fibonacci = (number) => {
    let newArr = [0, 1];
    for (let i = 2; i <= number; i++){
      newArr.push(newArr[i - 2] + newArr[i - 1])
    }
    return newArr.slice(1)
  }

//   PASS  ./code-challenges.test.js
//   fibonacci
//     ✓ takes in a number and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.424 s, estimated 1 s
// Ran all test suites.



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("oddOnly", () =>{
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () =>{
        expect(oddOnly(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddOnly(fullArr2)).toEqual([-823, 7, 23])
    })
})

// FAIL  ./code-challenges.test.js
//   fibonacci
//     ✓ takes in a number and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//   oddOnly
//     ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)

//   ● oddOnly › takes in an array and returns a new array of only odd numbers sorted from least to greatest

//     ReferenceError: oddOnly is not defined

// b) Create the function that makes the test pass.

// Psuedo Code:
// Create a function named oddOnly
// Input: Take in the array from the variables fullArr1 and fullArr2
    // Take in the arrays
    // Determine if they are numbers or not 
    // Determine if the numbers are odd or not
    // Then output only odd numbers in least to greatest
// Output: fullArr1 = [-9, 7, 9, 199] fullArr2 = [-823, 7, 23]

const oddOnly = (array) => {
    let newArr =[]
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0 && typeof array[i] === 'number')
        newArr.push(array[i])
    }
    return newArr.sort((a,b) => a-b)
}

// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ takes in a number and returns an array that length containing the numbers of the Fibonacci sequence (3 ms)
// oddOnly
//   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.486 s, estimated 1 s
// Ran all test suites.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumAll", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        expect(sumAll(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumAll(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumAll(numbersToAdd3)).toEqual([])
    })
})

// FAIL  ./code-challenges.test.js
//   fibonacci
//     ✓ takes in a number and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//   oddOnly
//     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest
//   sumAll
//     ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array

//   ● sumAll › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array

//     ReferenceError: sumAll is not defined


// b) Create the function that makes the test pass.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// Psuedo Code:
// Create a function named sumAll
// Input: take in an arrray and add the numbers up in ascending order from 0 index to the last index
// Output:
// numbersToAdd1: [2, 6, 51, 60]
// numbersToAdd2: [0, 7, -8, 12]
// numbersToAdd3: []


const sumAll = (array) => {
  for(i = 1; i < array.length; i++){
    array[i] = array[i] + array[i - 1]
  }
  return array
}

// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ takes in a number and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
// oddOnly
//   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest
// sumAll
//   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.409 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.14s.
