const assert = require("assert")
const library = require("./arrayAssignmentsLibrary.js");

let {extractOddNumbers} = library;

//.....................finding oddNumbers.................//
assert.deepEqual(extractOddNumbers([]),[]);          //emptyArray
assert.deepEqual(extractOddNumbers([0]),[]);          //one zero
assert.deepEqual(extractOddNumbers([3]),[3]);          //oneOddNumber
assert.deepEqual(extractOddNumbers([8]),[]);          //oneEvenNumber
assert.deepEqual(extractOddNumbers([4,7]),[7]);          //oneOdd,oneEven
assert.deepEqual(extractOddNumbers([-5,2]),[-5]);          //oneNegative,onePositive
assert.deepEqual(extractOddNumbers([5,2,6,7]),[5,7]);          //twoEven,twoOdd
assert.deepEqual(extractOddNumbers([8,0,5,3]),[5,3]);          //with zero
assert.deepEqual(extractOddNumbers([4,21,-5,-32]),[21,-5]);          //twoPositive,twoNegative
// only odd
// only negative odd
// one odd, one even
// only even -- missing
// with zeros
// arrays are ordered. knowing that, what test cases are you missing?
// two odd, two even 

let {extractEvenNumbers} = library;
//.............findingEvenNumbers.............//
assert.deepEqual(extractEvenNumbers([]),[]);          
assert.deepEqual(extractEvenNumbers([0]),[0]);         
assert.deepEqual(extractEvenNumbers([8]),[8]);          
assert.deepEqual(extractEvenNumbers([-4]),[-4]);          
assert.deepEqual(extractEvenNumbers([3,4]),[4]);          
assert.deepEqual(extractEvenNumbers([-5,2]),[2]);      
assert.deepEqual(extractEvenNumbers([5,2,6,7]),[2,6]);  
assert.deepEqual(extractEvenNumbers([8,0,5,3]),[8,0]); 
assert.deepEqual(extractEvenNumbers([4,21,-5,-32]),[4,-32]); 

let {addNumbers} = library;
//..............sumOfNumbers.................//
assert.deepEqual(addNumbers([]),0)
assert.deepEqual(addNumbers([0]),0)
assert.deepEqual(addNumbers([1]),1)
assert.deepEqual(addNumbers([6,7]),13)
assert.deepEqual(addNumbers([5,-3]),2)
assert.deepEqual(addNumbers([5,9,-4]),10)
assert.deepEqual(addNumbers([3,7,-8,-9]),-7)
assert.deepEqual(addNumbers([5,19,12,-11]),25)
assert.deepEqual(addNumbers([9.5,8,7]),24.5)
assert.deepEqual(addNumbers([9,8.2,5,-6.2,1]),17)

let {extractAlternateNumbers} = library;
//...............extractAlternateElements...................// 
assert.deepEqual(extractAlternateNumbers([]),[]); // where is the word extract in the function? 
assert.deepEqual(extractAlternateNumbers([1]),[1]);
assert.deepEqual(extractAlternateNumbers([0,1]),[0]);
assert.deepEqual(extractAlternateNumbers([-7,8]),[-7]);
assert.deepEqual(extractAlternateNumbers([5,7]),[5]);
assert.deepEqual(extractAlternateNumbers([9,4,-1]),[9,-1]);
assert.deepEqual(extractAlternateNumbers([3,1,-7,0]),[3,-7]);
assert.deepEqual(extractAlternateNumbers([5,7,8,3,7]),[5,8,7]); // how did you decide the number of elements here?

let {reverseSource} = library;
//..........generate reverse numbers.....................//
assert.deepEqual(reverseSource([]),[]); // reversedNumbers is not a verb
assert.deepEqual(reverseSource([0]),[0]);
assert.deepEqual(reverseSource([8,-3]),[-3,8]);
assert.deepEqual(reverseSource([8,9,-2]),[-2,9,8]);       
assert.deepEqual(reverseSource([0,3,-10]),[-10,3,0]);     
assert.deepEqual(reverseSource([5,2,21,33]),[33,21,2,5]);          
assert.deepEqual(reverseSource([9,-5,-2,6,-7]),[-7,6,-2,-5,9]); // similarly here

