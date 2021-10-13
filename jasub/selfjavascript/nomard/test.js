const title = document.querySelector(".hello h1");

function titleClick(){
    if(title.style.color == "blue")
    {
        title.style.color = "tomato";
    }
    else if(title.style.color == "tomato")
    {
        title.style.color="blue";
    }
    else{
        title.style.color="blue";
    }
}


title.addEventListener("click",titleClick);
// 1. element를 찾아라
// 2. event를 listen
// 3. event를 반응