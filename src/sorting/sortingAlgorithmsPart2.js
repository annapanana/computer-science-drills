'use strict'

const swap = require('./sort-helpers').swap;
const merge = require('./sort-helpers').merge;
const partition = require('./sort-helpers').partition;

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let halfLength = Math.floor(arr.length/2);
  let subArr = arr.splice(0, halfLength);
  return merge(subArr, arr);
}

function quickSort(arr) {

}

module.exports = {
  mergeSort,
  quickSort
};
