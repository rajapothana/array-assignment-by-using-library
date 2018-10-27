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


const isGreater = function(firstNumber,secondNumber){
  return firstNumber > secondNumber;
}

const isLesser = function(firstNumber,secondNumber){
  return firstNumber < secondNumber;
}

const checkOrder = function (state,element) { 
  let  checkCondition = state.check; // TODO unintituive that check is a function
  if(checkCondition(state.initNumber,element)){ // TODO unclear that init is the number. 
    state.result = false;
    return state;
  }
  state.initNumber = element;
  return state;
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

const isIndexEven = function(state,number){ // TODO destructure state so that I know what state has. After that, try destructing right in the argument or name the state better
  if(isEven(state.index)){
    state.element.push(number);
  }
  state.index++;
  return state;
}
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

const findIndex = function(dataSet,specifiedNumber){ // TODO no need to use reduce, use a filter and head 
  let index = -1;
  let indexCounter = 0;
  matchNumber = function (element) {
    if(index == -1 && element == specifiedNumber){
      index = indexCounter;
    }
    indexCounter++;

  }
  dataSet.filter(matchNumber);
  return index;
}

//...........extractingDigitsFromANumber.............//

const convertIntoNumber = function (string)  { 
  return +string;
}

const extractDigits = function(number) {
  let source = number.toString().split("");
  return source.map(convertIntoNumber);
}

//..............reversingArray..............//

const beforeSelector = function (array,number) { // TODO insert number where?
  array.unshift(number);
  return array;
}
const reverseSource = function(numbers) { 
  return numbers.reduce(beforeSelector,[]);
}

//..............checkingAscendingOrder..............//
const isAscendingOrder = function (numbers) {
  let initial = {check:isGreater,result:true,initNumber : numbers[0]}
  numbers.reduce(checkOrder,initial);
  return initial.result;
}

//..............checkingDescendingOrder..............//
const isDescendingOrder = function(numbers){ 
  let initial = {check:isLesser,result:true,initNumber : numbers[0]}
  numbers.reduce(checkOrder,initial);
  return initial.result;
}
//............uniqueElements..............//

const findUnique = function (uniqueElements,element) {
  if(uniqueElements.includes(element)){
    return uniqueElements;
  }
  uniqueElements.push(element);
  return uniqueElements;
}

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
// TODO - create a function which captures set (i.e state.array into its closure and then returns another function that checksSubset. use currying.
const checkSubset = function (state,element) {
  if(! state.array.includes(element)){
    state.result = false;
    return state;
  }
  return state;
}

const isSubset = function(set1,set2){
  let initial = {array:set1,result:true};
  set2.reduce(checkSubset,initial); // TODO - should work like checkSubset(set1) 
  return initial.result;
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

//............zip................//
const generateZipArray = function(set1,set2){
  let zippedArray = [];
  let smallerLength =  Math.min(set2.length,set1.length);
  for (let index = 0; index < smallerLength; index++) {
    zippedArray.push([set1[index],set2[index]]);
  }
  return zippedArray;
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
  return reverseSource(fibonacciSeries);
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
exports.reverseSource = reverseSource;
exports.reverseFibonacciSeries = reverseFibonacciSeries;
exports.isAscendingOrder = isAscendingOrder;
exports.isDescendingOrder = isDescendingOrder;
exports.extractUniqueElements = extractUniqueElements;
exports.unionOfSets = unionOfSets;
exports.intersectionOfSets = intersectionOfSets;
exports.findDifference = findDifference;
exports.isSubset = isSubset;
exports.generateZipArray = generateZipArray;
exports.rotateSource = rotateSource;
exports.partitionOfArray = partitionOfArray;
