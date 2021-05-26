gsap.registerPlugin(ScrollTrigger);
var tl= gsap.timeline();

// #principal 


tl.from('.container__titulo',{
    y: '-50%',
    opacity:0,
    duration: 2,
    ease: "power4.out"
});

tl.from('.logo_hero',{
    y: 50,
    opacity:0,
    ease: "power2.easeOut",
    duration:1
}, "-=1.5");

gsap.from('.cls-2',{
    stagger: .3,
    scale:0.1,
    duration:1,
    ease: "back.out(1.7)"
});


//#proyectos

gsap.from('.anim1',{
    scrollTrigger:{
        trigger: '.anim1',
        start: "top bottom"
    },
    x: '-50%',
    opacity:0,
    duration: 2,
    ease: "power1.easeOut"
},"-=1");

/* tl.from('.anim1', {
    x:-30,
    stagger:.05,
    duration:.5,
    ease: "power1.easeOut"

},"-=1.5"); */

// #HERRAMIENTAS 
gsap.from('.card__herramientas', {
    scrollTrigger:{
        trigger: '.card__herramientas',
        start: "top bottom"
    },
    y: 100,
    stagger:.3,
    duration:.6,
    ease: "power1.easeOut"

},"-=1.5"); 



