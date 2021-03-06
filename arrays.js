var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    var addToArray = [element, ...array]
    return addToArray }

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array }

function addElementToEndOfArray(array, element) {
  var addToArray = [...array, element]
  return addToArray }

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array }

function accessElementInArray(array, index) {
  return array[index] }

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array }

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray }

 function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1) }
