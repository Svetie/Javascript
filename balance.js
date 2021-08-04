// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){

    let left = 0;
    let right = 0;
    for(let i = 0; i < arr.length; i++){
        left += arr[i];
    }

    for(let j = arr.length -1; j >=0; j--){
        // console.log('inside second loop')
        left = left - arr[j];
        right += arr[j];
        if(left == right){
            return true;
        }
    }
    // for(let n = 0; n < arr.length; n++){
    //     left = left - arr[n];
    //     right += arr[n];
    //     if(left == right){
    //         return true;
    //     }
    // }
    return false;

}
// console.log(balancePoint([1,2,3,4,10])) // TRUE
// // ---> 1+2+3+4 = 10     10 == 10 so balanced
// console.log(balancePoint([1,2,3,2,1])) // FALSE
// console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
// console.log(balancePoint([2,2])) // TRUE

// ====================================================
// ====================================================

// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE INDEX
// WHERE THE SUM ON EITHER SIDE OF THE INDEX (PIVOT POINT) IS THE SAME
// THINK OF THE INDEX IN THE ARRAY AS THE POINT



// function balancePoint(arr) {
//     let sum = 0
//     let sum2 = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     for (let j = arr.length - 1; j > 0; j--) {
//         sum2 += arr[j]
//         sum -= arr[j]
//         if (sum == sum2) { return true }
//     }
//     return false
// }

function balanceIndex(arr) {
    // console.log('inside index')
    let sum = 0
    let sum2 = 0
    if (arr.length < 3) { return false }
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i]
    }

    for (let j = arr.length - 2; j > 0; j--) {
        sum2 += arr[j + 1]
        sum -= arr[j]
        if (sum == sum2) { return true }
    }
    return false
}

function balancePointPatrick(arr) {
    console.log(arr);
    let i = 0, j= 1, iSum = 0, jSum = 0; //i is our left hand side iterator, iSum is our left hand side sum; j and jSum for the right hand side
    let max = arr.length;

    for (i; i<j; i++) {
        iSum += arr[i];                 //i always starts from the beginning of the array, and iSum is a running sum up to j which

        for (j = i + 1; j<max; j++) {   //j starts one number after i, so as our "i" for loop increases our j moves over to make a left side / right side dynamic
            jSum += arr[j];
        }
        if (iSum == jSum)               // we have made a left side and right side sum and comparison, if they are equal at any point after an iteration we return true
            return true;
        jSum = 0;                       //we have to reset jSum for the next iteration
    }
    return false;                       //iSum and jSum were never equal, we return false
}
console.log("\n____balancePoint____");
console.log(balancePoint([1,2,3]));
console.log(balancePoint([1,2,3,2,1]));
console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([10,1,2,3,4]));

function balanceIndexPatrick(arr) {
    console.log(arr);
    let i = 0, j= 1, iSum = 0, jSum = 0;
    let max = arr.length;
    
    for (i; i<=j; i++) {                      // we do the same thing as the other function, but this time i overlaps j, making each index/value a potential pivot
        iSum += arr[i];
        for (j = i; j<max; j++) {             // again, j overlaps i for the above reason
            jSum += arr[j];
        }
        if (iSum == jSum) 
            return true;
        jSum = 0;
    }
    return false;
}
console.log("\n____balanceIndex____");
console.log(balanceIndex([1,2,3]));
console.log(balanceIndex([1,2,3,2,1]));
console.log(balanceIndex([1,2,3,4,10]));
console.log(balanceIndex([10,1,2,3,4]));
console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
console.log(balanceIndex([9,9])) // FALSE
console.log(balanceIndex([4,2,2,6])) // TRUE
console.log(balanceIndex([9,1,9])) // TRUE
console.log(balanceIndex([1,8,1,2,3,4])) // TRUE