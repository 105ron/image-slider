const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imageStrip = document.getElementById('image-strip');
const imageClass = {
  0: 'image-0',
  1: 'image-1',
  2: 'image-2',
  3: 'image-3',
  4: 'image-4',
};
const bullets = document.getElementsByClassName('bullets');
let imagePosition = 0;
let now;
let then = Date.now();
let interval = 5000;
let delta;


const toggleImageClass = function toggleImageClass(position) {
  bullets[position].classList.toggle('active');
  imageStrip.classList.toggle(imageClass[position]);
};

const resetTimer = function resetTimer() {
  then = Date.now() //reset timer on click
};

const moveRight = function moveRight() {
  resetTimer();
  toggleImageClass(imagePosition);
  imagePosition = (imagePosition === 4) ? 0 : imagePosition + 1;
  toggleImageClass(imagePosition);
};

rightArrow.addEventListener("click", function() {
  moveRight();
}, false);


leftArrow.addEventListener("click", function() {
  resetTimer();
  toggleImageClass(imagePosition);
  imagePosition = (imagePosition === 0)? 4 : imagePosition - 1;
  toggleImageClass(imagePosition);
}, false);

const moveToBulletClick = function moveToBulletClick() {
  resetTimer();
  toggleImageClass(imagePosition);
  imagePosition = parseInt(this.getAttribute("data-position"));
  toggleImageClass(imagePosition);
}

Array.from(bullets).forEach(function(element) {
  element.addEventListener('click', moveToBulletClick);
});

(function autoSlide() { 
    requestAnimationFrame(autoSlide);
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
      moveRight();
    }
}());