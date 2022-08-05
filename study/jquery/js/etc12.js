var currentIndex1=0;
var currentIndex2=0;
var logos=["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];

var $banner1=null;
var $banner2=null;

$(document).ready(function(){
    var speed1=parseInt(prompt("input speed1"));
    var speed2=parseInt(prompt("input speed2"));
    init();
    swap($banner1,speed1,currentIndex1);
    swap($banner2,speed2,currentIndex2);
})

function init(){//초기화함수
    $banner1=$("#banner1");
    $banner2=$("#banner2");
}

function swap(obj,speed,currentIndex){
    setInterval(function(){
        var logoName="images/"+logos[currentIndex];
        obj.attr("src",logoName);
        currentIndex++;
        console.log(currentIndex);
        if(currentIndex==logos.length){
            currentIndex=0;
        }
    },speed)
}


