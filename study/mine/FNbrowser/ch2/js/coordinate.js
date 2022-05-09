const yellowdiv = document.querySelector(".yellow");

function clickevent(event){
    const rect = yellowdiv.getBoundingClientRect();
    // console.log(event.pageX);
    // console.log(event.pageY);
    // console.log(event.clientX);
    // console.log(event.clientY);
    yellowdiv.innerHTML=`
    pageX=${event.pageX},<br>
    pageY=${event.pageY},<br>
    rect.width=${rect.width},<br>
    rect.height=${rect.height}
    `;
}
yellowdiv.addEventListener('click',clickevent);