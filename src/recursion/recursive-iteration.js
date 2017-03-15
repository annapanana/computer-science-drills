'use strict'
//mocha ./test/recursion/recursive-iteration.test.js
exports.max = function max(array) {
  if (array.length <= 1) {
    return array[0];
  } else {
    if (array[0] < array[1]) {
      // remove arr [0]
      array.splice(0, 1);
    } else {
      // remove arr[1]
      array.splice(1, 1);
    }
    return this.max(array);
  }
};
exports.min = function min(array) {
  if (array.length <=1) {
    return array[0];
  } else {
    if (array[0] > array[1]) {
      array.splice(0, 1);
    } else {
      array.splice(1, 1);
    }
    return this.min(array);
  }
};

// returns an array containing only the matching items
exports.filter = function filter(arr, fn) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (fn(arr[0])) {
    var newVal = arr.splice(0,1); // get the zero value and remove it from arr
    newArr.push(newVal[0]); // push the prev zero value of arr to new arr
    return newArr.concat(filter(arr, fn));
  } else {
    arr.splice(0, 1);
    return filter(arr, fn);
  }
};

// The opposite of filter
exports.reject = function reject(arr, fn) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (!fn(arr[0])) {
    newArr.push(arr.splice(0,1)[0]);
    return newArr.concat(reject(arr, fn));
  } else {
    arr.splice(0, 1);
    return reject(arr, fn);
  }
}

// Every item in the array must match the condition in fn
exports.every = function every(array, fn) {
  if (array.length === 0) {
    return true;
  }
  if (!fn(array[0])) {
    return false;
  } else {
    array.shift();
    return every(array, fn);
  }
}

// Returns true if at least one item in the array matches
exports.some = function some(array, fn) {
  // Base Case
  if (array.length === 0) {
    return false;
  }

  if (fn(array[0])) {
    return true;
  } else {
    array.shift();
    return some(array, fn);
  }
};

exports.none = function none(array, fn) {
  // Base Case
  if (array.length === 0) {
    return true;
  }

  if (fn(array[0])) {
    return false;
  } else {
    array.shift();
    return none(array, fn);
  }
};

// var index = 0;
//returns an array containing elements transformed by the function
exports.map = function map(array, fn) {
  if (array.length === 0) {
    return [];
  }
  //concat flatttens 2 arrays
  return [fn(array[0])].concat(map(array.slice(1), fn));
}


// returns a string with the elements of the array joined by the delimiter
exports.join = function join(array, delimiter) {
  let newString = "";
  if (array.length === 0) {
    return newString;
  } else if (array.length === 1) {
    return array[0];
  }
  return newString += array[0] + delimiter + join(array.splice(1,array.length-1), delimiter);
};

exports.split = function split(string, delimiter) {
  // returns an array of strings split on the delimiter
  let newArr = [];
  // console.log(string.indexOf(delimiter));
  if (string.indexOf(delimiter) < 0) {
    if (string.length > 0) {
      // console.log(string.indexOf(delimiter));
      newArr.push(string);
      // console.log(newArr);
      return newArr;
    } else {
      return [];
    }
  }
  // call the split function with the substring of the rest of the string
  return newArr.push(string.substring(0, string.indexOf(delimiter)), split(string.substring(string.indexOf(delimiter)+1, string.length), delimiter));
};

exports.reduce = function reduce(array, fn, initialValue) {
  if (array.length === 0) {
    return initialValue;
  }
  return fn(array[0], reduce(array.splice(1, array.length-1), fn, initialValue));
};

exports.indexOf = function indexOf(array, value, position = 0) {
  if (array.length === 0) {
    return -1;
  }
  if (array[0] === value) {
    return position;
  } else {
    array.splice(0, 1);
    position++;
    return indexOf(array, value, position);
  }
};

exports.leftPad = function leftPad(string, padNum, delimiter) {
  if (string.length >= padNum) {
    return string;
  }
  return leftPad(delimiter + string, padNum, delimiter);
}

exports.flatten = function flatten(array) {
  let newArr = [];
  if (array.length === 0) {
    return [];
  }

  console.log(newArr.push(array[0], flatten(array.splice(1, array.length-1))));
  // return newArr.push(array[0], flatten(array.splice(1, array.length-1)));
};

exports.binarySearch = function binarySearch(array, value, min = 0, max = array.length) {
}
