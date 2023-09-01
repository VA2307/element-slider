const sliderItemsArr = document.querySelectorAll('.slider__item');
const sliderNavNext = document.querySelector('.slider__arrow_next');
const sliderNavPrev = document.querySelector('.slider__arrow_prev');
const sliderDotsArr = document.querySelectorAll('.slider__dot');

if(sliderItemsArr.length === sliderDotsArr.length) {
    
    sliderNavNext.addEventListener('click', () => {
        const currentItem = document.querySelector('.slider__item_active');
        const nextCurrentItem = currentItem.nextElementSibling || sliderItemsArr[0];
    
        const currentDot = document.querySelector('.slider__dot_active');
        const nextCurrentDot = currentDot.nextElementSibling || sliderDotsArr[0];
    
        currentItem.classList.remove('slider__item_active');
        currentDot.classList.remove('slider__dot_active');
    
        nextCurrentItem.classList.add('slider__item_active');
        nextCurrentDot.classList.add('slider__dot_active');
    });
    
    sliderNavPrev.addEventListener('click', () => {
        const currentItem = document.querySelector('.slider__item_active');
        const prevCurrentItem = currentItem.previousElementSibling || sliderItemsArr[sliderItemsArr.length - 1];
    
        const currentDot = document.querySelector('.slider__dot_active');
        const prevCurrentDot = currentDot.previousElementSibling || sliderDotsArr[sliderDotsArr.length - 1];
    
        currentItem.classList.remove('slider__item_active');
        currentDot.classList.remove('slider__dot_active');
    
        prevCurrentItem.classList.add('slider__item_active');
        prevCurrentDot.classList.add('slider__dot_active');
    });

    for (let i = 0; i < sliderDotsArr.length; i++) {
        sliderDotsArr[i].addEventListener('click', () => {
            const currentDot = document.querySelector('.slider__dot_active');
            currentDot.classList.remove('slider__dot_active');
            sliderDotsArr[i].classList.add('slider__dot_active');
    
            const currentItem = document.querySelector('.slider__item_active');
            currentItem.classList.remove('slider__item_active');
            sliderItemsArr[i].classList.add('slider__item_active');
        });
    }
}
