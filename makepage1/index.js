const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".sk-progress svg circle");

var testnum = parseInt(sk_counters[0].innerHTML);





window.addEventListener("scroll",()=>{
    skillsCounter();
})


// Navbar
const stickyNavbar = ()=>{
    header.classList.toggle("scrolled",window.pageYOffset>0);
    // page Y축이 0 이상일 경우에만 header class에 scrolled toggle
}

stickyNavbar();
window.addEventListener("scroll",stickyNavbar);


//Reveal
let sr = ScrollReveal({
    duration:2500,
    distance:"60px",
});

sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-image",{origin:"top",delay:900});


//Skill
const skillsCounter=()=>{
    if(!hasReached(first_skill)) return; //해당페이지가 아닐 경우(false) 함수 return하면서 끝내기
    //true일경우 밑에 코드 실행
    progress_bars.forEach((it)=>(it.style.animation = "progress 2s ease-in-out forwards"));
    //progressbar 모두에게 animation을 적용한다.
    for(var i=0;i<sk_counters.length;i++){
        let strokeValue = 427-427*(parseInt(sk_counters[i].innerHTML)/100);
        console.log(strokeValue);
        progress_bars[i].style.setProperty("--target",strokeValue);
    }
}

const hasReached=(el)=>{
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight>=topPosition+el.offsetHeight){ // skill section으로 갈때마다 발생
       return true;
    }
    else{
        return false; //다른페이지에서 스크롤시 false
    }
}


