$(function(){
    $('.text_wrap').css('display','none');
    $('.box').click(function(){
        // console.log('click!');
        if($('.text_wrap').css('display') == 'none'){
            $('.text_wrap').slideDown(300)
            $('.img').addClass('rotate');
        }
        else{
            $('.text_wrap').slideUp(300);
            $('.img').removeClass('rotate');
            $('.img').css('transition','.3s');
        }
    });
});