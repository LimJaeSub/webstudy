//문자열 만드는 방법

/*
    리터럴 방식 - var str = "hello";
    객체 생성 방식 - var str = new String("hello");
    
*/

// var str = prompt("문자열 입력");
// console.log("길이 :" +str.length);

/*
    특정 문자의 위치 구하기
    charAt(indexNum);

    ex) var char = "ABCDEF"
    charAt(3) == D
*/

function print1ch(){
    var str = prompt("문자열 입력");
    var charCount=0;

    var timerID = setInterval(function(){
        
        $("#panel").text(str.charAt(charCount));
        charCount++;

        //TODO
        if(charCount>str.length+1){
            clearInterval(timerID);
        }

    },1000);
}