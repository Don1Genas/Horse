const { Image } = require("react-native-elements");

let player1 = "player1";
let computer = "computer";


//trigger coin toss
function toss() {
    const coin = document.getElementById("coin");
    // coin.style.animation = "none";
    if (Math.random() <= 0.5) {
    //   coin.style.animation = "flip-heads 3s forwards";
      alert ("Player 1 goes first!")
    } else {
    //   coin.style.animation = "flip-tails 3s forwards";
    alert ("Player 2 goes first!")
    }
  }

  //Choice of shots
// let dunk1 = document.getElementById("windmill");
// let dunk2 = document.getElementById("360");
// let dunk3 = document.getElementById("underleg");

//   let myDunks = [dunk1, dunk2, dunk3];
  
//   function shoot() {
        
//   }


let myDunkArray = ['#d1','#d2','#d3'];

let randomDunkVid = myDunkArray[Math.floor(Math.random()*myDunkArray.length)];

let outputDiv = document.getElementById('dunkVids');

function loadVid(gameShot){
    let select = gameShot.shotSelection.selectedIndex;
    let selectVid = gameShot.shotSelection[select].text;

    alert('selection working');

}
function vidOptions() {
    

}
