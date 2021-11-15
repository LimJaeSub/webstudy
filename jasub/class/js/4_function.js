var num1 = 10,num2 = 20;
function sumParam(a,b){
    var result = a+b;
    console.log(result);
}



// *arguments
function sumAll(){
    var willReturn = 0;
    for(var i in arguments){
        willReturn+=arguments[i];
    }
    return willReturn;
}
// *argument는 배열 형태로 반환한다.



//* case. argument check
function showInfo(){
    for(var i in arguments){
        console.log("index["+i+"] ="+arguments[i]);
    }
}



//* case return

// function f(x){
//     var result = x*x;
//     return result;
// }
// alert(f(9));


// function sumReturn1(num1,num2){
//     var result = num1+num2;
//     return result;
// }

//* case 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
//! 입력값이 0이면 실행 중지

function infiniteSum(){
    var sum=0;
    var count=1;
    while(true){
        var value = parseInt(prompt("숫자를 입력하세요."));
        if(value==0){
            document.write('종료');
            return;
        }

        sum=sum+value;
        document.write(count+'.'+sum+'<br>');
        count++;
    }
    document.write('총'+count+'번실행');
}



// * case 구구단 출력 복습(다중for문)

function printGuguDan(x){
    for(var i =2; i<=x;i++){
        document.write(i+'단 출력','<br>');
        for(var j=1;j<=9;j++){
            document.write(i+'x'+m+'='+(i*m),'<br>')
        }
        document.write('<br>');
    }
}



// todo. 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수.(계산기)

/* 
    ?실행구문
    ?document.write(calculator("+",20,10)); ==> 연산이 되어야 함.
    ! %넣었을때 ==> 잘못된 연산자 입니다.
*/


// function calculator(op,num1,num2){
//     var result;
//     switch(op){
//         case '+':
//             result = num1+num2;
//             break;
//         case '-':
//             result = num1-num2;
//             break;
//         case '*':
//             result = num1*num2;
//             break;
//         case '/':
//             result = num1/num2;
//             break;
//         case '%':
//             result = "잘못된 연산자 입니다."
//             break;
//     }

//     return result;
// }


// document.write(calculator("+",20,10));


// TODO 2. 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 편하게 사용 할 수 있게 만들기

// function add(num1,num2){
//     var result = num1+num2;
//     return result;
// }
// function sub(num1,num2){
//     var result = num1-num2;
//     return result;
// }
// function mul(num1,num2){
//     var result = num1*num2;
//     return result;
// }
// function div(num1,num2){
//     var result = num1/num2;
//     return result;
// }


// function calculator(op,num1,num2){
//     var result;
//     switch(op){
//         case '+':
//             result = add(num1,num2);
//             break;
//         case '-':
//             result = sub(num1,num2);
//             break;
//         case '*':
//             result = mul(num1,num2);
//             break;
//         case '/':
//             result = div(num1,num2);
//             break;
//         case '%':
//             result = "잘못된 연산자 입니다."
//             break;
//     }

//     return result;
// }
// var op = prompt("사칙연산 입력");
// var num1 = parseInt(prompt("첫번째 숫자 입력"));
// var num2 = parseInt(prompt("두번째 숫자 입력"));

// document.write(calculator(op,num1,num2)+"<br>");
// document.write(add(num1,num2)+"<br>");
// document.write(sub(num1,num2)+"<br>");
// document.write(mul(num1,num2)+"<br>");
// document.write(div(num1,num2)+"<br>");





// *case 함수를 변수에 담기.
function hello(name){
    console.log(name+'wellcome');
}

// *case 매개변수 값으로 함수 사용

function hi1(){
    console.log('hello');
}

function hi2(){
    console.log('hi');
}
function execute(func){
    func();
}



// *case  button click시 매개변수 값으로 넘긴 함수 호출
function welcome(){
    document.write("환영합니다");
}
var clickbutton = document.querySelector("#runEx8");
$(document).ready(function(){
    $(clickbutton).click(welcome);
});

// *case 1초마다 매개변수 값으로 넘긴 익명함수 호출.

function loopStart(){
    setInterval(welcome,1000);
}



