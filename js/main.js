const slider = document.querySelector('.cases__carusel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

//

const data = [
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
  "Даём юридические финансовые гарантии выполнения своих обязательств. Более 60 высококвалифицированных специалистов в штате - мы обладаем ресурсами и технологиями для решения любой задачи точно в срок.", 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "",
  ""
];

document.querySelector('.results__row').querySelectorAll('li').forEach( item => {
  item.querySelector('a').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.results__row').querySelector('.results__row-active').classList.remove('results__row-active');
    item.classList.add('results__row-active');
    const id = item.getAttribute('data-id'); 
    document.querySelector('.results__row-subtitle').querySelector('p').innerHTML = '';
    document.querySelector('.results__row-subtitle').querySelector('p').insertAdjacentHTML('afterbegin', data[id-1]);
  });
});

document.querySelector('.work__row').querySelectorAll('li').forEach( item => {
  item.querySelector('a').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.work__row').querySelector('.work--active').classList.remove('work--active');
    item.classList.add('work--active');
    const id = item.getAttribute('data-idnum');
    document.querySelector('.work__blocks-ul').querySelectorAll('.work__blocks-li').forEach(el =>{
      if (id == el.getAttribute('data-idblock')){
        el.classList.remove('none');
      } else {
        el.classList.add('none');
      };
    });
    
  });
});

document.querySelector('.searching').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('.home__search').classList.toggle('none');
});

document.querySelector('#dropdown').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('.dropdown-ul').classList.toggle('none');
});


// Мобильная нафигация
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavButton.addEventListener("click", function(){
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// $(document).ready(function(){
// 	$("nav").on("click","a", function (event) {
// 		event.preventDefault();

// 		const id  = $(this).attr('href'),

// 		top = $(id).offset().top;
		
// 		$('body,html').animate({scrollTop: top}, 1500);
// 	});
// });

// Плавность
$(document).ready(function(){
	$(".mobile-nav").on("click","a", function (event) {
		event.preventDefault();

		const id  = $(this).attr('href'),

		top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});