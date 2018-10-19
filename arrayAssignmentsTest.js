  const assert = require("assert");
const lib = require("./arrayAssignments.js");

let {extractOddNumbers} = require('./arrayAssignments.js');


//..finding oddNumbers,evenNumbers,addNumbers,alternateElement........//
assert.deepEqual(extractOddNumbers([]),[]);          //emptyArray
assert.deepEqual(lib.extractEvenNumbers([]),[]);          
assert.deepEqual(lib.addNumbers([]),0)
assert.deepEqual(lib.alternateElements([]),[]);

assert.deepEqual(extractOddNumbers([3]),[3]);          //onePositiveNumber
assert.deepEqual(lib.extractEvenNumbers([8]),[8]);          
assert.deepEqual(lib.addNumbers([6]),6)
assert.deepEqual(lib.alternateElements([1]),[1]);

assert.deepEqual(extractOddNumbers([-3]),[-3]);          //oneNegativeNumber
assert.deepEqual(lib.extractEvenNumbers([-8]),[-8]);          
assert.deepEqual(lib.addNumbers([5]),5)
assert.deepEqual(lib.alternateElements([-7]),[-7]);

assert.deepEqual(extractOddNumbers([5,2]),[5]);          //twoNumbers
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


//..............countNumbersAboveAThreshold.............//
assert.deepEqual(lib.countNumbersAbove([6,4,5],4),2)
assert.deepEqual(lib.countNumbersAbove([4,2,9,8,77,1],5),3)
assert.deepEqual(lib.countNumbersAbove([9,5,-6,7,-8],2),3)
assert.deepEqual(lib.countNumbersAbove([6,0,-77,44],0),2)

//..............countNumbersBelowAThreshold.............//
assert.deepEqual(lib.countNumbersBelow([6,4,5],5),1)
assert.deepEqual(lib.countNumbersBelow([4,2,9,8,77,1],8),3)
assert.deepEqual(lib.countNumbersBelow([9,5,-6,7,-8],2),2)
assert.deepEqual(lib.countNumbersBelow([-5,0,-77,44],0),2)

//.............findIndexOfANumber...............//
assert.deepEqual(lib.findIndex([6,4,5],5),2)
assert.deepEqual(lib.findIndex([4,2,9,8,77,1],8),3)
assert.deepEqual(lib.findIndex([9,5,-6,7,-8],-8),4)
assert.deepEqual(lib.findIndex([9,5,-6,7,-8],9),0)

//.............checkingAscendingOrder..........//
assert.deepEqual(lib.isAscendingOrder([0]),true)
assert.deepEqual(lib.isAscendingOrder([1,2,3]),true)
assert.deepEqual(lib.isAscendingOrder([-1,-2,-3]),false)
assert.deepEqual(lib.isAscendingOrder([7,12,30,45,222,-33333]),false)

//.............checkingDescendingOrder..........//
assert.deepEqual(lib.isDescendingOrder([0]),true)
assert.deepEqual(lib.isDescendingOrder([1,2,3]),false)
assert.deepEqual(lib.isDescendingOrder([-1,-2,-3]),true)
assert.deepEqual(lib.isDescendingOrder([2,3,1,4,87]),false)

//.............extractingDigitsFromANumber............//
assert.deepEqual(lib.extractDigits(10),[1,0])
assert.deepEqual(lib.extractDigits(748),[7,4,8])
assert.deepEqual(lib.extractDigits(57932),[5,7,9,3,2])
assert.deepEqual(lib.extractDigits(749325992),[7,4,9,3,2,5,9,9,2])

//...........uniqueElements.............//
assert.deepEqual(lib.generateUniqueElements([1]),[1])
assert.deepEqual(lib.generateUniqueElements([7,4,4]),[7,4])
assert.deepEqual(lib.generateUniqueElements
  ([5,7,7,9,3,3]),[5,7,9,3])
assert.deepEqual(lib.generateUniqueElements([7,4,4,9,3,2,9]),[7,4,9,3,2])


//...........unionElements.............//
assert.deepEqual(lib.generateUnionElements([],[]),[undefined])
assert.deepEqual(lib.generateUnionElements([7],[4]),[7,4])
assert.deepEqual(lib.generateUnionElements([-1,7],[4,7]),[-1,7,4])
assert.deepEqual(lib.generateUnionElements([-1,7,-2],[-2,4,7]),[-1,7,-2,4])
assert.deepEqual(lib.generateUnionElements
  ([5,7,7,9],[1,3,3]),[5,7,9,1,3])

//..........intersectionOfElements.............//
assert.deepEqual(lib.generateIntersectionOfElements([1],[2]),[])
assert.deepEqual(lib.generateIntersectionOfElements([3],[3]),[3])
assert.deepEqual(lib.generateIntersectionOfElements([1,4],[2,4]),[4])
assert.deepEqual(lib.generateIntersectionOfElements([7,4,23,5,7],[4,5,7,8,9]),[7,4,5])
assert.deepEqual(lib.generateIntersectionOfElements([1,4,2,5,6],[2,4,1,6,9]),[1,4,2,6])

//...............difference...............//
assert.deepEqual(lib.getDifference([1,2],[1]),[2])
assert.deepEqual(lib.getDifference([1,2,4],[2,3,5]),[1,4])
assert.deepEqual(lib.getDifference([3,4,5,1,6],[5,3,2,6,5]),[4,1])
assert.deepEqual(lib.getDifference([-1,0,3,2,4],[1,0,5,3]),[-1,2,4])
assert.deepEqual(lib.getDifference([9,4,2,2,5],[7,3,4,32,4]),[9,2,2,5])

//...............isSubset..............//
assert.deepEqual(lib.checkSubset([1,2],[1]),true)
assert.deepEqual(lib.checkSubset([1,2],[1,3]),false)
assert.deepEqual(lib.checkSubset([-1,2,-2],[-1,-2]),true)
assert.deepEqual(lib.checkSubset([4,7,3,1,9],[8,6,9,3]),false)
assert.deepEqual(lib.checkSubset([5,3,6,7,8,2],[2,8,7,3]),true)

//..........zip..............//
assert.deepEqual(lib.generateZipArray([1,2],[3,4]),[[1,3],[2,4]])
assert.deepEqual(lib.generateZipArray([1,2],[1]),[[1,1]])
assert.deepEqual(lib.generateZipArray([3,5,2],[2,1,4,6]),[[3,2],[5,1],[2,4]])
assert.deepEqual(lib.generateZipArray([-3,4,6,3],[4,5,2,6,8]),[[-3,4],[4,5],[6,2],[3,6]])
assert.deepEqual(lib.generateZipArray([9,4,5,2],[1,3,2,4]),[[9,1],[4,3],[5,2],[2,4]])

//.................rotate...............//
assert.deepEqual(lib.rotateElements([1,2,3,4],1),[2,3,4,1])
assert.deepEqual(lib.rotateElements([1,2,8],2),[8,1,2])
assert.deepEqual(lib.rotateElements([-2,4,-5,-66],1),[4,-5,-66,-2])
assert.deepEqual(lib.rotateElements([5,3,6,34,5],3),[34,5,5,3,6])




console.log("...........test passed...........");

