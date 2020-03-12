module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw 'Not implemented';
  }

  let arr2 = [],
    i = 0;

  while (i < arr.length) {
    if (arr[i] === '--discard-prev') {
      arr2.pop();
      i++;
      continue;
    }

    if (arr[i] === '--discard-next') {
      i += 2;
      continue;
    }

    if (arr[i] === '--double-prev') {
      if (i === 0) {
        i++;
        continue;
      }
      arr2.push(arr[i - 1]);
      i++;
      continue;
    }

    if (arr[i] === '--double-next') {
      if (i === arr.length - 1) {
        i++;
        continue;
      }
      arr2.push(arr[i + 1]);
      i++;
      continue;
    }

    arr2.push(arr[i]);
    i++;
  }

  return arr2;
};
