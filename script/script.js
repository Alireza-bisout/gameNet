$(document).ready(function () {

  // Swiper Js

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },


  });



  // Our games

  // نمایش المان‌های دسته پیشفرض (مثلاً "ps4" در اینجا)
  showCategory("ps4");

  $(".menu li").click(function () {
    var targetCategory = $(this).data("category"); 
    $(".menu li").removeClass("active");
    $(this).addClass("active");
    $(".games .console").not("." + targetCategory + "-game").removeClass("show");
    showCategory(targetCategory);
  });
  function showCategory(category) {
    $("." + category + "-game").addClass("show");
  }
  var swiper = new Swiper(".pcSlider", {
    effect: "cards",
    grabCursor: true,
    coverflowEffect: {
      slideShadows: false,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".playstationSlider", {
    effect: "cards",
    grabCursor: true,
    coverflowEffect: {
      slideShadows: false,
    },
    autoplay: {
      delay: 2900,
      disableOnInteraction: false,
    },
  });  

  var swiper = new Swiper(".xboxSlider", {
    effect: "cards",
    grabCursor: true,
    coverflowEffect: {
      slideShadows: false,
    },
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },

  });

  var swiper = new Swiper(".competitionsSwiper", {
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        var slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(function (slide) {
          slide.classList.remove('active-slide');
          slide.classList.add('inactive-slide');
        });
        var activeSlide = this.slides[this.activeIndex];
        activeSlide.classList.remove('inactive-slide');
        activeSlide.classList.add('active-slide');
      }
    }

  });


  // Navigation Bar


  let observer = new IntersectionObserver(function (entries) {

    if (entries[0].intersectionRatio === 0) {

      document.querySelector(".navgetion").classList.add("bg-navgetion-after");

    } else if (entries[0].intersectionRatio === 1) {

      document.querySelector(".navgetion").classList.remove("bg-navgetion-after");

    }
  }, { threshold: [0, 1] });

  observer.observe(document.querySelector(".nav-container-top"));


  // Scrolling navigation bar

  var prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;
    var navMenu = document.querySelector('.navbar-collapse');
    var navHide = document.querySelector('.nav-hide');

    if (prevScrollPos > currentScrollPos || navMenu.classList.contains('show')) {
      navHide.style.top = '0';
    } else {
      navHide.style.top = '-150px';
    }

    if (currentScrollPos === 0) {
      navHide.style.top = '0';
    }

    prevScrollPos = currentScrollPos;
  });

  let i = 1

  $(".navbar-toggler").click(function () {
    if (i === 1) {
      $(".barlogo").hide();
      $(".xlogo").show();
      i = 0;
    } else if (i === 0) {
      $(".xlogo").hide();
      $(".barlogo").show();
      i = 1;
    }
  });
});