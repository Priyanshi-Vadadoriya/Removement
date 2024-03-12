AOS.init({
  duration: 1200,
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    280:{
      slidesPerView: 1,
      spaceBetween:10
    },
    320:{
        slidesPerView: 1,
        spaceBetween:10
    },
    480:{
        slidesPerView: 1,
        spaceBetween:10    
    },
    768:{
        slidesPerView: 1,
        spaceBetween:20    
    },
    992:{
        slidesPerView: 2,
        spaceBetween:30    
    },
    1200:{
      slidesPerView: 3.2,
      spaceBetween:30    
  },
  }
  
});


h1_tag = document.getElementById('navbar');
function test()
{
    if(document.documentElement.scrollTop > 200)
    {
        h1_tag.style.backgroundColor="#F18988";
    }
    else
    {
        h1_tag.style.backgroundColor="";
    }
}