gsap.registerPlugin(ScrollTrigger);
/* 이미지 배경 올라오게 하기 */
gsap.to('#img-container .back-img', {
    scrollTrigger: {
        trigger: '#main-container',
        start: 'bottom 40%',
        scrub: 1,
        end: '80% top+=100px',
        // markers: true
    },
    opacity: 0
});

/* Shall we whisky? 글씨 애니메이션 */
let tl = gsap.timeline();
gsap.fromTo('#main-content span:nth-child(1)',
    { x: -400 },
    { x: 0, duration:1 });
tl.fromTo('#main-content span:nth-child(2)',
    { x: 400 },
    { x: 0, duration:1 })
    .to('#main-content span:nth-child(2)',{
        opacity: 0
    })
    .to('#main-content span:nth-child(2)',{
        opacity: 1
    })
    .to('#main-content span' ,{ //fixed된 글씨 없애기 위해
        scrollTrigger: {
            trigger: '#img-container',
            scrub: true,
            start: 'top top+=70px',
            end: 'top top+=70px',
        },
        display: 'none'
    });

/* 헤더 밑 텍스트 바 */
gsap.to('.content-text', {
    scrollTrigger: {
        trigger: '#main-container',
        start: 'bottom-=300px top+=100px',
        scrub: true,
        end: '90% top+=200px',
        // markers: true
    },
    opacity: 1, display: "block"
});

/* 텍스트바 내용 바뀜 */
const img = document.querySelectorAll('img');
const contentText = document.querySelector(".content-text");

//contentText.getBoundingClientRect().bottom //109.796875
window.addEventListener("scroll", function(){
    img.forEach((item) => {
        if(item.getBoundingClientRect().top <= 110) {
            contentText.innerText = item.alt;
        }
    });
});

/* 이미지 스크롤 */
img.forEach((item, i) => {
    tl.fromTo(item, { x:20 * (i + 1) },
        { scrollTrigger: {
        trigger: item,
        start: `top center`,
        scrub: 1,
        end: `bottom center-=100px`,
        }, x: 0 
    });
});


/* 모달 */
const btn = document.querySelector('#single-malt');
const modalBack = document.querySelector('#modal-back');
const modalContainer = document.querySelector('#modal-container');
const closeBtn = document.querySelector('#close-btn');
const toggleBar = document.querySelector("#toggle-bar");

btn.onclick = function() {
    modalBack.style.display = 'block';

}
closeBtn.onclick = function() {
    modalBack.style.display = 'none';

}

window.onclick = function(event) {
  if (event.target === modalBack || event.target === modalContainer) {
    modalBack.style.display = "none";
  }
}
