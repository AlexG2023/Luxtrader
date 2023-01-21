document.addEventListener("click", menuBody);
function menuBody(event){
	if(event.target.closest('.action__icon_1')){
		document.querySelector('.action__list').classList.toggle('_active');
	}
	if(!event.target.closest('.action__icon_1')){
		document.querySelector('.action__list').classList.remove('_active');
	}
}
document.addEventListener("click", mainMenuBody);
function mainMenuBody(event){
	if(event.target.closest('.header__icon-burger')){
		document.querySelector('.header__list').classList.toggle('_activeMein');
	}
	if(!event.target.closest('.header__icon-burger')){
		document.querySelector('.header__list').classList.remove('_activeMein');
	}
}
// Слайдер
{
let sliderPosition = 0;
const sliderItem = document.querySelectorAll('.slider-about__item'); /*счётчик*//**/
const sliderTrack = document.querySelector('.slider-about__track'); /*сама дорожка*/
const sliderPrev = document.querySelector('.control-slider__arrow_prev');
const sliderNext = document.querySelector('.control-slider__arrow_next');
const sliderWidth = document.querySelector('.slider-about__container').offsetWidth;
sliderPrev.addEventListener("click", prevSlider);
sliderNext.addEventListener("click", nextSlider);
function prevSlider(){
	sliderPosition--;
	if (sliderPosition < 0) {
		sliderPosition = sliderItem.length -1;
	}
	scrollTrack();
}
 function nextSlider(){
	sliderPosition++;
	if(sliderPosition >= sliderItem.length){
		sliderPosition = 0;
	}
	scrollTrack();
}
function scrollTrack(){
	sliderTrack.style.transform = `translateX(${-sliderPosition * sliderWidth}px)`;
}
}
{
	let position = 0;
	const track = document.querySelector('.slider-lots__track');
	const counter = document.querySelectorAll('.slider-lots__item');
	const sliderWidth =document.querySelector('.slider-lots__container').offsetWidth;
	const prev = document.querySelector('.slider-lots__arrov_prev');
	const next = document.querySelector('.slider-lots__arrov_next');
	console.log(sliderWidth)
	prev.addEventListener("click", prevBtn);
	next.addEventListener("click", nextBtn);
	let del;
	let pos;
	
	if(sliderWidth >= 1050){
			del = 3;
			pos = 2;
		} else if (sliderWidth >= 700){
			del = 2;
			pos = 1
		} else if (sliderWidth >= 350){
			del = 1;
			pos = 0;
		}
		let sliderScroll =sliderWidth/del;
	function prevBtn(){
		position--;
		if(position < 0){
			position = counter.length-del;
		}
		scroll();
	}
		function nextBtn(){
		position++;
		if(position >= counter.length-pos){
			position = 0;
		}
		scroll();
	}
	function scroll(){
		track.style.transform = `translateX(${-sliderScroll * position}px)`;
	}
}

{
let sliderPosition = 0;
const sliderItem = document.querySelectorAll('.quotes-slider__item'); /*счётчик*//**/
const sliderTrack = document.querySelector('.quotes-slider__track'); /*сама дорожка*/
const sliderNext = document.querySelector('.slider-quotes__block');
const sliderWidth = document.querySelector('.quotes-slider__container').offsetWidth;
sliderNext.addEventListener("click", nextSlider);
function prevSlider(){
	sliderPosition--;
	if (sliderPosition < 0) {
		sliderPosition = sliderItem.length -1;
	}
	scrollTrack();
}
 function nextSlider(){
	sliderPosition++;
	if(sliderPosition >= sliderItem.length){
		sliderPosition = 0;
	}
	scrollTrack();
}
function scrollTrack(){
	sliderTrack.style.transform = `translateX(${-sliderPosition * sliderWidth}px)`;
}
}
//=============================================================================