var searchBtn = null;
//const rabbit = document.querySelector(".rabbit").offsetTop;
const rabbit = $(".rabbit").offset().top;
$(document).ready(function(){
   init(); 
   initEvent();
})

function init(){
    searchBtn=$("#search");
}
function initEvent(){
    searchBtn.click(function(){
        console.log("hello");
        findCarrot();
    });
}

function findCarrot(){
    window.scrollTo({
        top:rabbit,
        behavior:'smooth'
    });
}