const screen = document.querySelector(".showsize .screen");
const inner = document.querySelector(".showsize .inner");
const outer = document.querySelector(".showsize .outer");

window.addEventListener('resize',resizeEvent);

function resizeEvent(){
    screen.innerHTML=`
        Window screen width = ${window.screen.width} , window screen height=${window.screen.height}
    `;
    inner.innerHTML=`
        Window inner width = ${window.innerWidth} , window inner height=${window.innerHeight}
    `;
    outer.innerHTML=`
        Window outer width = ${window.outerWidth} , window outer height=${window.outerHeight};
    `
}
