gsap.registerPlugin(ScrollTrigger);
var tl= gsap.timeline();

tl.from('.container__titulo',{
    y: '-50%',
    opacity:0,
    duration: 2,
    ease: "power4.out"
})