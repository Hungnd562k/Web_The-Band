let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const buyBtns = document.querySelectorAll('.js-buy-ticket');
const close = document.querySelector('.js-modal-close');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.js-modal-container');

function showModal() {
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showModal);
}

close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
modalContainer.addEventListener('click', function(even) {
  even.stopPropagation();
})

//close/ open mobile menu
var header = document.querySelector('#header');
var barItem = document.querySelector('#bar-item');
var headerHeight = header.clientHeight;

barItem.onclick = function() {
  var isClose = header.clientHeight;
  if (isClose == headerHeight) header.style.height = 'auto';
  else header.style.height = null; 
}

//autoclose menu mobile
var navBtns = document.querySelectorAll('#nav > li > a[href*="#"]');
for (var i=0; i<navBtns.length; i++) {
  var navBtn = navBtns[i];          

  navBtn.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-nav');
    console.log(isParentMenu);
    if (isParentMenu) event.preventDefault(); 
    else header.style.height = null;
  }
}
