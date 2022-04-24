$(document).ready(() => {
    $(".menu > li").on("mouseover", (event) => {
        let right = 15;
        let width = 0;
        let that = event.target
        while(!$(that).hasClass("item")) {
            that = $(that).parent("li")[0] ? $(that).parent("li")[0] : $(that).parent()[0];
            console.log(that);
        }
        $(".menu > li:not(.hover)").each((index, item) => {
            if(that == item) {
                width = $(item).css("width");
                return false;
            }
            else right += parseInt($(item).css("width"), 10);
        });
        $(".menu > li.hover").css({
            right: right,
            width: width,
            transform: "scaleX(1)"
        });
    });
    $(".menu > li").on("mouseout", () => {
        $(".menu > li.hover").css("transform", "scaleX(0)")
    })
    new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {delay: 5000}
    })
    new Swiper ('.swiper-special-part', {
        slidesPerView: 4,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {delay: 5000}
    })
    new Swiper ('.swiper-body-part', {
        slidesPerView: 6,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {delay: 5000}
    });

    $(".go-to-top").on("click", () => {
        $("html, body").animate({scrollTop: 0});
    })
});