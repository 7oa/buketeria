var isDesktop = window.matchMedia('(min-width: 1200px)').matches;
$(window).on('load resize', function(){
    isDesktop = window.matchMedia('(min-width: 1200px)').matches;
});

$(window).on('load',function(){
    $('body').removeClass('loaded');
});

$(document).ready(function() {
    //клонируем элементы из мобильной для десктопа
    $('.header-basket').clone().appendTo('.header__d-basket');

    $(document).on('click','.js-menu', function(){
        $(this).toggleClass('open').next().slideToggle();
    });

    $('.js-count').each(function(){
        if($(this).val()==1)
            $(this).siblings('.js-minus').addClass("disabled");
    });


    $(document).on('click','.js-plus',function(){
        var countEl = $(this).siblings('.js-count');
        var count = parseInt(countEl.val());
        countEl.val(++count).trigger("change");
        if(count>1) $(this).siblings('.js-minus').removeClass('disabled');
    });

    $(document).on('click','.js-minus',function(){
        var countEl = $(this).siblings('.js-count');
        var count = parseInt(countEl.val());
        if(count>1) countEl.val(--count).trigger("change");
        if(count==1) $(this).addClass('disabled');
    });

    $(document).on("change",".js-add-mess",function(){
        if($(this).prop("checked")) {
            $(this).parent().next().val("Y");
            $('.js-mess').slideDown();
        }
        else{
            $(this).parent().next().val("N");
            $('.js-mess').slideUp();
        }
    });

    $(".phone").mask("+7 (999) 999-99-99");

    initCatalogSlider();
    initCatalogDetailSlider();

});
$(window).resize(function(){
    $('.catalog-slider').slick('resize');
    $('.catalog-detail-slider').slick('resize');
});
function initCatalogDetailSlider(){
    if($('.catalog-detail-slider').length>0) {
        $('.catalog-detail-slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            variableWidth: true,
            mobileFirst: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}
function initCatalogSlider(){
    if($('.catalog-slider').length>0) {
        $('.catalog-slider').slick({
            dots: false,
            arrows: false,
            infinite: false,
            variableWidth: true,
            mobileFirst: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: "unslick"
                }
            ]
        });
    }
}
function countChar(val) {
    var len = val.value.length;
    var max = $(val).attr('data-max');
    $('#charNum').text(len);
    if (len >= max) {
        val.value = val.value.substring(0, max);
        $('#charNum').text(max);
    }
};