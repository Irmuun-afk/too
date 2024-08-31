var reset = document.querySelector('.reset');
var dPoint = document.querySelector('.dPoint');
var iPoint = document.querySelector('.iPoint');
var to = document.querySelector('.to');
var rCount=0;
function restart(){
    rCount=0
    to.innerText = "0"
}
function has(_dPoint){
    rCount--;
    to.innerText = "" +rCount;
}
function nem(_iPoint){
    rCount++;
    to.innerText = "" +rCount;
}
