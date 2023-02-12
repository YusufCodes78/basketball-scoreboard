let score1 = document.getElementById("homescore");
let score2 = document.getElementById("guestscore");
var num1=0;
var num2=0;

function plusOne(){
    num1 += 1;
    score1.innerHTML = num1;
}
function plusTwo(){
    num1 += 2;
    score1.innerHTML = num1;
}
function plusThree(){
    num1 += 3;
    score1.innerHTML = num1;
}
function plusOneG(){
    num2 += 1;
    score2.innerHTML = num2;
}
function plusTwoG(){
    num2 += 2;
    score2.innerHTML = num2;
}
function plusThreeG(){
    num2 += 3;
    score2.innerHTML = num2;
}