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

/*
    문자열 위치 찾기(indexof)

    indexof(searchValue, start)
    searchValue:찾는 문자열
    start:시작 위치(default : 0)
    return value : 찾는 문자열의 index값 , 못찾는 경우 -1
*/

function findString(){
    var str = prompt('input');
    var result = str.indexOf('example');
    if(result==-1){
        alert("존재하지 않음");
    }
    else if(result>=0){
        alert(result+"번째 위치");
    }
}

/*
    특정 위치에 문자 추가.
    slice(start,end)
    매개변수 = start : 문자열 시작 위치, end : 문자열 끝 위치
    리턴값 : 지정된 문자열

    substr(start,length)
    매개변수 = start : 문자열 시작 위치, length:시작위치부터 복사할 길이
    리턴값 : 지정한 문자열
*/

function sliceText(){
    var str="Abcdef";
    var strSlice = str.slice(1,3);
    console.log(str);
    console.log(strSlice);
}
function subStringText(){
    var str="abcdef";
    var sub=str.substr(2,2);
    console.log(str);
    console.log(sub);
}

//TODO
function sliceAddText(){
    var str = "Mak";
    console.log(str.slice(0,2)+"r"+str.slice(2,3));
}
function subStrAddText(){
    var str="MakStark";
    console.log(str.substr(0,2)+"r");
    console.log(str.substr(2,6));
}

/*
    특정 위치 문자 변경
    replace(searchvalue, newvalue)
    매개변수 = searchvalue : 찾는 문자 , newvalue : 교체 문자
    리턴값 : 찾는 문자를 교체 문자로 변경.
*/

function changeName(){
    var data = "hi,?. welcome";
    var result = data.replace("?","jasub");
    console.log(result);    
}

function deleteText(){
    var data="mark-II"
    var result = data.replace("-","");
    alert(result);
}


$(document).ready(function(){
    var $numbIn = $("#numbInput");
    var $numbOut = $("#numbOutput");

    $("#confirm").click(function(){
        var numbVal = $numbIn.val();
        var result = money(numbVal);
        $numbOut.html(numbVal + "=>" + result);
    });
});

function money(str){
    if(str.length <= 3){
        return str;
    }

    var loopCount = Math.floor((str.length - 1) / 3);

    /*
        ? 반복횟수
        * ex> 123456789= length 9. 9/3 = 3floor 내림정수값 3.
        * -1 = length 8. 8/3 = 2.666.... floor 내림정수값 2.
    */
    var result = ''; //? 최종결과 담을 변수

    for(var index = 0; index < loopCount; index++){
        var strLength = str.length; //? 입력받은 값 길이.
        var cutStr = str.substr(strLength-3, strLength); //?
        result = ","+cutStr+result; //?
        str = str.slice(0, strLength-3); //?
        /*
            ? 중간에 , 삽입.
            * ex> 123456789
            * 1. result = ,789 + "";, str = 123456;
            * 2. result = ,456 + ,789;, str = 123;
            * fin. result = ,456,789; + str = 123;
        */
    }
    result = str + result; //? 123 + ,456,789; 

    return result; //? 최종결과 return(호출부)
}