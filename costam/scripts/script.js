
$(function () {
    var backgrounds = ['url(costam/images/banner.jpg)', 'url(costam/images/banner2.jpg)', 'url(costam/images/banner3.jpg)'];
    var current = 0;
    var timer;

    function nextBackground() { 

        $(".masthead").stop().animate({
                opacity: 0
            }, 0).css({
                'background': backgrounds[current] + " 50% 80% /cover no-repeat fixed"
            })
            .stop().animate({
                opacity: 1
            }, 2000);

        timer = setTimeout(function () {
            current++;
            if (current === 3) {
                current = 0;
            }
            nextBackground();

        }, 5000);
    }

    nextBackground();
});
