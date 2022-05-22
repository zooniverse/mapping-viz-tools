const yearsArray = (start, end) => {
  let newArray = []
  for (let year = start; year <= end; year++) {
    newArray.push(year)
  }
  return newArray
}

export default yearsArray
