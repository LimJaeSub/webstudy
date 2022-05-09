const MoveScroll = document.querySelector("#Move100pxbtn");
const GoScroll = document.querySelector("#Go100pxbtn");
const specialScroll = document.querySelector("#specialbtn");

const specialPosition = document.querySelector(".special").offsetTop;


function Move100px(){
    window.scrollBy({
        top:100,
        behavior:'smooth'
    });
}
function Go100px(){
    window.scroll({
        top:100,
        behavior:'smooth'
    });
}
function specialfunc(){
    window.scrollTo({
        top:specialPosition,
        behavior:'smooth'
    });
}

MoveScroll.addEventListener('click',Move100px);
GoScroll.addEventListener('click',Go100px);
specialScroll.addEventListener('click',specialfunc);