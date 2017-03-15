'use strict'

function swap(arr, idx1, idx2) {
  let initialIdx1 = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = initialIdx1;
  return arr;
}

function merge(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  if (arr1[0] < arr2[0]) {
     return [arr1[0]].concat(merge(arr1.slice(1), arr2));
   }else{
     return [arr2[0]].concat(merge(arr1, arr2.slice(1)));
   }
}

function partition(arr, left, right) {

}

module.exports = {
  swap,
  merge,
  partition
}
