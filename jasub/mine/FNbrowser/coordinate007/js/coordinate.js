//? 전역변수
const vertical = $(".vertical");
const horizontal = $(".horizontal");
const target = $(".target");
var score = $(".score");
var count=0;


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
$("#shoot").click(function(){
    // count++;
    // score.text(count);
    console.log("hello");
});


// ?===========================================================
// ?조준점
function testfunc(event){
    const x = event.clientX;
    const y = event.clientY;
    vertical.css("left",x+"px");
    horizontal.css("top",y+"px");
    target.css({
        "left":x+"px",
        "top":y+"px"
    });
    score.css({
        "left":x+"px",
        "top":y+"px"
    });
}
$(document).mousemove(testfunc);



