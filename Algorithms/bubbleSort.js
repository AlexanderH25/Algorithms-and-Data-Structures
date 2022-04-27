function bubbleSort(arr) {
  let noSwaps;
  
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let k = 0; k < i - 1; k++) {
      if(arr[k] > arr[k+1]) {
      //swap
      let temp = arr[k];
      arr[k] = arr[k+1];
      arr[k+1] = temp
      // prevent the if statement from swaping
      noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([13,86,38,58,32,96,5,19,100]);