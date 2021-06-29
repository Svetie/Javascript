let names = [
    "Kyle Voler",
    "Kim Stone",
    "Valer Joe",
    "Sam Walker",
    "Sponge Bob",
    "Killer Bee"
];


let jane = document.querySelector('#jane');

function changeName(){
    let rand = Math.floor(Math.random() * names.length);
    jane.innerText = names[rand];
}

let todd = document.getElementById('todd');
function removeTodd() {
    todd.remove();
}

let phil = document.getElementById('phil');
function removePhil(element) {
    phil.remove();
}

function changeCursor(elemenent) {
    elemenent.classList.add('hover');
}

let connections = 418;
let con = document.getElementById('Hund');
function increaseConnections() {
    connections++;
    con.innerText = connections;
}

function decreaseConnections() {
    connections--;
    con.innerText = connections;
}

