/*
    ! 함수의 종류
    * 사용자 정의 함수 ex) function funcname(){}
    * 기본 제공 함수
    

    ? 용도에 따른함수 종류
    * 1.일반 함수
    * 2.중첩 함수 - 함수 내부에 함수가 있음
    ! 3.콜백 함수 : 함수 실행 결과값을 리턴이 아닌 
    ! 매개변수를 통해 들어온 함수를 호출해서 넘겨주는 방식. (callBack)
    * 넘어온 매개변수(함수) 자체가 콜백함수.
    * 4. 클로저 함수 - 일반적인 함수일 경우 함수 호출에 의해 함수 내부의 실행 구문을
    * 모두 실행하게 되면 함수 내부에서 만든 지역변수는 자동으로 사라지지만 
    * 특정 경우에는 사라지지 않고 남는 경우가 있는데 이 현상(클로저)을 일으키는 함수.
    * 

*/



// ! 중첩함수
//  ? 지역변수처럼 함수 내부에서만 활용하는 함수.

// * case.1 1초에 한 번씩 'hi'출력.

function sayHi(){
    var count=0;
    setInterval(function(){
        count++;
        document.write(count+"hi <br>");
    },1000)
}

function innerFunctionTest(){
    var a=10;
    var b=20;
    var c=30;
    function outerFunc(){
        var b=200;
        var c=300;
        function innerFunc(){
            var c=3000;
            console.log(a);
            console.log(b);
            console.log(c);
        }
        innerFunc();
    }
    outerFunc();
}


// *case.2 callback function calculator

function calculatorCallBack(op,num1,num2,callBack){
    var result='';


    switch(op){
        case "+":
            result = add(num1,num2);
            break;
        case "-":
            result = sub(num1,num2);
            break;
        case "*":
            result = mul(num1,num2);
            break;
        case "/":
            result = div(num1,num2);
            break;
        default:
            result = "wrong";
            break;
    }

    function add(num1,num2){
        return num1+num2;
    }
    function sub(num1,num2){
        return num1-num2;
    }
    function mul(num1,num2){
        return num1*num2;
    }
    function div(num1,num2){
        return num1/num2;
    }

    callBack(result);
}

function addPrint(value){
    document.write('plus is '+value);
}
function subPrint(value){
    document.write('sub is '+value);
}
function mulPrint(value){
    document.write('mul is '+value);
}
function divPrint(value){
    document.write('div is '+value);
}



// *case.3 return vs callback
// ? 단순 value는 return이 편함


// *case.4 synchronized 


// *동기
function sync(){
    alert('hi'); // 여기서 물림
    document.write('end alert');
    console.log('end alert & write');
}

// *비동기
// ! 비동기 처리는 콜백함수에 강하다.(주로 사용)
// ! 함수 호출 이후 끝나는 것과 상관 없이 다음 구문 수행.

function async(){
    var count = 1;
    setInterval(function(){
        document.write('2.count = ' + count + '<br>');
    },3000);

    document.write('1.동작과 상관없이 바로 실행');
}


// ! 동기는 페이지 전체를 reload한다.
// ! 비동기는 페이지의 일부분을 reload를 한다.

// ! 비동기 방식인것을 동기 처리하면 문제가 생길 수는 있다.

// *case.5 클로저
// ? 함수내부에 만든 지역변수가 안죽고 계속해서 값을 유지하고 있는 상태.
// *일반함수


function createCount(){
    
    var count=0;

    function addCount(){
        count++;
        return count;
    }
    return addCount;
    
}
var counter = createCount();

