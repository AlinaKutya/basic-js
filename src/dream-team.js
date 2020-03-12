module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object' || members == null || !members.length) {
    return false;
  }
  //console.log(members);
  let arr = [];

  let i = 0;

  for (let n of members) {
    if (typeof n === 'string') {
      for (let a in n) {
        if (n[a] != ' ') {
          arr.push(n[a]);
          i++;
          break;
        }
      }
    }
  }

  if (i === 0) {
    return false;
  }

  //console.log(arr);

  let arrUpper = arr.map(n => n.toUpperCase());
  arrUpper = arrUpper.sort().join('');
  return arrUpper;
};