let {reverseFibonacciSeries} = library;
//.................reverse fibonacci series............//
assert.deepEqual(reverseFibonacciSeries(0),[]);         
assert.deepEqual(reverseFibonacciSeries(1),[0]);       
assert.deepEqual(reverseFibonacciSeries(2),[1,0]);       
assert.deepEqual(reverseFibonacciSeries(3),[1,1,0]);         
assert.deepEqual(reverseFibonacciSeries(4),[2,1,1,0]);         
assert.deepEqual(reverseFibonacciSeries(5),[3,2,1,1,0]);    
assert.deepEqual(reverseFibonacciSeries(7),[8,5,3,2,1,1,0]);    
assert.deepEqual(reverseFibonacciSeries(9),[21,13,8,5,3,2,1,1,0]);    

let {findGreatestNumber} = library;
//........findGreatest number in a list...........// // what about empty array?
assert.deepEqual(findGreatestNumber([]),0);
assert.deepEqual(findGreatestNumber([5]),5);
assert.deepEqual(findGreatestNumber([7,3]),7);
assert.deepEqual(findGreatestNumber([6,2,1]),6);
assert.deepEqual(findGreatestNumber([9,4,5,-2]),9);
assert.deepEqual(findGreatestNumber([54,-43,7,-54,66]),66);
assert.deepEqual(findGreatestNumber([9,4,76,47,1,83]),83);

let {findSmallestNumber} = library;
//..........find least number in a list..........//
assert.deepEqual(findSmallestNumber([0]),0);
assert.deepEqual(findSmallestNumber([5]),5);
assert.deepEqual(findSmallestNumber([7,3]),3);
assert.deepEqual(findSmallestNumber([4,6,9]),4);
assert.deepEqual(findSmallestNumber([9,4,5,2]),2);
assert.deepEqual(findSmallestNumber([54,-43,7,-54,66]),-54);
assert.deepEqual(findSmallestNumber([9,4,76,47,1,83]),1);

let {calculateAverage} = library;
//.............calculate average of numbers.............//
assert.deepEqual(calculateAverage([0]),0);
assert.deepEqual(calculateAverage([3]),3);
assert.deepEqual(calculateAverage([7,3]),5);
assert.deepEqual(calculateAverage([10,6,2]),6);
assert.deepEqual(calculateAverage([9,4,5,6]),6);
assert.deepEqual(calculateAverage([54,-43,7,-54,66]),6);
assert.deepEqual(calculateAverage([9,4,76,47,1,83]),36.666666666666664);

let {mapLength} = library;
//...............mapping length...............// // empty array
assert.deepEqual(mapLength([]),[])
assert.deepEqual(mapLength(["a"]),[1])
assert.deepEqual(mapLength(["prasad"]),[6])
assert.deepEqual(mapLength(["sachin","rohit"]),[6,5])
assert.deepEqual(mapLength(["glksjgjlh","rfwfg-0"]),[9,7])
assert.deepEqual(mapLength(["dhoni","kohli","bumhra"]),[5,5,6])
assert.deepEqual(mapLength(["michel","anna","bamboo","javascript"]),[6,4,6,10])

let {countEvenNumbers} = library;
//...............countevennumbers..........//
assert.deepEqual(countEvenNumbers([]),0)
assert.deepEqual(countEvenNumbers([1]),0)
assert.deepEqual(countEvenNumbers([2]),1)
assert.deepEqual(countEvenNumbers([2,4,5]),2)
assert.deepEqual(countEvenNumbers([4,3,2,-4]),3)
assert.deepEqual(countEvenNumbers([555,79,482,0]),2)
assert.deepEqual(countEvenNumbers([3,5,4,6,7,8]),3)
assert.deepEqual(countEvenNumbers([3,0,33,-5,4,5,2]),3)

let {countOddNumbers} = library;
//...............countoddnumbers..........//
assert.deepEqual(countOddNumbers([]),0)
assert.deepEqual(countOddNumbers([1]),1)
assert.deepEqual(countOddNumbers([2]),0)
assert.deepEqual(countOddNumbers([2,7]),1)
assert.deepEqual(countOddNumbers([4,3,2]),1)
assert.deepEqual(countOddNumbers([5,7,49,0]),3)
assert.deepEqual(countOddNumbers([4,3,2,7,4,2,5]),3)
assert.deepEqual(countOddNumbers([4,-4,-5,2,98,99]),2)

