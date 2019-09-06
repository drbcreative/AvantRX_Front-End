/* Menu Background */
const headerMain = document.querySelector('header'),
  animatedLogo = document.querySelector('#animated-logo'),
  staticLogo = document.querySelector('#static-logo');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 992 && window.scrollY > 50) {
    headerMain.classList.remove('show');
  }
});

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 992 && window.scrollY > 50) {
    headerMain.classList.add('show');
    animatedLogo.style.display = "none";
    staticLogo.style.display = "block";
  } else {
    headerMain.classList.remove('show');
    animatedLogo.style.display = "block";
    staticLogo.style.display = "none";
  }
});


/* special animation feature */
const howWorks = document.querySelector('.howitworks');
const featureBox = document.querySelectorAll('.feature-box');
const winHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  if (howWorks.getBoundingClientRect().top < winHeight / 2) {
    featureBox.forEach((box, i) => {
      setTimeout(() => {
        box.classList.add("show");
      }, i * 350);
    });
  } else {
    featureBox.forEach((box, i) => {
      setTimeout(() => {
        box.classList.remove("show");
      }, i * 350);
    });
  }
});



/* FAQs */
const toggleBtn = document.querySelectorAll('.toggle-btn'),
  toggles = [
    'img/question-open.svg',
    'img/question-close.svg'
  ];
let counter = 0;

toggleBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.target;
    // const targetSrc = target.getAttribute('src');
    target.parentNode.querySelector('.message-wrap').classList.toggle('show');

    if (counter === 0) {
      target.setAttribute('src', toggles[1]);
      counter = 1;
      // console.log(counter);

    } else {
      target.setAttribute('src', toggles[0]);
      counter = 0;
      // console.log(counter);

    }
  });
});