// $(document).ready(function(){
//     var $circle = $("#circle");
//     var runStep = 10;
//     var xpos = $circle.position().left;
//     var railWidth = $("#rail").width();
//     var timerID=0;

//     startMove($circle,runStep,xpos,railWidth,timerID);
// });

// function startMove($circle,runStep,xpos,railWidth,timerID){
//     $("#btn_start").click(function(){
//         timerID=setInterval(function(){
//             xpos+=runStep;
//             $circle.css({
//                 'left':xpos
//             });
//             if(xpos>railWidth||xpos<0){
//                 runStep*=-1;
//             }
//         },0);
//         return stopMove(timerID);
//     });
// }
// function stopMove(timerID){
//     $("#btn_stop").click(function(){
//         clearInterval(timerID);
//     });
// }
// TODO. 함수 구조 분리
// var isClick = 0;
// $(document).ready(function(){
//     var $circle=$("#circle");
//     var $startbtn=$("#btn_start");
//     var $stopbtn=$("#btn_stop");
//     clickbtn($startbtn,$stopbtn,isClick);
//     MoveCircle(isClick);
// });

// function clickbtn(start,stop,isClick){
//     start.click(function(){
//         isClick=1;
//     });
//     stop.click(function(){
//         isClick=0;
//     });
//     return MoveCircle(isClick);
// }



// function MoveCircle(isClick){
//     if(isClick==1){
        
//     }
//     else if(isClick==0){
       
//     }
// }


//! solve

var $circle=null;
var railWidth=null;
var runStep =10;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
})
function init(){
    $circle=$("#circle");
    railWidth=$("#rail").width();
}


function initEvent(){
    $('#btn_start').click(function(){
        moveStart();
    })
    $("#btn_stop").click(function(){
        moveStop();
    })
}


function movestart(){
    if(timerID==0){
        timerID=setInterval(function(){
            moveCircle();
        },0);
    }
}


function moveCircle(){
    var xpos = $circle.position().left;
    xpos+=runStep;
    $circle.css({
        left:xpos
    });
    if(xpos>railWidth || xpos<0){
        runStep*=-1;
    }
}


function moveStop(){
    clearInterval(timerID);
    timerID=0;
}



