window.addEventListener("load",()=>{
  
// چون سوایپر نمیتواند همزمان دو افکت در یک سوایپر را با استفاده 
// از بریک پوینت استفاده کند از ایف استفاده کردم

let swiperHeader;
// استفاده از فانکشن در جهت اینکه وقتی تغییر سایز انجام میشه 
// اسلایدر درجا بروز بشه نه با ریلود کردن سایت
function initSwiper() {
  if (window.innerWidth < 768) {
    // 📱 موبایل: حالت slide با peek
    swiperHeader = new Swiper(".mySwiper", {
      slidesPerView: 1.1,   // بخشی از اسلاید کناری معلوم باشه
      centeredSlides: true, // وسطی بیاد جلو
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      loop: true,
    });
  } else {
    // 💻 دسکتاپ: حالت fade با navigation و pagination
    swiperHeader = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "fade", // افکت متفاوت
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  }
}

// اول اجرا بشه
initSwiper();

// وقتی تغییر سایز می‌دی، دوباره بسازه
window.addEventListener("resize", () => {
  if (swiperHeader) swiperHeader.destroy(); // نابودش کن
  initSwiper();
});




var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
          loop: true,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
          loop: true,
        },
      },
    });
});