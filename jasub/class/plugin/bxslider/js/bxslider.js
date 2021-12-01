/*
    ? plugin(동적구현에 목적)->api(가져와 쓰는 것에 목적)
    *slider를 내가 만들지 않아도 쓸 수 있는것.<plugin>
    *우편번호를 내가 다 조사하지 않아도 쓸 수 있는것.<api>

    ! why plugin?
    * slider를 만든다. > slider의 퀄리티 수준에 따라
    * 난이도/ 제작시간이 다름
    * 이미 만들어져 있는 slider가 있다.->편하게 가져다 쓸 수 있음.
    

    ! plugin 자체를 너무 과도하게 사용할 경우
    * ex)
    * plugin A(slider) // plugin B(gallery) -> 제작자가 다름
    * code flow 역시 다름
    * a plugin - object 위주
    * b plugin - function 위주 --> a vs b 충돌
*/

$(document).ready(function(){
    $(".slider").bxSlider({
        // !general
        mode: 'horizontal', //? https://bxslider.com/options/
        speed: 750,
        ticker: false,
        tickerHover:true,
        // *startSlide , randomStart break
        startSlide: 0,  // *시작시 슬라이드
        randomStart:false,
        // *+@ :admin기능 'random으로 slide 시작' ex)togglebutton
        // -> randomStart를 조작 가능.


        // *infiniteLoop , hideControlOnEnd break
        infiniteLoop:true,
         //? slide 전환 무한 반복
        hideControlOnEnd:false,
        //? prevBtn(처음 인덱스) / nextBtn(마지막 인덱스) 삭제

        // *adaptiveHeight
        adaptiveHeight:true,
        //? slide 내 img 높이에 따라 frame 높이변환.
        adaptiveHeightSpeed:2000,
        //? adaptiveHeight가 적용되는 시간.
        easing:'ease-in-out',
        //? css timing function 사용 가능 defalut는 null, 잘 사용 안함
        captions:true,
        //? title show ,default:false
        video:true
        //! default: false. video미사용시 절대 활성화 하지 말것

            
    });

    
    
});
// * 만약 plugin 설정 후 오류가 발생하면 다른 plugin 사용