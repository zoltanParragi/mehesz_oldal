$(document).ready(function() {
    
    $(window).on('scroll', function() {
        let scroll = $(window).scrollTop()
        if(scroll >= 50) {
            $('.sticky').addClass('stickyadd')
        } else {
            $('.sticky').removeClass('stickyadd')
        }
    })

    let typed = new Typed('.element', {
        strings: ["a Példa Méhészet oldalán!"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
      });

    $('.col-lg-4').hover(
        function() {
            $(this).animate({
                marginTop: "-=1%",
            }, 200);
        },

        function() {
            $(this).animate({
                marginTop: "0%",
            }, 200);
        }
        
    )

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 200);
    });
})