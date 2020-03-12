module.exports = function countCats(backyard) {
  if (!backyard.length || !backyard) {
    return 0;
  }
  let cats = 0;
  //console.log(backyard);
  let array = [].concat(...backyard);
  //console.log(array);
  for (let i in array) {
    if (array[i] === '^^') {
      cats++;
    }
  }
  return cats;
};
