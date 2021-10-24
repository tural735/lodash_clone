function chunkArray(arr, val) {
  var finalArr = [];
  for (var i = 0; i < arr.length; i += val) {
    finalArr.push(arr.slice(i, val + i));
  }
  //return finalArr;
  console.log(finalArr);
}

chunkArray([3, 3, 1, 45, 52, 422, 32, "wds", "dss", 32], 2);
