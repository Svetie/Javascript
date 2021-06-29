
let countNeil = 9;
let countNichole = 12;
let countJim = 9;


let likesNeil = document.querySelector('#likesNeil');
let likesNichole = document.querySelector('#likesNichole');
let likesJim = document.querySelector('#likesJim');

function likeNeil(){
    countNeil++;
    likesNeil.innerText = countNeil + ' like(s)';
}

function likeNichole(){
    countNichole++;
    likesNichole.innerText = countNichole + ' like(s)';
}

function likeJim(){
    countJim++;
    likesJim.innerText = countJim + ' like(s)';
}