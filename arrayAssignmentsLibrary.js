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

const convertIntoNumber = function (number)  { 
  return +number;
}

const reverse = function (array,number) {
  array.unshift(number);
  return array;
}

const isIndexEven = function(state,number){
  if(state.index % 2 == 0){
    state.element.push(number);
  }
  state.index++;
  return state;
}

const isGreater = function(firstNumber,secondNumber){
  return firstNumber > secondNumber;
}

const isLesser = function(firstNumber,secondNumber){
  return firstNumber < secondNumber;
}

const isInOrder = function (state,element) {
  let  checkNumber = state.check;
  if(checkNumber(state.init,element)){
    state.result = false;
    return state;
  }
  state.init = element;
  return state;
}

const matchNumber  = function(state,element){
  let {number,index} = state;
  if(!state.isNumberMatched){
    if(element == number){
     state.result = state.index;
     state.isNumberMatched = true;
      return state;
    }
  state.index++;
  }
  return state;
}

const isSubset = function (state,element) {
  if(! state.array.includes(element)){
    state.result = false;
    return state;
  }
  return state;
}

const findUnique = function (uniqueElements,element) {
  if(uniqueElements.includes(element)){
    return uniqueElements;
  }
  uniqueElements.push(element);
  return uniqueElements;
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
  let initial = {index:0,element:[]};
  numbers.reduce(isIndexEven,initial);
  return initial.element;
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
  let initial = {number:specifiedNumber,index:0,result:-1,isNumberMached : false};
  source.reduce(matchNumber,initial);
  return initial.result;
}

//...........extractingDigitsFromANumber.............//
const extractDigits = function(number) {
  let source = number.toString().split("");
  return source.map(convertIntoNumber);
}

//..............reversingArray..............//
const reverseArray = function(numbers) { 
  return numbers.reduce(reverse,[]);
}

//..............checkingAscendingOrder..............//
const isAscendingOrder = function (numbers) {
  let initial = {check:isGreater,result:true,init : numbers[0]}
  numbers.reduce(isInOrder,initial);
  return initial.result;
}

//..............checkingDescendingOrder..............//
const isDescendingOrder = function(numbers){ 
  let initial = {check:isLesser,result:true,init : numbers[0]}
  numbers.reduce(isInOrder,initial);
  return initial.result;
}

//............uniqueElements..............//
const extractUniqueElements = function(elements){
  return elements.reduce(findUnique,[]);
}

//..........unionOfElements.............//
const unionOfSets = function(set1,set2){
  let concatArrays = set1.concat(set2);
  return extractUniqueElements(concatArrays);
}

//..........intersectionOfElements.........//
const intersectionOfSets = function(set1,set2){
  const findCommonElements = function(result,element){
    if(result.array.includes(element)){
      result.intersection.push(element);
    }
    return result;
  }
  let initial = {array:set1,intersection:[]};
  set2.reduce(findCommonElements,initial);
  return initial.intersection;
}

//................difference..............//
const findDifference = function(set1,set2){
  const difference = function (result,element) {
    if(!result.array.includes(element)){
      result.difference.push(element);
      return result;
    }
    return result;
  }
  let  initial = {array:set2,difference:[]}
  set1.reduce(difference,initial);
  return initial.difference;
}

//.............isSubset..............//
const checkSubset = function(set1,set2){
  let initial = {array:set1,result:true};
  set2.reduce(isSubset,initial);
  return initial.result;
}

//............zip................//
const findSmallerLength = function(set1,set2){
  return Math.min(set2.length,set1.length);
}

const generateZipArray = function(set1,set2){
  let zippedArray = [];
  smallerLength = findSmallerLength(set1,set2);
  for (let index = 0; index < smallerLength; index++) {
    zippedArray[index] = [];
    zippedArray[index].push(set1[index],set2[index]);
  }
  return zippedArray;
}

//..............partitionOfNumbers...............//
const partitionOfArray = function(source,threshold){
  const partitioner = function (array,element) {
    if(element <= threshold){
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }
  return source.reduce(partitioner,[[],[]]);
}

//............rotateNumbers................//
const rotateSource = function(source,limit){
  return  source.slice(limit,source.length).concat(source.slice(0,limit));
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
exports.reverseFibonacciSeries = reverseFibonacciSeries;
exports.isAscendingOrder = isAscendingOrder;
exports.isDescendingOrder = isDescendingOrder;
exports.extractUniqueElements = extractUniqueElements;
exports.unionOfSets = unionOfSets;
exports.intersectionOfSets = intersectionOfSets;
exports.findDifference = findDifference;
exports.checkSubset = checkSubset;
exports.generateZipArray = generateZipArray;
exports.rotateSource = rotateSource;
exports.partitionOfArray = partitionOfArray;
