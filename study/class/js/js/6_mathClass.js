/*
    math class
    1. 수학 관련 기능
    2. random() , max() , min() , floor()
*/

var $numb = null;

function randomNumb(){
    $numb = $("#numb");
    setInterval(showRandom,500);
}

function showRandom(){
    var value = parseInt(Math.random()*50)+50;
    /*
        random method : 0~1 범위에서 0과 1을 포함하지 않는 소수를 random 하게 return
        parseInt : 소수 -> 정수
        random*50 : 0에서 49사이의 정수
    */
    $numb.text(value);
}

function rangeNumb(){
    $numb = $("#numb");
    insertNumb();
}
function insertNumb(){
    var value = prompt("숫자입력",0);
    rangeNumb(value);
}
function rangeNumb(value){
    value = Math.min(100,Math.max(10,value));
    /*
        Math.min/max 
        min : 둘중 작은거 반환
        max : 둘중 큰거 반환
    */
   $numb.text(value);
}

// 총 페이지수 구하기
function pageCount(){
    $numb = $("#numb");
    count(105);
}
function count(postNumb){
    var pages = Math.ceil(postNumb/10);

    /*
        math.floor : 입력값이 실수인경우 내림처리 -> 10.3 => 10
        math.ceil : 입력값이 실수인 경우 올림처리 -> 10.4 => 11
    */
}