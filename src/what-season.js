module.exports = function getSeason(date) {
  //console.log(date);

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
  }

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      //  console.log('winter');
      return 'winter';

    case 2:
    case 3:
    case 4:
      //  console.log('spring');
      return 'spring';

    case 5:
    case 6:
    case 7:
      //  console.log('summer');
      return 'summer';

    case 8:
    case 9:
    case 10:
      // console.log('fall');
      return 'fall';
  }
};
