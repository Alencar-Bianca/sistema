$(function(){
    $('nav a').click(function(){
        let href = $(this).attr('href');
        let top = $(href).offset().top;

        $('html,body').animation({'scrollTop':top});

        return false;
    })
})