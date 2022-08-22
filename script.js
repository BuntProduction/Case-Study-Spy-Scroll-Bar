// const sections = document.querySelectorAll('section');

// window.addEventListener('scroll', function(){
//     console.log(window.scrollY);
// });
$(document).ready(function(){

$(window).on('scroll', function(){
    var link = $('.navbar a.dot');
    var top = $(window).scrollTop();

    $('.sec').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 150;
        if(top >= offset && top < offset + height){
            link.removeClass('active');
            $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
    }) 
})

})