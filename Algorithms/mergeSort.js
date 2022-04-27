function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let k = 0;
    
    while(i < arr1.length && k < arr2.length) {
        if(arr1[i] < arr2[k]) {
          result.push(arr1[i]);
        i++;
      } else {
          result.push(arr2[k]);
        k++;
      }
    }
  
    while(i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
   
    while(k < arr2.length) {
      result.push(arr2[k]);
      k++
    }
    return result;
 }
  
merge([1,10,50], [2,14,99,100]);