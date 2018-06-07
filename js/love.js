$(function(){
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
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
        var t1 = $('.inp1').val();
        if (myreg.test(t1)) {
            $('.payment').removeClass('d-none');
        }
        else {
            $('.mistake').removeClass('d-none');
            setTimeout(function(){
                $('.mistake').addClass('d-none');
            },2000)
        }
    });


    $('.enter').click(function () {
        var t2=$('.inp2').val();
        var t1=$('.inp1').val();

        if (myreg.test(t2)) {
            if(t1===t2){
                $('.payment').addClass('d-none');
                $('.keep').removeClass('d-none');

            }
            else {
                window.location.href='love3.html'
            }
        }
        else {
            $('.mistake').removeClass('d-none');
            setTimeout(function(){
                $('.mistake').addClass('d-none');
            },2000)

        }
    });




    $('.cancel').click(function () {
        $('.payment').addClass('d-none');
    })

    $('.enter1').click(function () {
        window.location.href = 'love2.html';
    })




});