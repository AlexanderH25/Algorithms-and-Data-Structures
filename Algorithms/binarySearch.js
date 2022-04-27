// solution 2
function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let average = Math.floor((left + right) / 2);

    while(arr[average] !== num && left <= right) {
        if(arr[average] < num) {
            left = average + 1
        } else if(arr[average] > num) {
            right = average - 1
        }
        average = Math.floor((left + right) / 2);
    }
    if(arr[average] === num) {
        return average;
    } 
    return -1   
}

binarySearch([1,2,3,5,6,8,9,11,13,15,16,17,18], 18);