// mousemove : 해당 element에서 마우스를 움직였을 때
// body에 mousemove 넣으면될지도

var $bodys = $("body");
var $shows = $(".showCoordinate");
console.log($shows);
function showCoordinate(event){
    // console.log(`pageX:${event.pageX}`);
    // console.log(`pageY:${event.pageY}`);
    $shows.html(`pageX:${event.pageX}<br>
    pageY:${event.pageY}`); //좌표 표시 완료
    
}
$bodys.mousemove(showCoordinate);