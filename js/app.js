/* FAQs */
const msgWrap = document.querySelectorAll('.message-wrap'),
  toggleBtn = document.querySelectorAll('.toggle-btn'),
  toggles = [
    'img/question-open.svg',
    'img/question-close.svg'
  ];
let counter = 0;

toggleBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.target;
    const targetSrc = target.getAttribute('src');
    target.parentNode.querySelector('.message-wrap').classList.toggle('show');

    if (counter === 0) {
      target.setAttribute('src', toggles[1]);
      counter = 1;
      console.log(counter);

    } else {
      target.setAttribute('src', toggles[0]);
      counter = 0;
      console.log(counter);

    }
  });
});