
function isPal(arr){
    arr1 = arr;
    arr2 = arr.reverse();

    console.log(arr1, arr2)
    for(let i = 0; i < arr1.length; i++) {
        if(!arr1[i] === arr2[i]){
            return "this is a Not Palindrome";
        }
    }
    
}

let result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);



