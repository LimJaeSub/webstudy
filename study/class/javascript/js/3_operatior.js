/*
    ? 기본사칙연산자.
    * +, -, *, /, % 나머지, ()우선.
    ? 문자열연산자.
    * + 만 가능.
    ? 복합 대입 연산자.
    * +=, -=, *=, /=, %= : 기존 변수의 값에 값을 연산함.
    * var a = a + 10; -> a += 10;
    
    ? 증감 연산자.
    * ++, -- : 1씩 증가 및 감소.
    ? 조건비교 연산자.
    * >=, <=, >, <, ==(같다), !=(다르다) ? ! : 논리부정연산자.(ex> true -> !true -> false)
    ? 논리 연산자.
    * && : 그리고, || 이거나
    ? 접근 연산자.
    * .
*/
// *case.1 10이 저장된 변수a, 숫자20, 그리고 30을 더해서 result 변수에 저장 후 출력.
function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}
// *case.2 50이 저장된 변수a, 20이 저장된 변수 b. 를 곱한 값을 10으로 나누어 result변수에 저장 후 출력
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b / 10;
    console.log(result);
}
// todo.1 숫자 5를 2로 나누었을 때 나머지 값이 몇인지 result 변수에 저장 후 출력.
function numbOP3(){
    var result = 5%2;
    console.log(result);
}
// todo.2 'hello' 가 담긴 변수 a와 'WEB'이 담긴 변수 b를 합쳐 'Hello WEB'을 출력.
function stringOP(){
    var a = 'Hello';
    var b = 'WEB';
    console.log(a + b);
}
// *case.3 ul, li 구조의 tag를 html page에 넣기.
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JS..!</li>';
    list += '</ul>';

    document.body.innerHTML = list;
}
// *case.4 연산자가 뒤로 올 경우.
function numberPlusAfter(){
    var number = 10; //? number 라는 변수의 선언 및 10으로 초기화.
    console.log(number++); //? 10
    console.log(number++); //? 11
    console.log(number++); //? 12
    // *이전부분이 수행되지 아니했을 때 , 다음부분이 수해되지 못한다.
}

function numberPlusbefore(){
    var num = 10;
    console.log(++num);
    console.log(++num);
    console.log(++num);
    console.log(num);
}

function numberPlusTodo(){
    //var num = 10;
    var num = prompt("input num","inpu num here");
    console.log(num++); //10
    console.log(--num); //10
    console.log(++num); //11
    console.log(num--); //11
    console.log(num); //10

    // =================================
    
}

function compareNum(){
    var a = prompt("input num a","");
    var b = prompt("input num b", "");
    var result = a>b;
    if(result==true){
        console.log("the reslut is true");
    }
    else if(result==false){
        console.log("the result is false");
    }
    //console.log(a + " > " + b + result);
}


function compareNum2(){
    var a = prompt("input num a","");
    var b = prompt("input num b", "");
    var result = a == b ? "result is true":"result is false";
    console.log(result);
}




function compareOperator3(){
    var a = prompt("input num a","");
    var b = prompt("input num b", "");
    var result = a!=b ? "different" : "same";
    console.log(result);
}

//*case.8 

function logicalOperator1(){
    var a="여자";
    var b="웹디자이너";
    var result = (a=='여자')&&(b=='웹디자이너');
    console.log(result);
}

// *case.9

function logicalOperator2(){
    var a="남자";
    var b="웹퍼블리셔";
    var compareA = prompt("남자?여자?","");
    var compareB = prompt("직업", "");
    var result = (a==compareA)||(b==compareB);
    console.log(result);
}

// *TODO function

function TODOfunction1(){
    console.log(30 > 20 > 10); //false
    
    /* 
    true == 1
    false == 0
    30>20 == true == 1
    1>10 == false 
    결과 : false
    */
}
function TODOfunction2(){
    var result1 = 30>20;
    var result2 = 20>10;
    //var result = result1&&result2;
                        

    var result = 30>20 ? (20>10 ? true : false) : false ;

    console.log(result);
}
