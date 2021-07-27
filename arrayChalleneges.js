// 1 yummy or I am hungty
function alwaysHungry(arr) {
    let food = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            food = true;
        } 
    }
    if(!food){
        console.log("I\'m hungry");
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// 2 create an array with values higher than cutoff
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3 count of number larger than average
function betterThanAverage(arr) {
    let sum = 0;
    let avg;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(avg);

    var count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > avg){
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4 array reverse
function reverse(arr) {
    // faster way 
    return arr.reverse();

    // second way: works too
    // for(let i =0; i < arr.length / 2; i++){
    //     let temp;
    //     let first;
    //     let last;
    //     temp = arr[i];
    //     arr[i] = arr[arr.length - 1 -i];
    //     arr[arr.length -1 - i] = temp;
    // }
    // return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5 Fibonacci array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(let i = 0; i < n - 2; i++){
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]






