$(function () {
    document.body.addEventListener('touchstar', function () {
    });
    /*  $('.first').click(function(){
     $(this).css({
     background: '#fb9ac7',
     });
     $(this).siblings().find('.tex1,.tex2,.tex3').css({
     color: '#353535'
     });
     $(this).siblings().find('input').css({
     display:'none',
     });
     $(this).siblings().find('.tex3').css({
     display:'block'
     });

     $(this).siblings().css({
     background: 'white'
     });

     $(this).find('.love1').css({
     display:'inline'
     })
     $(this).find('.one').css({
     color: 'white'
     })

     });

     $('.tow1').click(function(){
     $(this).css({
     background: '#fb9ac7',

     });
     $(this).find('.tex1').css({

     color: 'white'
     });
     $(this).siblings().css({
     background: 'white'
     });
     $(this).prev().css({
     background: 'white',
     border: '1px solid #ffe5f3'
     });
     $(this).prev().find('.love1').css({
     display:'none'
     })
     $(this).siblings().find('.tex2,.tex3,.one').css({
     color: '#353535'
     })


     $(this).siblings().find('input').css({
     display:'none',
     });
     $(this).siblings().find('.tex3').css({
     display:'block'
     });
     });
     $('.tow2').click(function(){
     $(this).css({
     background: '#fb9ac7'
     });
     $(this).find('.tex2').css({
     color: 'white'
     });


     $(this).siblings().find('.one,.tex1,.tex3').css({
     color: '#353535'
     });

     $(this).siblings().css({
     background: 'white',
     border: '1px solid #ffe5f3'
     });
     $(this).siblings().find('.love1').css({
     display:'none'
     })

     $(this).siblings().find('input').css({
     display:'none',
     });
     $(this).siblings().find('.tex3').css({
     display:'block'
     });
     });
     $('.tow3').click(function(){
     $(this).css({
     background: '#fb9ac7'
     });
     $(this).children('.tex3').css({
     display:'none'
     });

     $(this).children('input').css({
     display:'block'
     })
     $(this).siblings().css({
     background: 'white',
     border: '1px solid #ffe5f3'
     });

     $(this).siblings().find('.tex1,.one,.tex2').css({
     color: '#353535'
     });
     });
     */

    $('.price>div').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        if (
            $(this).hasClass('last')) {
            $(this).children('input').focus()
        }
    });

    $('.activity').click(function () {
        $('.translucent').removeClass('d-none');
    });

    $('.know').click(function () {
        $('.translucent').addClass('d-none');
    });

    $('.pay').click(function () {
        var h1 = $('.tel').val();
        var h3 = $('.money').val();
        var reg1 = /^\+?[1-9][0-9]*$/;
        var reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (reg.test(h1)) {
            $('.window').addClass('d-none');
            $('.translucent1').removeClass('d-none');
            $('.enter').click(function () {
                var h2 = $('.number').val();
                if (reg.test(h2)) {
                    $('.window1').addClass('d-none');
                    if (h2 === h1) {
                        $('.translucent2').removeClass('d-none');
                        $('.translucent1').addClass('d-none');
                        $('.enter1').click(function () {
                            window.location.href = "https://hjw2044.github.io/valentine/html/second.html"
                        });
                        $('.delete1').click(function () {
                            $('.translucent2').addClass('d-none');
                            $('.translucent1').removeClass('d-none');
                        })
                    } else {
                        $('.enter').click(function () {
                            window.location.href = "https://hjw2044.github.io/valentine/html/third.html"
                            $('.code').click(function () {
                                window.location.href = "https://hjw2044.github.io/valentine/html/valentine.html"
                            })
                        })
                    }
                } else {
                    //alert('不是手机号');
                    $('.window1').removeClass('d-none');
                }
            });
            $('.delete').click(function () {
                $('.translucent1').addClass('d-none');
                $('.window').addClass('d-none');
                $('.window1').addClass('d-none');
            })
        }
        else {
            $('.window').removeClass('d-none');
        }
    })
});