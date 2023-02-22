
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  } else {
    return matrix.map((el, i) => {
      return (i % 2) ? el.reverse() : el;
    }).flat();
  }
}
