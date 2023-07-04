var no=Math.random();
var randomNumber1=Math.floor((no*6)+1);
var src1="";
if(randomNumber1===1){
    src1="./images/dice1.png";
}
if(randomNumber1===2){
    src1="./images/dice2.png";
}
if(randomNumber1===3){
    src1="./images/dice3.png";
}
if(randomNumber1===4){
    src1="./images/dice4.png";
}
if(randomNumber1===5){
    src1="./images/dice5.png";
}
if(randomNumber1===6){
    src1="./images/dice6.png";
}
document.querySelector(".dice .img1").setAttribute("src",src1);
var no1=Math.random();
var randomNumber2=Math.floor((no1*6)+1);
var src2="";
if(randomNumber2===1){
    src2="./images/dice1.png";
}
if(randomNumber2===2){
    src2="./images/dice2.png";
}
if(randomNumber2===3){
    src2="./images/dice3.png";
}
if(randomNumber2===4){
    src2="./images/dice4.png";
}
if(randomNumber2===5){
    src2="./images/dice5.png";
}
if(randomNumber2===6){
    src2="./images/dice6.png";
}document.querySelector(".dice .img2").setAttribute("src",src2);
if(src1===src2){
    document.querySelector("h1").innerHTML="DRAW";
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins";
}