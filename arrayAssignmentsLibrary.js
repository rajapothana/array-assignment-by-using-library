const isEven = function(number) {
  return (number % 2 == 0);
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

//..............findingOddNumbers..............//
const extractOddNumbers = function(numbers) { 
  let oddNumbers = [];
  for(let index = 0; index < numbers.length; index++) {
    if(!isEven(numbers[index])) {
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers;
}

//..............findingSumOfNumbers..............//
const addNumbers = function(numbers){
  let sum = 0;
  for(let number of numbers){
    sum = sum + number;
  }
  return sum;
}

//..............extractingAlternateNumbers..............//
const extractAlternateNumbers = function(numbers) {
  let extractedNumbers = [];
  for(let index in numbers){
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
const generateFibonacciSeries = function(limit){
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
  return fibonacciSeries;
}

const reverseFibonacciSeries = function(limit){
  fibonacciSeries = generateFibonacciSeries(limit)
  return reverseNumbers(fibonacciSeries);
}

  //..........greatestNumberInAList...............//
const findGreatestNumber = function(numbers){
  let greatestNumber = numbers[0];
  for (number of numbers){
    if(number > greatestNumber){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}

//..........smallestNumberInAList.............//
const findSmallestNumber = function(numbers){
  let smallestNumber = numbers[0];
  for (number of numbers){
    if(number < smallestNumber){
      smallestNumber = number;
    }
  }
  return smallestNumber;
}

//................averageOfAList...................//
const calculateAverage = function(numbers){
  let average = (addNumbers(numbers)/numbers.length); 
  return average; 
}

//...............mappingLength...............//
const mapLength = function(source){
  let mappedLength = [];
  for(let index = 0;index < source.length;index++){
    mappedLength.push(source[index].length);
  }
  return mappedLength;
}

//.............countEvenNumbers..............//
const  countEvenNumbers = function (source){
  let count = 0;
  for(let number of source){
    if(isEven(number)){
      count = count + 1;
    }
  }
  return count;
}

//..............countOddNumbers.............//
const  countOddNumbers = function (source){
  let count = 0;
  for(let number of source){
    if(! isEven(number)){
      count = count + 1;
    }
  }
  return count;
}
//..........countNumbersAboveAThreshold.............//
const countNumbersAbove = function(source,threshold){
  let count = 0;
  for(let number of source){
    if(number > threshold){
      count = count + 1;
    }
  }
  return count;
}

//..........countNumbersBelowAThreshold.............//
const countNumbersBelow = function(source,threshold){
  let count = 0;
  for(let number of source){
    if(number < threshold){
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
  return -1;
}

//..............checkingAscendingOrder..............//
const isAscendingOrder = function(source){ 
  for(let index = 0; index < source.length-1; index++){
    if(source[index] > source[index + 1]){
      return false;
    }
  }
  return true;
}


//..............checkingDescendingOrder..............//
const isDescendingOrder = function(source){ 
  for(let index = 0; index < source.length-1; index++){
    if(source[index] < source[index + 1]){
      return false;
    }
  }
  return true;
}

//...........extractingDigitsFromANumber.............//
const extractDigits = function(number) {
  let string = ""+number;
  let extractedDigits = [];
  for(let index = 0; index < string.length; index++) {
    extractedDigits.push(string[index]);
  }
  return extractedDigits;
}

//............uniqueElements..............//
const extractUniqueElements = function(source){
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
const unionOfElements = function(array1,array2){
  let unionElements = extractUniqueElements(array1);
  for (let index = 0; index < array2.length;index++){
    if(! unionElements.includes(array2[index])){
      unionElements.push(array2[index]);
    }
  }
  return unionElements;
}

//..........intersectionOfElements.........//
const intersectionOfElements = function(array1,array2){
  let intersectionOfElements = [];
  let uniqueArray1 = extractUniqueElements(array1); 
  let uniqueArray2 = extractUniqueElements(array2); 
  for(let element of uniqueArray2){
    if(uniqueArray1.includes(element)){
      intersectionOfElements.push(element);
    }
  }
  return intersectionOfElements;
}

//................difference..............//
const findDifference = function(source1,source2){
  let diffArray = [];
  let isDifferent;
  for(let index = 0; index < source1.length; index++){
    isDifferent = !source2.includes(source1[index]);
    if(isDifferent){
      diffArray.push(source1[index]);
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
const findSmallerLength = function(array1,array2){
  if(array1.length <= array2.length) {
    return array1.length;
  }
  return array2.length;
}

const generateZipArray = function(array1,array2){
  let zippedArray = [];
  smallerLength = findSmallerLength(array1,array2);
  for (let index = 0; index < smallerLength; index++) {
    zippedArray[index] = [];
    zippedArray[index].push(array1[index],array2[index]);
  }
  return zippedArray;
}

//..............partitionOfNumbers...............//
const partitionOfArray = function(array,number){
  let partitionedArray = [[],[]];
  for (let index = 0;index < array.length;index++){
    partitionedArray[1].push(array[index]);
    if(array[index] <= number){
      partitionedArray[0].push(array[index]);
      partitionedArray[1].pop(array[index]);
    }
  }
  return partitionedArray;
}

//............rotateNumbers................//
const rotateSource = function(source,limit){
  for (let index = 0;index < limit;index++){
    source.push(source.shift());
  }
  return source;
}

exports.rotateSource=rotateSource;
exports.extractOddNumbers = extractOddNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
exports.addNumbers = addNumbers;
exports.alternateNumbers = extractAlternateNumbers;
exports.reversedNumbers = reverseNumbers;
exports.reversedFibonacciSeries = reverseFibonacciSeries;
exports.findGreatestNumber = findGreatestNumber;
exports.findSmallestNumber = findSmallestNumber;
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
exports.extractUniqueElements = extractUniqueElements;
exports.unionOfElements = unionOfElements;
exports.intersectionOfElements = intersectionOfElements;
exports.findDifference = findDifference;
exports.checkSubset = checkSubset;
exports.generateZipArray = generateZipArray;
exports.rotateSource = rotateSource;
exports.partitionOfArray = partitionOfArray;
