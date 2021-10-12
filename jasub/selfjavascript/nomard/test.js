const title = document.querySelector(".hello:first-child h1")
const title2 = document.querySelectorAll(".hello")

function handleTitleClick(){
    alert("hello");
}
function mouseenterfun(){
    alert("mouse is here!");
}

for(var a=0;a<3;a++)
{
    console.log(title2[a]);
}


// title2.addEventListener("click",handleTitleClick)


function handleWindowResize{
    document.body.style.backgroundColor="tomato";
}
window.addEventListener("resize",handleWindowResize)
