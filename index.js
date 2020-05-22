const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(input) {
  let result = input.find( y => {
    return y.result === "W"
  })
  return !!result ? result.year : undefined
}
