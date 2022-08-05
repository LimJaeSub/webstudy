/*
    ? img swap banner
    1. 1초에 한 번씩 배열에 넣어놓은 이미지를 순차적으로 전환
    2. image가 무한반복으로 전환되게 만들기
    >> 마지막image -> 0번째 image
*/

var currentIndex = 0; // 배열내 선택변수
var logos=["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
// image가 들어간 배열 = 서버에서 받아온 data라고 가정
var $banner = null; // 배너가 들어가는 변수

$(document).ready(function(){ // !페이지 로드시 실행 함수
    init();
    swap();
    setInterval(swap,1000);
});


function init(){ // !초기화
    $banner = $(".banner");
}
function swap(){ // !배너 swap
    var imgName = "images/"+logos[currentIndex];
    $banner.attr("src",imgName);
    currentIndex++;
    reset();
}
function reset(){ // !배너 배열이 maxlength까지 갔을 경우 0으로 초기화
    if(currentIndex==logos.length){
        currentIndex=0;
    }
}
