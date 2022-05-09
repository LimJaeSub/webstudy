const h1 = document.querySelector(".hello h1");
console.log(h1);
// function titleClick(){
//     if(title.style.color == "blue")
//     {
//         title.style.color = "tomato";
//     }
//     else if(title.style.color == "tomato")
//     {
//         title.style.color="blue";
//     }
//     else{
//         title.style.color="blue";
//     }
// }



// function titleClick(){
//     const clickedclass = "active";
//     if(h1.classList.contains(clickedclass)){
//         h1.classList.remove(clickedclass);
//     }
//     else{
//         h1.classList.add(clickedclass);
//     }
// }

function titleClick(){
    const clickedClass = "active";
    h1.classList.toggle(clickedClass);
}


h1.addEventListener("click",titleClick);
// 1. element를 찾아라
// 2. event를 listen
// 3. event를 반응