// function rollDie(){
//     //this function should return a random number from 1 to 6
//     var roll = Math.floor(Math.random() * 7 + 1);
//     return roll;
// }

// console.log(rollDie());

function eightBall() {
    var display = Math.floor(Math.random() * 4 + 1); 
    console.log(display);
        switch (display) {
            case 1:
                console.log("Yes");
                break;
            case 2:
                console.log("No");
                break;
            case 3:
                console.log("Not today");
                break;
            case 4:
                console.log("Maybe later");
                break;
            default:
                console.log("the default");
                break;
        }
    }

(eightBall());