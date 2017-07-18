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


const toggleImageClass = function toggleImageClass(position) {
  bullets[position].classList.toggle('active');
  imageStrip.classList.toggle(imageClass[position]);
};


rightArrow.addEventListener("click", function() {
  console.log('click');
  toggleImageClass(imagePosition);
  imagePosition += 1;
  toggleImageClass(imagePosition);
}, false);


leftArrow.addEventListener("click", function() {
  toggleImageClass(imagePosition);
  imagePosition -= 1;
  toggleImageClass(imagePosition);
}, false);

const moveToBulletClick = function moveToBulletClick() {
  toggleImageClass(imagePosition);
  imagePosition = this.getAttribute("data-position");
  toggleImageClass(imagePosition);
}

Array.from(bullets).forEach(function(element) {
  element.addEventListener('click', moveToBulletClick);
});