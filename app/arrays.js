exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, curr) {
      return prev + curr;
    });
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(el) {
      if (el === item) {
        count++;
      }
    });
    return count;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    return arr.map(function(item) {
      return Math.pow(item, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [];
    arr.forEach(function(el, i) {
      if (el === target) {
        indexes.push(i);
      }
    });
    return indexes;
  }
};
