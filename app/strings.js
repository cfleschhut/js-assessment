exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
    var newArr = [];
    var group = _.groupBy(str.split(''), function(char) {
      return char;
    });
    for (var i in group) {
      newArr.push(group[i].splice(0, amount).join(''));
    }
    return newArr.join('');
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }

};
