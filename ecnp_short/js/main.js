
$(document).ready(function(){

   var FeatureSwiperA = new Swiper('#FeatureSwiper1', {
      allowTouchMove:false,
      spaceBetween: 400,
      autoHeight: true,
      navigation: {
         nextEl: '.feature__swiper__a-next',
         prevEl: '.feature__swiper__a-prev',
      },
   });
   
   var FeatureSwiperB = new Swiper('#FeatureSwiper2', {
      allowTouchMove: false,
      spaceBetween: 400,
      autoHeight: true,
      navigation: {
         nextEl: '.feature__swiper__b-next',
         prevEl: '.feature__swiper__b-prev',
      },
   });

   var FeatureTeacherSwiper = new Swiper('#TeacherSwiper', {
      loop:true,
      centeredSlides: true,
      spaceBetween: -100,
      slidesPerView: 3,
      autoHeight: true,
      navigation: {
         nextEl: '.feature__teacher__swiper-next',
         prevEl: '.feature__teacher__swiper-prev',
      },
      breakpoints: {
         1280: {
            spaceBetween: -40,
         }
      },
   });

   var FeaturePreviewNavSwiper = new Swiper('#PreviewSwiperNav', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      autoHeight: true,
      breakpoints: {
         1280: {
            spaceBetween: 15,
         }
      },
   });

   var FeaturePreviewSwiper = new Swiper('#PreviewSwiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoHeight: true,
      navigation: {
         nextEl: '.feature__preview__swiper-next',
         prevEl: '.feature__preview__swiper-prev',
      },
      thumbs: {
         swiper: FeaturePreviewNavSwiper,
      },
   });

   $('#Menu1Page1').click(function () {
      FeatureSwiperA.slideTo(0, 400, false);
   })
   $('#Menu1Page2').click(function () {
      FeatureSwiperA.slideTo(1, 400, false);
   })
   $('#Menu1Page3').click(function () {
      FeatureSwiperA.slideTo(2, 400, false);
   })


   $('#Menu2Page1').click(function () {
      FeatureSwiperB.slideTo(0, 400, false);
   })
   $('#Menu2Page2').click(function () {
      FeatureSwiperB.slideTo(1, 400, false);
   })
   $('#Menu2Page3').click(function () {
      FeatureSwiperB.slideTo(2, 400, false);
   })
   $('#Menu2Page4').click(function () {
      FeatureSwiperB.slideTo(3, 400, false);
   })


   $('#AnimatePie').on('click' ,function(){
      $(this).toggleClass('onfull');
   })

   $('.menu__control').toggleClass('isopen').parent('.menu__block').toggleClass('isopen')
   $('#Article').toggleClass('isopen');
   
   $('.menu__control').on('click',function(){
      $(this).toggleClass('isopen').parent('.menu__block').toggleClass('isopen')
      $('#Article').toggleClass('isopen');
   })

   $('.feature__preview__nav__ele').on('click', function () {
      $('.feature__preview__nav__ele').removeClass('swiper-slide-thumb-active');
      $(this).toggleClass('swiper-slide-thumb-active');
   })

   $(".lazy").Lazy({
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      effectTime: 300, //duration
      throttle: 1000,//delay
      //delay: 2000,
      visibleOnly: true,
      onError: function (element) {
         console.log('lazy error loading' + element.data('src'));
      },
      beforeLoad: function (element) {
         // Create virtual img to set imgs src src
         pureLazyfocusepointer(element);
      },
      afterLoad(element) {
         // element.parent('.focuspoint').delay(500).focusPoint();
         // element.addClass('lazied');
      },
      onFinishedAll() {
         console.log('img Complete');
      },
   });

   function pureLazyfocusepointer(target) {
      var img = new Image();
      img.src = target.data('src');
      var target_focuspoint = target.parent('.focuspoint');
      $(target_focuspoint).attr({
         'data-focus-x': "0.00",
         'data-focus-y': "0.00",
         'data-image-w': img.width,
         'data-image-h': img.height,
      });
   }



});
