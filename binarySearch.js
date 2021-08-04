
let x = [-8, 2, 5, 12, 14, 17, 21, 23, 32, 100, 122, 145, 164];


function sequentialSearch(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == value){
            return true;
        }
    }
}

function binarySearch(value, arr) {
    let start = 0;
    let end = arr.length -1;
    while(start <= end) {
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] === value) {
            return true;
        }
        else if(arr[middle] < value){
            start = middle + 1;
        }
        else{
            end = middle - 1;
        }
    }
    return false;
}

function binarySearchRecursive(arr, value){
    // base case
    if(arr.length == 1) {
        return arr[0] == value;
    }

    let mid = Math.floor(arr.length / 2);
    if(value == arr[mid]){
        return true;
    }
    else if(value < arr[mid]){  // check left size of the array
        // arr.slice(0, mid);
        return binarySearchRecursive(arr.slice(0, mid), value);
    }
    else {                      // check right size of the array
        return binarySearchRecursive(arr.slice(mid, arr.length), value);
    }
}

console.log(binarySearch(13, x));   // false
console.log(binarySearch(122, x));  // true

console.log(binarySearchRecursive(x, 13));
console.log(binarySearchRecursive(x, 122));




