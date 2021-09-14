
new Swiper(".swiper-container", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView:'auto',
    slidesPerGroup: 1,
});

function popup() {
    const element = document.getElementById('div2');
    element.classList.toggle('swiper-container--hidden');
    document.querySelector('.read__more').classList.toggle('read__more--rotate');
    if(element.classList.contains('swiper-container--hidden')) {
        document.getElementById("p1").innerHTML = "Скрыть";
    } else {
        document.getElementById("p1").innerHTML = "Показать все";
    }
}
