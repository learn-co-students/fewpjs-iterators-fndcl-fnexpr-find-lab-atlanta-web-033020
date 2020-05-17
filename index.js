function superbowlWin(arr) {
  const obj = arr.find(record => record.result === 'W');
  if (obj) {
    return obj.year;
  } else {
    return undefined;
  }
}