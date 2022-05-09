//? 전역변수
const vertical = $(".vertical");
const horizontal = $(".horizontal");
const target = $(".target");

var score = $(".score");
var count=0;

console.log(target);
$(document).ready(function(){
    setInterval(function(){
        var result1 = Math.floor(Math.random()*(100-0)+0);
        var result2 = Math.floor(Math.random()*(100-0)+0);
        $("#shoot").css({
            "left":result1+"%",
            "top":result2+"%"
        });
    },700);
});


//? 클릭시 실행 함수



// ?===========================================================
// ?조준점
function testfunc(event){
    const x = event.clientX;
    const y = event.clientY;
    vertical.css("transform",`translateX(${x}px)`);
    horizontal.css("transform",`translateY(${y}px)`);
    target.css({
        "transform":`translate(${x}px,${y}px)`
    });
    score.css({
        "transform":`translate(${x}px,${y}px)`
    });
}
$(document).mousemove(testfunc);



