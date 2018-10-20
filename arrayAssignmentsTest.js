const assert = require("assert");
const library = require("./arrayAssignmentsLibrary.js");

let {rotateSource,extractOddNumbers,extractEvenNumbers,addNumbers,alternateNumbers,reversedNumbers,reversedFibonacciSeries,findGreatestNumber,findSmallestNumber,calculateAverage,mapLength,countEvenNumbers,countOddNumbers,countNumbersAbove,countNumbersBelow,findIndex,isAscendingOrder,isDescendingOrder,extractDigits,extractUniqueElements,unionOfElements,intersectionOfElements,findDifference,checkSubset,generateZipArray,partitionOfArray} = library; 

//.....................finding oddNumbers.................//
assert.deepEqual(extractOddNumbers([]),[]);          //emptyArray
assert.deepEqual(extractOddNumbers([3]),[3]);          //onePositiveNumber
assert.deepEqual(extractOddNumbers([-3]),[-3]);          //oneNegativeNumber
assert.deepEqual(extractOddNumbers([5,2]),[5]);          //twoNumbers
assert.deepEqual(extractOddNumbers([5,2,6,7]),[5,7]);          //moreThenTwo

//.............findingEvenNumbers.............//
assert.deepEqual(extractEvenNumbers([]),[]);          
assert.deepEqual(extractEvenNumbers([8]),[8]);          
assert.deepEqual(extractEvenNumbers([-8]),[-8]);          
assert.deepEqual(extractEvenNumbers([3,4]),[4]);          
assert.deepEqual(extractEvenNumbers([3,4,7,8,5]),[4,8]);          

//..............sumOfNumbers.................//
assert.deepEqual(addNumbers([]),0)
assert.deepEqual(addNumbers([6]),6)
assert.deepEqual(addNumbers([5]),5)
assert.deepEqual(addNumbers([5,9]),14)
assert.deepEqual(addNumbers([5,9,7,4,7]),32)

//...............extractAlternateElements...................//
assert.deepEqual(alternateNumbers([]),[]);
assert.deepEqual(alternateNumbers([1]),[1]);
assert.deepEqual(alternateNumbers([-7]),[-7]);
assert.deepEqual(alternateNumbers([5,7]),[5]);
assert.deepEqual(alternateNumbers([5,7,8,3,7,9]),[5,8,7]);

//..........generate reverse numbers.....................//
assert.deepEqual(reversedNumbers([]),[]);         
assert.deepEqual(reversedNumbers([3]),[3]);       
assert.deepEqual(reversedNumbers([-3]),[-3]);     
assert.deepEqual(reversedNumbers([5,2]),[2,5]);          
assert.deepEqual(reversedNumbers([9,5,2,6,7]),[7,6,2,5,9]);


//.................reverse fibonacci series............//
assert.deepEqual(reversedFibonacciSeries(0),[]);         
assert.deepEqual(reversedFibonacciSeries(1),[0]);       
assert.deepEqual(reversedFibonacciSeries(3),[1,1,0]);         
assert.deepEqual(reversedFibonacciSeries(5),[3,2,1,1,0]);    
assert.deepEqual(reversedFibonacciSeries(7),[8,5,3,2,1,1,0]);    

//........findGreatest number in a list...........//
assert.deepEqual(findGreatestNumber([5]),5);
assert.deepEqual(findGreatestNumber([7,3]),7);
assert.deepEqual(findGreatestNumber([9,4,5,2]),9);
assert.deepEqual(findGreatestNumber([54,-43,7,-54,66]),66);
assert.deepEqual(findGreatestNumber([9,4,76,47,1,83]),83);

//..........find least number in a list..........//
assert.deepEqual(findSmallestNumber([5]),5);
assert.deepEqual(findSmallestNumber([7,3]),3);
assert.deepEqual(findSmallestNumber([9,4,5,2]),2);
assert.deepEqual(findSmallestNumber([54,-43,7,-54,66]),-54);
assert.deepEqual(findSmallestNumber([9,4,76,47,1,83]),1);

