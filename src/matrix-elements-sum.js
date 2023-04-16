const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let lowerIndex = matrix.length, sum = 0
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i].includes(0)) {
      lowerIndex = i
      break
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i < lowerIndex) {
      sum += matrix[i].reduce((sum, item) => sum + item)
    } else {
      break
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
