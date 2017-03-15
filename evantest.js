'use strict'

var testArr = [["2014", "horse"], ["2015", "sheep"]];

console.log(toObject(testArr));

function toObject(arr) {
  var finalObj = {};
  for (var i = 0; i < arr.length; i++) {
    // let key = arr[i][0];
    // let value = arr[i][1];
    // finalObj[key] = value;
    finalObj[arr[i][0]] = arr[i][1];
  }
  return finalObj;
}


StartTime 1:38
Triangle
