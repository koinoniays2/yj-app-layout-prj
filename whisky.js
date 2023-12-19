gsap.registerPlugin(ScrollTrigger);
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
    });

gsap.to('.content-text', {
    scrollTrigger: {
        trigger: '#main-container',
        start: 'bottom-=300px top+=100px',
        scrub: 1,
        end: '90% top+=200px',
        // markers: true
    },
    display: 'block',
    opacity: 1
});

const img = document.querySelectorAll('img');
const contentText = document.querySelector(".content-text");

//contentText.getBoundingClientRect().bottom //109.796875
window.addEventListener("scroll", function(){
    img.forEach((item) => {
        if(item.getBoundingClientRect().top <= 109) {
            contentText.innerText = item.alt;
        }
    });
});

img.forEach((item, i) => {
    tl.fromTo(item, { x:10 * (i + 1) },
        { scrollTrigger: {
        trigger: item,
        start: `top center`,
        scrub: 1,
        end: `top center-=100px`,
        // markers: true
        }, x: 0 
    });
});