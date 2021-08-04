let arr2 = [1, 2, 3, 4, 3, 10];
let arr3 = [3,4,7,2,9]; //return -1 (no balancing index found)
let arr4 = [3,4,7,2,-2,9,14]; //return 5
let arr5 = [-2,-1, 0,-2, -1]; //return 5

function balanceIndex(arr) {
    // console.log('inside index')
    let sum = 0;
    let sum2 = 0;
    if (arr.length < 3) {
        return -1;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i];  // sum all values in array
    }

    for (let j = arr.length - 2; j > 0; j--) {
        sum2 += arr[j + 1]; // sum values starting from the end
        sum -= arr[j];      // substract those values from some
        if (sum == sum2) {
            return j;
        }
    }
    return -1
}

// Logan
const balIdx = arr => {
    const length = arr.length
    let current = 0
    let total = 0

    for ( let i = 0; i < length - 2; i++ ) {
        current += arr.splice( 0, 1 )[ 0 ]
        total = 0

        total += arr.reduce( ( a, b ) => a + b ) - arr[ 0 ]

        if ( current === total ) return i + 1
    }

    return -1
}

// Saurabh
function balanceIndex(arr){
    let total = arr.reduce((a,b)=>a+b);
    let sumleft = 0;
    for(let i =0; i<arr.length; i++){
        total = total- arr[i]
        console.log("total and sum left are these:", total, sumleft)
        if(total == sumleft){
            return i;
        }
        sumleft += arr[i]
    }
    return -1

}

const arr1 = [ 1, 2, 3, 4, 3, 10 ]
const arr2 = [ 3, 4, 7, 2, 9 ]
const arr3 = [ 3, 4, 7, 2, -2, 9, 14 ]

console.log( balIdx( arr1 ), balIdx( arr2 ), balIdx( arr3 ) )

console.log(balanceIndex(arr2));
console.log(balanceIndex(arr3));
console.log(balanceIndex(arr4));
console.log(balanceIndex(arr5));