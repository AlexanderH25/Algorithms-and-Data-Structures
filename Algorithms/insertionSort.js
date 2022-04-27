function insertionSort(arr) {
    let currValue;
  
    for(var i = 1; i < arr.length; i++) {
      currValue = arr[i];
      for(var k = i - 1; k >= 0 && arr[k] > currValue; k--) {
        arr[k+1] = arr[k]   
      }
      arr[k+1] = currValue;
    }
    return arr;
  }
      
    
  insertionSort([10, 5, 60, 3, 48, 26, 9]);