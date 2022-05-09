var count=0;
var $score=null;
var $circle=null;
var $btnStart=null;
var $panel=null;
var playState=false;
var timerID=0;

$(document).ready(function(){
    init();
    initEvent();
});

function init(){
    $score=$("#score");
    $circle=$("#circle");
    $btnStart=$("btn_start");
    $panel=$(".panel");
}
function initEvent(){
    $btnStart.click(gameStart);
    $circle.click(ScoreCount());
}
function gameStart(){
    playState=true;
    if(playState==true){

        timerID=setInterval(moveCircle,500);
    }
}
function moveCircle(){
    var panelWidth = $panel.width();
    var circleWidth = $circle.width();
    var panelHeight = $panel.height();
    var circleHeight= $circle.height();
    $circle.css({
        left:Math.floor(Math.random()*(panelWidth-circleWidth)),
        top:Math.floot(Math.random()*(panelHeight-circleHeight))
    })
}

