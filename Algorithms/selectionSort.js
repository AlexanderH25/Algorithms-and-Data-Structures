function selectionSort(arr) {

    for(let i = 0; i < arr.length; i++) {
    let swap = false;
    let lowest = i;
    
      for(let k = i+1; k < arr.length; k++) {
        if(arr[k] < arr[lowest]) {
          lowest = k; 
          swap = true;
        }
  
        if(k === arr.length - 1 && swap) {
          let temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp;
        }
      }
    }
      return arr;
  }
      
  selectionSort([19,8,38,17,49,5,69]);