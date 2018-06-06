$(function(){

    $('#btnBox>div').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('last')){
            $(this).children('input').focus()
        }

    });
    $('.act').click(function(){
        $('#rule').removeClass('d-none')
    });
    $('.rulebtn').click(function(){
        $('#rule').addClass('d-none')
    });

    $('.payn').click(function(){
        var t1 = $('inp1:text').val();
        var t2 = $('inp2:text').val();
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(t1)) {
            $('.mistake').addClass('d-none');
            $('.payment').removeClass('d-none');
            $('.enter').click(function () {
                if (!myreg.test(t1)) {
                    $('.mistake1').addClass('d-none');
                    if(t1===t2){
                        $('.payment').addClass('d-none');
                        $('.keep').removeClass('d-none');
                        $('.enter1').click(function () {
                            window.location.href = 'https://alanzzzzz.github.io/love/html/love2.html'
                        });
                        $('.cancel1').click(function () {
                            $('.keep').addClass('d-none');
                            $('.payment').removeClass('d-none');
                        })
                    }
                    else {
                        $('.enter1').click(function () {
                            window.location.href='https://alanzzzzz.github.io/love/html/love.html'
                        });
                    }
                }
                else {
                    $('.mistake1').addClass('d-none');
                    $('.mistake1').click(function () {
                        $('.mistake1').addClass('d-none');
                    })

                }
            });
            $('.cancel').click(function () {
                $('.payment').addClass('d-none');
            })

        }
        else {
            $('.mistake').removeClass('d-none');
            $('.mistake').click(function () {
                $('.mistake').addClass('d-none');
            })
        }
    })
});