let {countNumbersAbove} = library;
//..............countnumbersaboveathreshold.............//
assert.deepEqual(countNumbersAbove([],4),0)
assert.deepEqual(countNumbersAbove([6],3),1)
assert.deepEqual(countNumbersAbove([6,4],7),0)
assert.deepEqual(countNumbersAbove([6,5,3],4),2)
assert.deepEqual(countNumbersAbove([4,2,9,8],5),2)
assert.deepEqual(countNumbersAbove([9,5,-6,7,-8],2),3)
assert.deepEqual(countNumbersAbove([6,0,-77,44],0),2)
assert.deepEqual(countNumbersAbove([6,0,-77,44,0,7],0),3)

let {countNumbersBelow} = library;
//..............countnumbersbelowathreshold.............//
assert.deepEqual(countNumbersBelow([6],5),0)
assert.deepEqual(countNumbersBelow([6,4],5),1)
assert.deepEqual(countNumbersBelow([6,4,5],5),2)
assert.deepEqual(countNumbersBelow([4,2,9,8,77,1],8),4)
assert.deepEqual(countNumbersBelow([9,5,-6,7,-8],2),2)
assert.deepEqual(countNumbersBelow([-5,0,-77,44],0),3)

let {findIndex} = library;
//.............findindexofanumber...............//
assert.deepEqual(findIndex([6,4,5],3),-1)
assert.deepEqual(findIndex([6,4,5],5),2)
assert.deepEqual(findIndex([4,2,9,8,77,1],8),3)
assert.deepEqual(findIndex([9,5,-6,7,-8],-8),4)
assert.deepEqual(findIndex([9,5,-6,7,-8],9),0)
assert.deepEqual(findIndex([1,2,3,4,1],1),0)

let {isAscendingOrder} = library;
//.............checkingascendingorder..........//
assert.deepEqual(isAscendingOrder([]),true)
assert.deepEqual(isAscendingOrder([0]),true)
assert.deepEqual(isAscendingOrder([1,2,3]),true)
assert.deepEqual(isAscendingOrder([-1,-2,-3]),false)
assert.deepEqual(isAscendingOrder([7,12,30,45,222,-33333]),false)

let {isDescendingOrder} = library;
//.............checkingdescendingorder..........//
assert.deepEqual(isDescendingOrder([]),true)
assert.deepEqual(isDescendingOrder([0]),true)
assert.deepEqual(isDescendingOrder([1,2,3]),false)
assert.deepEqual(isDescendingOrder([-1,-2,-3]),true)
assert.deepEqual(isDescendingOrder([2,3,1,4,87]),false)

let {extractDigits} = library;
//.............extractingDigitsFromANumber............//
assert.deepEqual(extractDigits(0),[0])
assert.deepEqual(extractDigits(10),[1,0])
assert.deepEqual(extractDigits(748),[7,4,8])
assert.deepEqual(extractDigits(57932),[5,7,9,3,2])
assert.deepEqual(extractDigits(749325992),[7,4,9,3,2,5,9,9,2])

let {extractUniqueElements} = library;
//...........uniqueElements.............//
assert.deepEqual(extractUniqueElements([1]),[1])
assert.deepEqual(extractUniqueElements([7,4,4]),[7,4])
assert.deepEqual(extractUniqueElements([5,7,7,9,3,3]),[5,7,9,3])
assert.deepEqual(extractUniqueElements([7,4,4,9,3,2,9]),[7,4,9,3,2])
assert.deepEqual(extractUniqueElements([1,23,43,5,24,5,23,1]),[1,23,43,5,24])

let {unionOfSets} = library;
//...........unionOfElements.............//
assert.deepEqual(unionOfSets([7],[4]),[7,4])
assert.deepEqual(unionOfSets([-1,7],[4,7]),[-1,7,4])
assert.deepEqual(unionOfSets([-1,7,-2],[-2,4,7]),[-1,7,-2,4])
assert.deepEqual(unionOfSets([5,7,7,9],[1,3,3]),[5,7,9,1,3])
assert.deepEqual(unionOfSets([1,2,3,4,7,9,1,3,3],[1,3,2,3]),[1,2,3,4,7,9])

