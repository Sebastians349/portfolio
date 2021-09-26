gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

// #principal

tl.from('.container__titulo', {
  y: '-100%',
  opacity: 0,
  duration: 2,
  ease: 'power1.out',
});

tl.from(
  '.logo_hero',
  {
    y: 50,
    opacity: 0,
    ease: 'power2.easeOut',
    duration: 1,
  },
  '-=1.5'
);

gsap.from('.cls-2', {
  stagger: 0.3,
  scale: 0.1,
  duration: 1,
  ease: 'back.out(1.7)',
});

//#proyectos

gsap.from(
  '.anim1',
  {
    scrollTrigger: {
      trigger: '.anim1',
      start: 'top bottom',
    },
    x: '-50%',
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power1.easeOut',
  },
  '-=1'
);

/* tl.from('.anim1', {
    x:-30,
    stagger:.05,
    duration:.5,
    ease: "power1.easeOut"
},"-=1.5"); */

// #HERRAMIENTAS
gsap.from(
  '.card__herramientas',
  {
    scrollTrigger: {
      trigger: '.card__herramientas',
      start: 'top bottom',
    },
    y: 100,
    stagger: 0.3,
    duration: 0.6,
    ease: 'power1.easeOut',
  },
  '-=1.5'
);

// CONTACTO

/* gsap.from('.button', {
    y:30,
    duration:1,
    ease: "Bounce.easeOut.config(1,0.3)"
},"-=2"); */

gsap.from('.button', {
  scrollTrigger: {
    trigger: '.button',
  },
  duration: 2.5,
  ease: 'elastic.out(1,0.2)',
  x: -100,
});

////////// snippet para animacion tipeo a maquina FIX mejorar perfomance haciendolo solo en CSS///////

let TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  let that = this;
  let delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  let elements = document.getElementsByClassName('txt-rotate');
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);
};