//.............calculate average of numbers.............//
assert.deepEqual(calculateAverage([3]),3);
assert.deepEqual(calculateAverage([7,3]),5);
assert.deepEqual(calculateAverage([9,4,5,6]),6);
assert.deepEqual(calculateAverage([54,-43,7,-54,66]),6);
assert.deepEqual(calculateAverage([9,4,76,47,1,83]),36.666666666666664);

//...............mapping length...............//
assert.deepEqual(mapLength(["a"]),[1])
assert.deepEqual(mapLength(["prasad"]),[6])
assert.deepEqual(mapLength(["sachin","rohit"]),[6,5])
assert.deepEqual(mapLength(["dhoni","kohli","bumhra"]),[5,5,6])
assert.deepEqual(mapLength(["michel","anna","bamboo","javascript"]),[6,4,6,10])

//...............countEvenNumbers..........//
assert.deepEqual(countEvenNumbers([]),0)
assert.deepEqual(countEvenNumbers([1]),0)
assert.deepEqual(countEvenNumbers([2]),1)
assert.deepEqual(countEvenNumbers([4,3,2]),2)
assert.deepEqual(countEvenNumbers([3,5,4,6,7,8]),3)

//...............countOddNumbers..........//
assert.deepEqual(countOddNumbers([]),0)
assert.deepEqual(countOddNumbers([1]),1)
assert.deepEqual(countOddNumbers([2]),0)
assert.deepEqual(countOddNumbers([4,3,2]),1)
assert.deepEqual(countOddNumbers([4,3,2,7,4,2,5]),3)


//..............countNumbersAboveAThreshold.............//
assert.deepEqual(countNumbersAbove([6,4,5],4),2)
assert.deepEqual(countNumbersAbove([4,2,9,8,77,1],5),3)
assert.deepEqual(countNumbersAbove([9,5,-6,7,-8],2),3)
assert.deepEqual(countNumbersAbove([6,0,-77,44],0),2)

//..............countNumbersBelowAThreshold.............//
assert.deepEqual(countNumbersBelow([6,4,5],5),1)
assert.deepEqual(countNumbersBelow([4,2,9,8,77,1],8),3)
assert.deepEqual(countNumbersBelow([9,5,-6,7,-8],2),2)
assert.deepEqual(countNumbersBelow([-5,0,-77,44],0),2)

//.............findIndexOfANumber...............//
assert.deepEqual(findIndex([6,4,5],3),-1)
assert.deepEqual(findIndex([6,4,5],5),2)
assert.deepEqual(findIndex([4,2,9,8,77,1],8),3)
assert.deepEqual(findIndex([9,5,-6,7,-8],-8),4)
assert.deepEqual(findIndex([9,5,-6,7,-8],9),0)

//.............checkingAscendingOrder..........//
assert.deepEqual(isAscendingOrder([0]),true)
assert.deepEqual(isAscendingOrder([1,2,3]),true)
assert.deepEqual(isAscendingOrder([-1,-2,-3]),false)
assert.deepEqual(isAscendingOrder([7,12,30,45,222,-33333]),false)

//.............checkingDescendingOrder..........//
assert.deepEqual(isDescendingOrder([0]),true)
assert.deepEqual(isDescendingOrder([1,2,3]),false)
assert.deepEqual(isDescendingOrder([-1,-2,-3]),true)
assert.deepEqual(isDescendingOrder([2,3,1,4,87]),false)

//.............extractingDigitsFromANumber............//
assert.deepEqual(extractDigits(10),[1,0])
assert.deepEqual(extractDigits(748),[7,4,8])
assert.deepEqual(extractDigits(57932),[5,7,9,3,2])
assert.deepEqual(extractDigits(749325992),[7,4,9,3,2,5,9,9,2])

