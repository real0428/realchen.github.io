 //Bonus-Section Tab Change
 $('#nav-tab-box').children('li').click(function(){
    // alert('hello')
    $(this).addClass('selected').siblings().removeClass('selected');
})

//Bonus-Section Tab Content Change;
$(function(){
    $('#tab-1').on('click',function(){
        $('.tab-content-1').fadeIn().siblings().hide();
    })
    $('#tab-2').on('click',function(){
        $('.tab-content-2').fadeIn().siblings().hide();
    })
    $('#tab-3').on('click',function(){
        $('.tab-content-3').fadeIn().siblings().hide();
    })
})

//Go To Form Section
var formPos = $('#form-wrap').position().top;
$('.goToForm').on('click',function(){
    $('html,body').stop(true,false).animate({scrollTop:formPos},1000);
})


//Go To Course Section
// var coursePos = $('#course-wrap').position().top;
// $('.goToCourse').click(function(){
//     $('html,body').stop(true,false).animate({scrollTop:coursePos},1000);
// });



// student badge Swiper JS 
var swiperStudent = new Swiper ('.student-swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        autoplay:{
            delay:2000,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.student-change-button-next',
            prevEl: '.student-change-button-prev',
        },

        slidesPerView: 1,
        spaceBetween: 0,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            640: {
            slidesPerView: 2,
            spaceBetween: 0
            },
        
            // when window width is >= 1040px
            1040: {
            slidesPerView: 3,
            spaceBetween: 0,
            }
       }, 
})

 // Message Swiper JS 
var swiperMessage = new Swiper ('.message-swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // Navigation arrows
        navigation: {
            nextEl: '.message-change-button-next',
            prevEl: '.message-change-button-prev',
        },

        pagination: {
        el: '.message-pagination',
        clickable: true,
        },
        slidesPerView:1,
        breakpoints: {
            // when window width is >= 640px
            640: {
            slidesPerView: 1,
            spaceBetween: 20
            },
        
            // when window width is >= 1040px
            1040: {
            slidesPerView: 2,
            spaceBetween: 40,
            
            },
       }, 
       autoHeight:true,
       centeredSlides:true,
})


// Course Swiper JS 
var swiperCourse = new Swiper ('.course-swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // Navigation arrows
        navigation: {
            nextEl: '.course-change-button-next',
            prevEl: '.course-change-button-prev',
        },

        pagination: {
        el: '.course-pagination',
        clickable: true,
        },

        slidesPerView: 1,
        spaceBetween: 0,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            640: {
            slidesPerView: 2,
            spaceBetween: 20
            },
        
            // when window width is >= 1040px
            1040: {
            slidesPerView: 3,
            spaceBetween: 60,
            }
       }, 
        centeredSlides:true,
})

// Message LightBox
$(function(){
    var width;
    var height;
    if($(window).width()>1200){
        width = '50%';
        height = '50%';
    }else{
        width = '90%';
        height = '50%';
    }
    $(".more #more-fb").colorbox(
        {
            inline:true, 
            width:width,   
        },
    );
    $(".more #more-ig").colorbox(
        {
            inline:true, 
            width:width,   
        },
    );

    $(".more #more-dcard").colorbox(
        {
            inline:true, 
            width:width,    
        }
    );

    $(".more #more-ptt").colorbox(
        {
            inline:true, 
            width:width, 
           
        },
    );

   $('.iframe-box').colorbox(
       
       {
           iframe:true,
           width:"80%", 
           height:"80%"
       }
       
    );

})
