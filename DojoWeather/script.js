// change cursor when hover
function hover(element) {
    element.classList.add('hover');
}

function alertCity(element) {
    alert('Loading weather report...');

}

function accept() {
    let element = document.getElementById('annoying');
    element.remove();
}
let arrVal = document.getElementsByClassName('temp');

let arrCelsius = getArrCel();
console.log(arrCelsius);
let arrFahrengeit = getFahrValues();
console.log(arrFahrengeit);

function convert() {
    for (let i = 0; i, arrVal.length; i++) {
        arrVal[i].innerText = arrFahrengeit[i];
        console.log(arrVal[i]);
        console.log(arrFahrengeit[i]);
    }

    // let element = document.getElementById('showTemp').value;
    // console.log("element" + element);
    //     if(element == "fahrenheit"){
    //     for (let i = 0; i, arrVal.length; i++) {
    //         arrVal[i].innerHTML = arrFahrengeit[i];
    //     }
    // }
    // if(element.value == "celsius"){
    //     for (let i = 0; i, arrVal.length; i++) {
    //         arrVal[i].innerHTML = arrCelsius[i];
    //     }
    // } else {
    //     for (let i = 0; i, arrVal.length; i++) {
    //         arrVal[i].innerHTML = arrFahrengeit[i];
    //     }
    // }
}



function getArrCel() {
    let arrCel = [];
    for (let i = 0; i < arrVal.length; i++) {
        console.log(arrVal[i].innerHTML);
        arrCel.push(parseInt(arrVal[i].innerHTML));
    }
    console.log(arrCel);
    return arrCel;
}

function getFahrValues() {
    let arrCel = getArrCel();
    let arrFahr = [];
    for (let i = 0; i < arrCel.length; i++) {
        let fahr = Math.floor(arrCel[i] * (9 / 5) + 32);
        console.log(fahr);
        arrFahr.push(fahr);
    }
    console.log(arrFahr);
    return arrFahr;
}
