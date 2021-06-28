// let times = 0;


// //query selector
// function buttonClicker() {
//     times++;
//     let header = document.querySelector('#counter');
//     header.innerHTML = times; // between inner and outer tag
// }

let isFlipped = false;
function cardClick(element) {
    if(isFlipped){
        element.src = "images/back.jpg";
    }
    else {
        element.src = "images/bidoof.jpg";
    }
    isFlipped = !isFlipped;
}