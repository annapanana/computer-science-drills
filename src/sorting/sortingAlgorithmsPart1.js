'use strict'

const swap = require('./sort-helpers').swap;



function bubbleSort(arr){
  let swapCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      // let val1 = arr[i];
      // let val2 = arr[i+1];
      // arr[i] = val2;
      // arr[i+1] = val1;
      swap(arr, i, i+1);
      swapCounter++;
    }
  }
  if (swapCounter > 0) {
    return bubbleSort(arr);
  } else {
    return arr;
  }
}

function selectionSort(arr) {

}

function insertionSort(arr) {

}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
