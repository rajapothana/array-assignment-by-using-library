//..............findingOddNumbers..............//
const isEven = function(number) {
  return number % 2 == 0;
}

const extractOddNumbers = function(numbers) { 
  let oddNumbers = [];
  for(let index = 0; index < numbers.length; index++) {
    if(! isEven(numbers[index])) {
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers;
}

//..............findingEvenNumbers..............//
const extractEvenNumbers = function(numbers) { 
  let evenNumbers = [];
  for(let index = 0; index < numbers.length; index++) {
    if(isEven(numbers[index])) {
      evenNumbers.push(numbers[index]);
    }
  }
  return evenNumbers;
}

//..............findingSumOfNumbers..............//
const addNumbers = function(numbers){
  let sum = 0;
  for(let index = 0; index < numbers.length; index++){
    sum = sum + numbers[index]
  }
  return sum;
}

//..............extractingAlternateNumbers..............//
const extractAlternateElements = function(numbers) {
  let extractedNumbers = [];
  for(let index = 0; index < numbers.length; index++) {
    if ( isEven(index)) {
      extractedNumbers.push(numbers[index]);
    }
  }
  return extractedNumbers;
}

//..............reversingNumbers..............//
const reverseNumbers = function(numbers) { 
  let reversedNumbers = [];
  for(let index = numbers.length-1; index >= 0; index--) {
    reversedNumbers.push(numbers[index]);
  }
  return reversedNumbers;
}

//..............reversingFibonacciSeries..............//
const reverseFibonacciSeries = function(limit){
  let firstNumber = 0;
  let secondNumber = 1;
  let sum = 0;
  let fibonacciSeries = [];
  for(let index = 0;index < limit;index++){
    sum = (firstNumber + secondNumber)
    fibonacciSeries.push(firstNumber);
    firstNumber = secondNumber;
    secondNumber = sum;
  }
  return reverseNumbers(fibonacciSeries);
}

//..........greatestNumberInAList...............//
const findGreatestNumber = function(numbers){
  let greatestNumber = 0;
  for (index in numbers){
    if(numbers[index] > greatestNumber){
      greatestNumber = numbers[index];
    }
  }
  return greatestNumber;
}

//..........smallestNumberInAList.............//
const findLeastNumber = function(numbers){
  let leastNumber = numbers[0];
  for (index in numbers){
    if(numbers[index] < leastNumber){
      leastNumber = numbers[index];
    }
  }
  return leastNumber;
}

//................averageOfAList...................//
const calculateAverage = function(numbers){
  average = (addNumbers(numbers)/numbers.length); 
  return average; 
}

//...............mappingLength...............//
const mapLength = function(source){
 let  mappedLengths = [];
  for(let index = 0;index < source.length;index++){
    mappedLengths.push(source[index].length);
  }
  return mappedLengths;
}
  
//.............countEvenNumbers..............//
const  countEvenNumbers = function (source){
  let count = 0;
  let isNumberEven = "";
  for (let index = 0;index < source.length; index++){
    isNumberEven = isEven(source[index]);
    if(isNumberEven){
      count = count + 1;
    }
  }
  return count;
}

//..............countOddNumbers.............//
const  countOddNumbers = function (source){
  let count = 0;
  let isNumberOdd = "";
  for (let index = 0;index < source.length; index++){
    isNumberOdd = isEven(source[index]);
    if(! isNumberOdd){
      count = count + 1;
    }
  }
  return count;
}
//..........countNumbersAboveAThreshold.............//
const countNumbersAbove = function(source,threshold){
  let count = 0;
  for(let index = 0;index < source.length; index++){
    if(source[index] > threshold){
      count = count + 1;
    }
  }
  return count;
}

//..........countNumbersBelowAThreshold.............//
const countNumbersBelow = function(source,threshold){
  let count = 0;
  for(let index = 0;index < source.length; index++){
    if(source[index] < threshold){
      count = count + 1;
    }
  }
  return count;
}

//...............indexOfANumber................//
const findIndex = function(source,specifiedNumber){
  for(let index = 0; index < source.length; index++){
    if(source[index] == specifiedNumber){
      return index;
    }
  }
}

//..............checkingAscendingOrder..............//
const isAscendingOrder = function(source){ 
  for(let index = 0; index < source.length; index++){
    if(source[index] > source[index + 1]){
      return false;
    }
  }
  return true;
}


//..............checkingDescendingOrder..............//
const isDescendingOrder = function(source){ 
  for(let index = 0; index < source.length; index++){
    if(source[index] < source[index + 1]){
      return false;
    }
  }
  return true;
}

//...........extractingDigitsFromANumber.............//
const extractDigits = function(number) {
  let string = ""+number;
  let extractedNumbers = [];
  for(let index = 0; index < string.length; index++) {
    extractedNumbers.push(string[index]);
  }
  return extractedNumbers;
}

//............uniqueElements..............//
const generateUniqueElements = function(source){
let uniqueElements = [];
  uniqueElements.push(source[0]);
  for(let index = 1; index < source.length; index++){
    if(! uniqueElements.includes(source[index])){
      uniqueElements.push(source[index]);
    }
  }
  return uniqueElements;
}

//..........unionOfElements.............//
const generateUnionElements = function(source1,source2){
 let  unionElements = generateUniqueElements(source1);
  for (let index = 0; index < source2.length;index++){
    if(! unionElements.includes(source2[index])){
      unionElements.push(source2[index]);
    }
  }
  return unionElements;
}

//..........intersectionOfElements.........//
const generateIntersectionOfElements = function(source1,source2){
  let intersectionOfElements = [];
  let uniqueSource1 = generateUniqueElements(source1); 
  let uniqueSource2 = generateUniqueElements(source2); 
  for(let index1 = 0; index1 < uniqueSource1.length; index1++){
    for(let index2 = 0; index2 < uniqueSource2.length; index2++){
      if(uniqueSource1[index1] == uniqueSource2[index2]){
        intersectionOfElements.push(uniqueSource1[index1]);
      }
    }
  }
  return intersectionOfElements;
}

//................difference..............//
const getDifference = function(source1,source2){
  let diffArray = [];
  let count = 0;
  isDifferent = "";
  for(let index = 0; index < source1.length; index++){
    isDifference = !source2.includes(source1[index]);
    if(isDifference){
      diffArray[count] = source1[index];
      count++;
    }
  }
  return diffArray;
}

//.............isSubset..............//
const checkSubset = function(array1,array2){
  for(let index = 0; index < array2.length; index++){
    if(! array1.includes(array2[index])){
      return false;
    }
  }
  return true;
}

//............zip................//
const findSmallerArray = function(array1,array2){
  if(array1.length <= array2.length) {
    return array1;
  }
  return array2;
}

const generateZipArray = function(array1,array2){
  let zippedArray = [];
  smallArray = findSmallerArray(array1,array2);
  for (let index = 0; index < smallArray.length; index++) {
    zippedArray[index] = [];
    zippedArray[index][0] = array1[index];
    zippedArray[index][1] = array2[index];
  }
  return zippedArray;
}

//...............rotate.................//
const rotateElements = function(array,limit){
  for(let index = 0; index < limit; index++){
    array.push(array.shift());
  }
  return array;
}

exports.extractOddNumbers = extractOddNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
exports.addNumbers = addNumbers;
exports.alternateElements = extractAlternateElements;
exports.reversedNumbers = reverseNumbers;
exports.reversedFibonacciSeries = reverseFibonacciSeries;
exports.findGreatestNumber = findGreatestNumber;
exports.findLeastNumber = findLeastNumber;
exports.calculateAverage = calculateAverage;
exports.mapLength = mapLength;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
exports.findIndex = findIndex;
exports.isAscendingOrder = isAscendingOrder;
exports.isDescendingOrder = isDescendingOrder;
exports.extractDigits = extractDigits;
exports.generateUniqueElements = generateUniqueElements;
exports.generateUnionElements = generateUnionElements;
exports.generateIntersectionOfElements = generateIntersectionOfElements;
exports.getDifference = getDifference;
exports.checkSubset = checkSubset;
exports.generateZipArray = generateZipArray;
exports.rotateElements = rotateElements;
exports.partitionOfElements = partitionOfElements;
