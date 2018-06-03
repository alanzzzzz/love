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

});