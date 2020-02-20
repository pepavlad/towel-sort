module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length) return [];
  return matrix.flatMap((element, i) => i % 2 == 0 ? element : element.reverse());
}