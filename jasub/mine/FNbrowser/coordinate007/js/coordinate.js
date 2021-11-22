$(document).ready(function(){
    setInterval(function(){
        var result1 = Math.floor(Math.random()*(100-0)+0);
        var result2 = Math.floor(Math.random()*(100-0)+0);
        console.log(result1);
        console.log(result2);
        $("#shoot").css({
            "left":result1+"%",
            "top":result2+"%"
        });
    },700);
});
const vertical = $(".vertical");
const horizontal = $(".horizontal");
const target = $(".target");
const score = $(".score");

function testfunc(event){
    const x = event.clientX;
    const y = event.clientY;
    //console.log(`${x} ${y}`);

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

//1.마우스가 div를 클릭했을때 <<여기막힘
//2.score++
//3.score에 innerhtml(score);


