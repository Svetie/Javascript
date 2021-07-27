let arr2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// arr2d[0][2];
// array[1][1];

function printAll2d(arr2d){
    //console every element individuaally

    for(let i = 0; i < arr2d.length; i++){
        for(let n = 0; n < arr2d[i].length; n++) {
            console.log(arr2d[i][n]);
        } 
    }
}

printAll2d(arr2d);

function flatten(arr2d){
    let newArr = [];
    for(let i = 0; i < arr2d.length; i++){
        for(let n = 0; n < arr2d[i].length; n++) {
            newArr.push(arr2d[i][n]);
        } 
    }
    return newArr;
}

console.log(flatten(arr2d));

