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

const findMaxNumber = function(num1,num2){
  return Math.max(num1,num2);
}
const findMinNumber = function(num1,num2){
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
const isIndexEven = function(object,number){
  if(object.index % 2 == 0){
    object.element.push(number);
  }
  object.index++;
  return object;
}

const isGreater = function(a,b){
  return a>b;
}
const islesser = function(a,b){
  return a<b;
}
const isInOrder = function (object,element) {
  checkNumber = object.check;
  if(checkNumber(object.init,element)){
    object.isInOrder = false;
    return object;
  }
  object.init = element;
  return object;
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
  let object = {index:0,element:[]};
  numbers.reduce(isIndexEven,object);
  return object.element;
}
//..........greatestNumberInAList...............//
const findGreatestNumber = function(numbers){
  return numbers.reduce(findMaxNumber,0);
}

//..........smallestNumberInAList.............//
const findSmallestNumber = function(numbers){
  return numbers.reduce(findMinNumber);
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
const isAscendingOrder = function (numbers) {
  let obj = {check:isGreater,isInOrder:true,init : numbers[0]}
  numbers.reduce(isInOrder,obj);
  return obj.isInOrder;
}

//..............checkingDescendingOrder..............//
const isDescendingOrder = function(numbers){ 
  let obj = {check:islesser,isInOrder:true,init : numbers[0]}
  numbers.reduce(isInOrder,obj);
  return obj.isInOrder;
}

//............uniqueElements..............//
const extractUniqueElements = function(elements){
  const findUnique = function (uniqueElements,element) {
    if(uniqueElements.includes(element)){
      return uniqueElements;
    }
    uniqueElements.push(element);
    return uniqueElements;
  }
  return elements.reduce(findUnique,[]);
}

//..........unionOfElements.............//
const unionOfElements = function(array1,array2){
  concatArrays = array1.concat(array2);
  return extractUniqueElements(concatArrays);
}

//..........intersectionOfElements.........//
const intersectionOfElements = function(array1,array2){
  const findCommonElements = function(object,element){
    if(object.array.includes(element)){
      object.intersection.push(element);
    }
    return object;
  }
  let object = {array:array1,intersection:[]};
  array2.reduce(findCommonElements,object);
  return object.intersection;
}

//................difference..............//
const findDifference = function(array1,array2){
  const difference = function (object,element) {
    if(!object.array.includes(element)){
      object.difference.push(element);
      return object;
    }
    return object;
  }
  let object = {array:array2,difference:[]}
  array1.reduce(difference,object);
  return object.difference;
}

//.............isSubset..............//
const checkSubset = function(array1,array2){
  const isSubset = function (object,element) {
    if(! object.array.includes(element)){
      object.result = false;
      return object;
    }
  return object;
}
let object = {array:array1,result:true};
 array2.reduce(isSubset,object);
return object.result;
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
const partitionOfArray = function(source,threshold){
  const dividor = function (array,element) {
    if(element <= threshold){
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }
  return source.reduce(dividor,[[],[]]);
}

//............rotateNumbers................//
const rotateSource = function(source,limit){
  return  source.slice(limit,source.length).concat(source.slice(0,limit));
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