let {intersectionOfSets} = library;
//..........intersectionOfElements.............//
assert.deepEqual(intersectionOfSets([1],[2]),[])
assert.deepEqual(intersectionOfSets([3],[3]),[3])
assert.deepEqual(intersectionOfSets([1,4],[2,4]),[4])
assert.deepEqual(intersectionOfSets([],[4,5,7,8,9]),[])
assert.deepEqual(intersectionOfSets([1,4,2,5,6],[2,4,1,6,9]),[2,4,1,6])
assert.deepEqual(intersectionOfSets([1,4,2,5,6],[]),[])

let {findDifference} = library;
//...............difference...............//
assert.deepEqual(findDifference([1,2],[1]),[2])
assert.deepEqual(findDifference([1,2,4],[2,3,5]),[1,4])
assert.deepEqual(findDifference([3,4,5,1,6],[5,3,2,6,5]),[4,1])
assert.deepEqual(findDifference([-1,0,3,2,4],[1,0,5,3]),[-1,2,4])
assert.deepEqual(findDifference([9,4,2,2,5],[7,3,4,32,4]),[9,2,2,5])
assert.deepEqual(findDifference([9,4,2,2,5],[]),[9,4,2,2,5])

let {isSubset} = library;
//...............isSubset..............//
assert.deepEqual(isSubset([1,2],[1]),true)
assert.deepEqual(isSubset([1,2],[1,3]),false)
assert.deepEqual(isSubset([-1,2,-2],[-1,-2]),true)
assert.deepEqual(isSubset([4,7,3,1,9],[8,6,9,3]),false)
assert.deepEqual(isSubset([5,3,6,7,8,2],[2,8,7,3]),true)
assert.deepEqual(isSubset([-3,5,7,83,7,4],[2,8,7,3]),false)

let {generateZipArray} = library;
//..........zip..............//
assert.deepEqual(generateZipArray([],[3,4]),[])
assert.deepEqual(generateZipArray([1],[4]),[[1,4]])
assert.deepEqual(generateZipArray([1,2],[3,4]),[[1,3],[2,4]])
assert.deepEqual(generateZipArray([1,2],[1]),[[1,1]])
assert.deepEqual(generateZipArray([3,5,2],[2,1,4,6]),[[3,2],[5,1],[2,4]])
assert.deepEqual(generateZipArray([-3,4,6,3],[4,5,2,6,8]),[[-3,4],[4,5],[6,2],[3,6]])
assert.deepEqual(generateZipArray([9,4,5,2],[1,3,2,4]),[[9,1],[4,3],[5,2],[2,4]])

let {rotateSource} = library;
//.................rotate...............//
assert.deepEqual(rotateSource([],1),[])
assert.deepEqual(rotateSource([5,3],1),[3,5])
assert.deepEqual(rotateSource([1,2,8],2),[8,1,2])
assert.deepEqual(rotateSource([1,2,3,4],1),[2,3,4,1])
assert.deepEqual(rotateSource([-2,4,-5,-66],1),[4,-5,-66,-2])
assert.deepEqual(rotateSource([5,3,6,34,5],3),[34,5,5,3,6])

let {partitionOfArray} = library;
//...............partitionOfArray................//
assert.deepEqual(partitionOfArray([],2),[[],[]])
assert.deepEqual(partitionOfArray([1],2),[[1],[]])
assert.deepEqual(partitionOfArray([7,6],2),[[],[7,6]])
assert.deepEqual(partitionOfArray([1,2,3,4],2),[[1,2],[3,4]])
assert.deepEqual(partitionOfArray([3,1,3,4,5,6],7),[[3,1,3,4,5,6],[]])
assert.deepEqual(partitionOfArray([1,2,7,4,9,10,5],5),[[1,2,4,5],[7,9,10]])
assert.deepEqual(partitionOfArray([-1,-5,-3,-6,-3],-2),[[-5,-3,-6,-3],[-1]])


console.log("...........test passed...........");

