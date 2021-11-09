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