module.exports = function check(str, bracketsConfig) {
  if (str.length%2 !== 0) {
    return false
  }

  let closers_brace = [];
  let opens_brace = [];
  for( let j=0; j<bracketsConfig.length; j++){
    opens_brace.push(bracketsConfig[j][0]);
    closers_brace.push(bracketsConfig[j][1])
  }

  let order = [];
  for (let i = 0; i < str.length; i++) {
    if(opens_brace.indexOf(str[i]) !== -1) {
      if (opens_brace.indexOf(str[i])===closers_brace.indexOf(str[i]) && str[i] === order[order.length-1]) {
        order.pop();
      } else {
        order.push(str[i]);
      }
    }
    else if (closers_brace.indexOf(str[i]) !== -1 && closers_brace.indexOf(str[i]) === opens_brace.indexOf(order[order.length-1])) {
        order.pop();
      }
      else {
        return false;
      }
    }

  if (order.length > 0) return false;

  return true
}
