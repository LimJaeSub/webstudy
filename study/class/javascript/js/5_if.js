// 현재시간이 오후인가 오전인가
function amOrpm(){
    var date = new Date();
    var hour = date.getHours;

    if(hour<12){
        alert('오전입니다');
    }
    if(hour>=12){
        alert('오후입니다');
    }

}

function mealTime(){
    var date = new Date();
    var hour = date.getHours()

    if((hour>9)&&(hour<10))
    {
        alert("아침");
    }
    else if((hour>12)&&(hour<13))
    {
        alert("점심");
    }
    else if((hour>19)&&(hour<20)){
        alert("저녁");
    }
    else{
        alert("밥먹는시간아님");
    }
}

function userInfoCheck2(){
    var userID = prompt('please input id','ID');
    var userPW = prompt('please input pw','pw');

    if((userID !='Mark')||(userPW !='1234'))
    {
        alert('ID 또는 비밀번호가 틀렸습니다');
    }
    else if((userID =='Mark')&&(userPW=='1234')){
        alert('환영합니다');
    }
}


function calculator(){
    var inputnum1 = parseInt(prompt("첫번째 숫자를 입력하세요","숫자입력"));
    var operator = prompt("사칙연산자중 하나를 입력하세요","입력");
    var inputnum2 = parseInt(prompt("두번째 숫자를 입력하세요", "숫자입력"));

    switch(operator){
        case '+':
            alert(inputnum1+inputnum2);
            break;
        case '-':
            alert(inputnum1-inputnum2);
            break;
        case '*':
            alert(inputnum1*inputnum2);
            break;
        case '/':
            alert(inputnum1/inputnum2);
            break;
    }
}


function lotto(){
    var num = Math.random()*2+1;
    console.log(num);
}