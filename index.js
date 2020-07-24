const sumItems = function (array) {
  let sum = 0;
  if (array.length === 1) {
    return array[0];
  }

  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += parseInt(sumItems(item));
    } else {
      sum += item;
    }
  });
  console.log(sum);

  return sum;
};

module.exports = sumItems;
