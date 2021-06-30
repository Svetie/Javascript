
// print odd values between 1 and 20
for(var i=1; i < 21; i++){
    if(!(i % 2 ==0 )){
        console.log(i);
    }
}

// print numbers divisible by 3 from 100 to 0
for(var i=100; i>=0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

// print numbers
// 4, 2.5, 1, -0.5, -2, -3.5;

for(let i = 4; i >= -3.5; i = i - 1.5){
    console.log(i);
}

// sum of values 1-100
let sum = 0;

for(let i=1; i < 101; i++){
    sum += i;
}
console.log('the sum is ', sum)

// factorial of numbers 1-12
let product = 1;

for(let i = 1; i < 13; i++){
    product *= i;
}
console.log('the factorial of 12 is', product)