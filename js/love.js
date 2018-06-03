$(function(){
    $('#btnBox>div').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('last')){
            $(this).children('input').focus()
        }


    })
});