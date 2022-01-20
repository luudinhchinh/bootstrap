$(window).scroll(function () {
    let oTop = $('.section-2').offset().top - window.innerHeight;
    if ($(window).scrollTop()>oTop) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
})
// animation gioi thieu sách

let nCount = selecter => {
    $(selecter).each(function () {
        $(this).animate({
            counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",

            step: function (value) {
                $(this).text(math.ceil(value))
            }
        
        })
    })
}

let position =0;
$(window).scroll(function () {
    let oTop = $('.number').offset().top - window.innerHeight
    if(position == 0 && $(window).scrollTop() >= oTop) {
        position++;
        nCount(".rect > h1");
    }
})