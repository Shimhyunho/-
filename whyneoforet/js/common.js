$(function(){
    $('.text').css('display','none');
    $('.box').click(function(){
        // console.log('click!');
        if($('.text').css('display') == 'none'){
            $('.text').slideDown(300)
            $('.img').addClass('rotate');
        }
        else{
            $('.text').slideUp(300);
            $('.img').removeClass('rotate');
            $('.img').css('transition','.3s');
        }
    });
});