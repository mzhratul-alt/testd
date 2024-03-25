$(function () {
    $(".hero_slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        dots: true,
    });

    $(".new_arrival_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: '<i class="slider_arrow fa-solid fa-long-arrow-left"></i>',
        nextArrow: '<i class="slider_arrow fa-solid fa-long-arrow-right"></i>',
    });
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
