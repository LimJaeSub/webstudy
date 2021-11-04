/*
    ? 형변환
    * js
*/

function agePlus(){
    // Number() 실수/정수 구분이 없다
    
    var age = Number(prompt("input age",""));
    age +=20;
    console.log(age);
}

function forcedString(){
    var a='30';
    var result = 1+a+10;
    console.log(result);
}

function forcedNumber(){
    var result = 2+true;
    console.log(result);
}

function forcedString2(){
    var a = '2' + true;
    console.log(a);
}

/*
    ? String
    * String(value); == 문자형변환.

    ? .toString()
    * Number.toString(); == 문자형변환 ex)(16) ==> 16진수

    ? .toFixed()
    * Number.toFixed(); == 소수점자리수 반올림처리
*/

function stringNumb(){
    var test1 = 15;
    var result = String(test1);
    console.log(typeof(result)+'='+result);
}

function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result)+'='+result);
}

//*case. background-color random

function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xffffff;
        console.log(typeof(bgColor));
        //bgColor = parseInt(bgColor)
        bgColor = bgColor.toString(16);

        $("body").css("background-color","#"+bgColor);
    },1000)
}


function numString(){
    var test = '300';
    var result = parseInt(test) = 10;
    console.log('result=' +result);
}