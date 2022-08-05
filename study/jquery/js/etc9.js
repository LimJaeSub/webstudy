$(document).ready(function(){
    var count=0;
    var $score = $("#score");
    var $circle=$("#circle");
    var playState = true;

    scoreCount(count,$score,$circle,playState);
});
//? page load 시 게임 시작
//? 5초 시간 동안 play
//? circle 클릭시 score에 점수 출력
//? 5초 후에는 play 종료

function scoreCount(count,$score,$circle,playState){
    $circle.click(function(){//? click시 점수 출력
        if(playState==true){//? play상태 조건
            count++;
            $score.text(count+'점');//? 점수 출력
        }
    });
    setTimeout(function(){
        playState=false;
        alert('게임종료');
    },5000);
}