// From https://dracoblue.net/dev/linear-least-squares-in-javascript/

export default function getLeastSquares(values_x = [], values_y = []) {
  let sum_x = 0
  let sum_y = 0
  let sum_xy = 0
  let sum_xx = 0
  let count = 0
  let x = 0
  let y = 0
  let values_length = values_x.length

  if (values_length !== values_y.length) {
    throw new Error(
      'The parameters values_x and values_y need to have same array length.'
    )
  }

  /*
   * Nothing to do if no data.
   */
  if (values_length === 0) {
    return [[], []]
  }

  /*
   * Calculate the sum for each of the parts necessary.
   */
  for (let v = 0; v < values_length; v++) {
    x = values_x[v]
    y = values_y[v]
    sum_x += x
    sum_y += y
    sum_xx += x * x
    sum_xy += x * y
    count++
  }

  /*
   * Calculate m and b for the formula:
   * y = x * m + b
   */
  const m = (count * sum_xy - sum_x * sum_y) / (count * sum_xx - sum_x * sum_x)
  const b = sum_y / count - (m * sum_x) / count

  /*
   * Create result for Plot component
   */
  let resultArray = []

  for (let v = 0; v < values_length; v++) {
    x = values_x[v]
    y = x * m + b

    resultArray.push({ x, y })
  }

  return resultArray
}
