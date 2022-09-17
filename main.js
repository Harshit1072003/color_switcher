document.getElementById('redbtn').onclick=switchRed;
document.getElementById('bluebtn').onclick=switchBlue;
document.getElementById('greybtn').onclick=switchGrey;
document.getElementById('yellowbtn').onclick=switchYellow;

function switchRed(){
document.getElementsByTagName('body')[0].style.backgroundColor='red';
document.getElementsByTagName('body')[0].style.color='white';
}
function switchGrey(){
document.getElementsByTagName('body')[0].style.backgroundColor='grey';
document.getElementsByTagName('body')[0].style.color='black';
}
function switchBlue(){
document.getElementsByTagName('body')[0].style.backgroundColor='blue';
document.getElementsByTagName('body')[0].style.color='white';
}
function switchYellow(){
document.getElementsByTagName('body')[0].style.backgroundColor='yellow';
document.getElementsByTagName('body')[0].style.color='black ';
}