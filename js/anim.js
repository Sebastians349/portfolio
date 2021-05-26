gsap.registerPlugin(ScrollTrigger);
var tl= gsap.timeline();

tl.from('.container__titulo',{
    y: '-50%',
    opacity:0,
    duration: 2,
    ease: "power4.out"
});

tl.from('.logo_hero',{
    y: 50,
    opacity:0,
    ease: "Power2.easeOut",
    duration:1
}, "-=1.5");

