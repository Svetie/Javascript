
function acronym(str) {
    let acr = '';
    acr += str[0];
    // console.log(acr);
    for(let i = 0; i < str.length; i++){
        if(str[i-1] == ' '){
            acr += (str[i]);
        }
    }
    return acr.toUpperCase();
}


console.log(acronym('bla carry o'));


function reverseString(str) {
    newStr = '';
    for(i = 0; i < str.length; i++){
        newStr += str[str.length - 1 - i];
    }
    return newStr;

}

console.log(reverseString('lksdjfd'));

