const assert = require("assert");
const lib = require("./assignmentOnArray.js");

//..finding oddNumbers,evenNumbers,addNumbers,alternateElement........//
assert.deepEqual(lib.extractOddNumbers([]),[]);          //emptyArray
assert.deepEqual(lib.extractEvenNumbers([]),[]);          
assert.deepEqual(lib.addNumbers([]),0)
assert.deepEqual(lib.alternateElements([]),[]);

assert.deepEqual(lib.extractOddNumbers([3]),[3]);          //onePositiveNumber
assert.deepEqual(lib.extractEvenNumbers([8]),[8]);          
assert.deepEqual(lib.addNumbers([6]),6)
assert.deepEqual(lib.alternateElements([1]),[1]);

assert.deepEqual(lib.extractOddNumbers([-3]),[-3]);          //oneNegativeNumber
assert.deepEqual(lib.extractEvenNumbers([-8]),[-8]);          
assert.deepEqual(lib.addNumbers([5]),5)
assert.deepEqual(lib.alternateElements([-7]),[-7]);

assert.deepEqual(lib.extractOddNumbers([5,2]),[5]);          //twoNumbers
assert.deepEqual(lib.extractEvenNumbers([3,4]),[4]);          
assert.deepEqual(lib.addNumbers([5,9]),14)
assert.deepEqual(lib.alternateElements([5,7]),[5]);

assert.deepEqual(lib.extractOddNumbers([5,2,6,7]),[5,7]);          //moreThenTwo
assert.deepEqual(lib.extractEvenNumbers([3,4,7,8,5]),[4,8]);          
assert.deepEqual(lib.addNumbers([5,9,7,4,7]),32)
assert.deepEqual(lib.alternateElements([5,7,8,3,7,9]),[5,8,7]);

//..........generate reverse numbers , reverse fibonacci series............//
assert.deepEqual(lib.reversedNumbers([]),[]);          //emptyArray
assert.deepEqual(lib.reversedNumbers([3]),[3]);          //onePositiveNumber
assert.deepEqual(lib.reversedNumbers([-3]),[-3]);          //oneNegativeNumber
assert.deepEqual(lib.reversedNumbers([5,2]),[2,5]);          //twoNumbers
assert.deepEqual(lib.reversedNumbers([9,5,2,6,7]),[7,6,2,5,9]);          //moreThenTwo

assert.deepEqual(lib.reversedFibonacciSeries(0),[]);          //emptyArray
assert.deepEqual(lib.reversedFibonacciSeries(1),[0]);          //onePositiveNumber
assert.deepEqual(lib.reversedFibonacciSeries(3),[1,1,0]);         
assert.deepEqual(lib.reversedFibonacciSeries(5),[3,2,1,1,0]);    
 assert.deepEqual(lib.reversedFibonacciSeries(7),[8,5,3,2,1,1,0]);    

//........findGreatest number in a list...........//
assert.deepEqual(lib.findGreatestNumber([5]),5);
assert.deepEqual(lib.findGreatestNumber([7,3]),7);
assert.deepEqual(lib.findGreatestNumber([9,4,5,2]),9);
assert.deepEqual(lib.findGreatestNumber([54,-43,7,-54,66]),66);
assert.deepEqual(lib.findGreatestNumber([9,4,76,47,1,83]),83);

//..........find least number in a list..........//
assert.deepEqual(lib.findLeastNumber([5]),5);
assert.deepEqual(lib.findLeastNumber([7,3]),3);
assert.deepEqual(lib.findLeastNumber([9,4,5,2]),2);
assert.deepEqual(lib.findLeastNumber([54,-43,7,-54,66]),-54);
assert.deepEqual(lib.findLeastNumber([9,4,76,47,1,83]),1);

//.............calculate average of numbers.............//
assert.deepEqual(lib.calculateAverage([3]),3);
assert.deepEqual(lib.calculateAverage([7,3]),5);
assert.deepEqual(lib.calculateAverage([9,4,5,6]),6);
assert.deepEqual(lib.calculateAverage([54,-43,7,-54,66]),6);
assert.deepEqual(lib.calculateAverage([9,4,76,47,1,83]),36.666666666666664);

//...............mapping length...............//
assert.deepEqual(lib.mapLength(["a"]),[1])
assert.deepEqual(lib.mapLength(["prasad"]),[6])
assert.deepEqual(lib.mapLength(["sachin","rohit"]),[6,5])
assert.deepEqual(lib.mapLength(["dhoni","kohli","bumhra"]),[5,5,6])
assert.deepEqual(lib.mapLength(["michel","anna","bamboo","javascript"]),[6,4,6,10])

//...............countEvenNumbers..........//
assert.deepEqual(lib.countEvenNumbers([]),0)
assert.deepEqual(lib.countEvenNumbers([1]),0)
assert.deepEqual(lib.countEvenNumbers([2]),1)
assert.deepEqual(lib.countEvenNumbers([4,3,2]),2)
assert.deepEqual(lib.countEvenNumbers([3,5,4,6,7,8]),3)

//...............countOddNumbers..........//
assert.deepEqual(lib.countOddNumbers([]),0)
assert.deepEqual(lib.countOddNumbers([1]),1)
assert.deepEqual(lib.countOddNumbers([2]),0)
assert.deepEqual(lib.countOddNumbers([4,3,2]),1)
assert.deepEqual(lib.countOddNumbers([4,3,2,7,4,2,5]),3)

console.log("...........test passed...........");
