// extractEvenNumbers and extractOddNumbers have lot of duplication. create a new function that reduces that duplication. 
// that does not mean ywo have only 1 function. it means you have 3 functions. but no duplication. 
// first you can use if-else. then you'll get rid of them. 
const isEven = function(number) {
  return (number % 2 == 0);
}
const isOdd = function (number) {
  return !isEven(number);
}
const sum = function (num1,num2) {
  return num1 + num2;
}
const maxNumber = function(num1,num2){
  return Math.max(num1,num2);
}
const minNumber = function(num1,num2){
  return Math.min(num1,num2);
}
const findLength = function(source){
  return source.length;
}
const convertStrings = function (number) {
  return +number;
}
const reverse = function (array,number) {
  array.unshift(number);
  return array;
}
//..............findingEvenNumbers..............//
const extractEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}
//..............findingOddNumbers..............//
const extractOddNumbers = function(numbers) { 
  return numbers.filter(isOdd);
}
//..............findingSumOfNumbers..............//
const addNumbers = function(numbers){
  return numbers.reduce(sum,0);
}
//..............extractingAlternateNumbers..............//
const extractAlternateNumbers = function(numbers) {
  const isIndexEven = function(object,number){
    if(object.index % 2 == 0){
      object.element.push(number);
    }
    object.index++;
    return object;
  }
  let object = {index:0,element:[]};
  numbers.reduce(isIndexEven,object);
  return object.element;
}
//..........greatestNumberInAList...............//
const findGreatestNumber = function(numbers){
  return numbers.reduce(maxNumber,0);
}

//..........smallestNumberInAList.............//
const findSmallestNumber = function(numbers){
  return numbers.reduce(minNumber);
}

//................averageOfAList...................//
const calculateAverage = function(numbers){
  return (numbers.reduce(sum) / numbers.length);
}
//................mapLength.................//
const mapLength = function(source){
  return source.map(findLength);
}
//.............countEvenNumbers..............//
const countEvenNumbers = function (numbers){
  return numbers.filter(isEven).length;
}
//..............countOddNumbers.............//
const countOddNumbers = function (numbers){
  return numbers.filter(isOdd).length;
}
//..........countNumbersAboveAThreshold.............//
const countNumbersAbove = function(source,threshold){
  const filterNumbersAboveThreshold = function (number){
    return number > threshold;
  }
  return source.filter(filterNumbersAboveThreshold).length;
}
//..........countNumbersBelowAThreshold.............//
const countNumbersBelow = function(source,threshold){
  const filterNumbersBelowThreshold = function (number){
    return number <= threshold;
  }
  return source.filter(filterNumbersBelowThreshold).length;
}
//...............indexOfANumber................//
const findIndex = function(source,specifiedNumber){
  const matchNumber  = function(object,element){
    let {number,index} = object;
    if(element == number){
      object.result = object.index;
      return object;
    }
    object.index++;
    return object;
  }
  let obj = {number:specifiedNumber,index:0,result:-1};
  source.reduce(matchNumber,obj);
  return obj.result;
}
//...........extractingDigitsFromANumber.............//
const extractDigits = function(number) {
  let source = number.toString().split("");
  return source.map(convertStrings);
}

//..............reversingArray..............//
const reverseArray = function(numbers) { 
  return numbers.reduce(reverse,[]);
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
  return reverseArray(fibonacciSeries);
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
  let difference = [];
  let isDifferent;
  for(let index = 0; index < source1.length; index++){
    isDifferent = !source2.includes(source1[index]);
    if(isDifferent){
      difference.push(source1[index]);
    }
  }
  return difference;
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

exports.extractOddNumbers = extractOddNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
exports.addNumbers = addNumbers;
exports.extractAlternateNumbers = extractAlternateNumbers;
exports.findGreatestNumber = findGreatestNumber;
exports.findSmallestNumber = findSmallestNumber;
exports.calculateAverage = calculateAverage;
exports.mapLength = mapLength;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
exports.findIndex = findIndex;
exports.extractDigits = extractDigits;
exports.reverseArray = reverseArray;
exports.reversedFibonacciSeries = reverseFibonacciSeries;
exports.isAscendingOrder = isAscendingOrder;
exports.isDescendingOrder = isDescendingOrder;
exports.extractUniqueElements = extractUniqueElements;
exports.unionOfElements = unionOfElements;
exports.intersectionOfElements = intersectionOfElements;
exports.findDifference = findDifference;
exports.checkSubset = checkSubset;
exports.generateZipArray = generateZipArray;
exports.rotateSource = rotateSource;
exports.partitionOfArray = partitionOfArray;
