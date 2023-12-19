gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
tl.to('#img-container .back-img', {
    scrollTrigger: {
        trigger: '#main-container',
        start: 'bottom 40%',
        scrub: 2,
        end: '80% top+=100px',
        // markers: true
    },
    opacity: 0
});