//...........uniqueElements.............//
assert.deepEqual(extractUniqueElements([1]),[1])
assert.deepEqual(extractUniqueElements([7,4,4]),[7,4])
assert.deepEqual(extractUniqueElements
  ([5,7,7,9,3,3]),[5,7,9,3])
assert.deepEqual(extractUniqueElements([7,4,4,9,3,2,9]),[7,4,9,3,2])

//...........unionOfElements.............//
assert.deepEqual(unionOfElements([1],[]),[1])
assert.deepEqual(unionOfElements([7],[4]),[7,4])
assert.deepEqual(unionOfElements([-1,7],[4,7]),[-1,7,4])
assert.deepEqual(unionOfElements([-1,7,-2],[-2,4,7]),[-1,7,-2,4])
assert.deepEqual(unionOfElements
  ([5,7,7,9],[1,3,3]),[5,7,9,1,3])

//..........intersectionOfElements.............//
assert.deepEqual(intersectionOfElements([1],[2]),[])
assert.deepEqual(intersectionOfElements([3],[3]),[3])
assert.deepEqual(intersectionOfElements([1,4],[2,4]),[4])
assert.deepEqual(intersectionOfElements([7,4,23,5],[4,5,7,8,9]),[4,5,7])
assert.deepEqual(intersectionOfElements([1,4,2,5,6],[2,4,1,6,9]),[2,4,1,6])

//...............difference...............//
assert.deepEqual(findDifference([1,2],[1]),[2])
assert.deepEqual(findDifference([1,2,4],[2,3,5]),[1,4])
assert.deepEqual(findDifference([3,4,5,1,6],[5,3,2,6,5]),[4,1])
assert.deepEqual(findDifference([-1,0,3,2,4],[1,0,5,3]),[-1,2,4])
assert.deepEqual(findDifference([9,4,2,2,5],[7,3,4,32,4]),[9,2,2,5])

//...............isSubset..............//
assert.deepEqual(checkSubset([1,2],[1]),true)
assert.deepEqual(checkSubset([1,2],[1,3]),false)
assert.deepEqual(checkSubset([-1,2,-2],[-1,-2]),true)
assert.deepEqual(checkSubset([4,7,3,1,9],[8,6,9,3]),false)
assert.deepEqual(checkSubset([5,3,6,7,8,2],[2,8,7,3]),true)

//..........zip..............//
assert.deepEqual(generateZipArray([1,2],[3,4]),[[1,3],[2,4]])
assert.deepEqual(generateZipArray([1,2],[1]),[[1,1]])
assert.deepEqual(generateZipArray([3,5,2],[2,1,4,6]),[[3,2],[5,1],[2,4]])
assert.deepEqual(generateZipArray([-3,4,6,3],[4,5,2,6,8]),[[-3,4],[4,5],[6,2],[3,6]])
assert.deepEqual(generateZipArray([9,4,5,2],[1,3,2,4]),[[9,1],[4,3],[5,2],[2,4]])

//.................rotate...............//
assert.deepEqual(rotateSource([1,2,3,4],1),[2,3,4,1])
assert.deepEqual(rotateSource([1,2,8],2),[8,1,2])
assert.deepEqual(rotateSource([-2,4,-5,-66],1),[4,-5,-66,-2])
assert.deepEqual(rotateSource([5,3,6,34,5],3),[34,5,5,3,6])

//...............partitionOfArray................//
assert.deepEqual(partitionOfArray([1,2,3,4],2),[[1,2],[3,4]])
assert.deepEqual(partitionOfArray([3,1,3,4,5,6],7),[[3,1,3,4,5,6],[]])
assert.deepEqual(partitionOfArray([1,2,7,4,9,10,5],5),[[1,2,4,5],[7,9,10]])
assert.deepEqual(partitionOfArray([-1,-5,-3,-6,-3],-2),[[-5,-3,-6,-3],[-1]])


console.log("...........test passed...........");

