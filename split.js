String.prototype.splitString = function(sep = ' ') {
  let temp = '';
  let splitStrings = [];
  let s = String(this);

  for(let i = 0; i < s.length; i++) {
    if(s[i] != sep) {
      temp += s[i];
    }

    if(s[i] == sep && temp) {
      splitStrings.push(temp);
      temp = ''
    }
  }
  splitStrings.push(temp);
  return splitStrings;
}

console.log(' test 123'.splitString());
