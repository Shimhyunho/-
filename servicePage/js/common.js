$(function(){
    $('dd').css('display','none');
    $('dl dt').click(function(){
        if($('+dd',this).css('display') == 'none'){
            // $('dl dd').css('display','none');
            // $('+dd',this).css('display','block');
            // $('dl dd').slideUp('slow');
            // $('+dd',this).slideDown('slow');
            // $('dl dd').slideUp(300);
            $('+dd',this).slideDown(300)
            $('button').addClass('rotate');
        }
        else{
            $('dl dd').slideUp(300);
            $('button').removeClass('rotate');
        }
    });
});