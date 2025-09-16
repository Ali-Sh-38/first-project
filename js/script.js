// search box
let openSearch = document.getElementById("open-search");
let openSearch2 = document.getElementById("open-search2");
let divSearch = document.getElementById("div-search");
let closeBtn = document.getElementById("close-btn");
let body = document.querySelector("body");
const overlay = document.getElementById("overlay");

window.addEventListener('load',()=>{

    openSearch.addEventListener("click",(e)=>{
        e.preventDefault();
        divSearch.classList.add("translate-y-0");
        body.classList.add("overflow-hidden");
        overlay.classList.remove("hidden");
    });
    openSearch2.addEventListener("click",(e)=>{
        e.preventDefault();
        divSearch.classList.add("translate-y-0");
        overlay.classList.remove("hidden");
        body.classList.add("overflow-hidden");
    });
    closeBtn.addEventListener("click",()=>{
        divSearch.classList.remove("translate-y-0");
        body.classList.remove("overflow-hidden");
        overlay.classList.add("hidden");
        overlay.classList.add("hidden");
    })
})


// menu
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  let timer;
  let submenu = item.querySelector(".submenu");

  if (!submenu) return;

  item.addEventListener("mouseenter",()=>{
      timer = setTimeout(()=>{
          submenu.classList.remove("hidden")
    },300);
});

  item.addEventListener("mouseleave", () => {
    clearTimeout(timer);
    submenu.classList.add("hidden"); // ← بسته شدن سریع
  });
});



// menu mobile button
let menuMoblieBtnOpen = document.getElementById("menu-moblie-btn-open");
let menuMoblieBtnClose = document.getElementById("menu-moblie-btn-close");
let menuMoblie = document.getElementById("menu-moblie");

menuMoblieBtnOpen.addEventListener("click",()=>{
  menuMoblie.classList.remove("translate-x-full");
  body.classList.add("overflow-hidden");
  overlay.classList.remove("hidden");
})
menuMoblieBtnClose.addEventListener("click",()=>{
  menuMoblie.classList.add("translate-x-full");
  body.classList.remove("overflow-hidden");
  overlay.classList.add("hidden");
});

// menu mobile
let firstMenuMobile = document.getElementById("first-menu-mobile");
// زنانه
let menuMobileBtnZanane = document.getElementById("menu-mobile-btn-zanane");
let menuMobileDivZanane = document.getElementById("menu-mobile-div-zanane");
let menuMobileBtnZananeClose = document.getElementById("menu-mobile-btn-zanane-close");
// مردانه
let menuMobileBtnMardane = document.getElementById("menu-mobile-btn-mardane");
let menuMobileDivMardane = document.getElementById("menu-mobile-div-mardane");
let menuMobileBtnMardaneClose = document.getElementById("menu-mobile-btn-mardane-close");
// بچگانه
let menuMobileBtnBachegane = document.getElementById("menu-mobile-btn-bachegane");
let menuMobileDivBachegane = document.getElementById("menu-mobile-div-bachegane");
let menuMobileBtnBacheganeClose = document.getElementById("menu-mobile-btn-bachegane-close");

// زنانه
menuMobileBtnZanane.addEventListener("click",()=>{
  firstMenuMobile.classList.add("hidden");
  menuMobileDivZanane.classList.remove("hidden");
  menuMobileDivZanane.classList.remove("translate-x-full");
})
menuMobileBtnZananeClose.addEventListener("click",()=>{
  firstMenuMobile.classList.remove("hidden");
  menuMobileDivZanane.classList.add("hidden");
  menuMobileDivZanane.classList.add("translate-x-full");
})
// مردانه
menuMobileBtnMardane.addEventListener("click",()=>{
  firstMenuMobile.classList.add("hidden");
  menuMobileDivMardane.classList.remove("hidden");
  menuMobileDivMardane.classList.remove("translate-x-full");
})
menuMobileBtnMardaneClose.addEventListener("click",()=>{
  firstMenuMobile.classList.remove("hidden");
  menuMobileDivMardane.classList.add("hidden");
  menuMobileDivMardane.classList.add("translate-x-full");
})
// بچگانه
menuMobileBtnBachegane.addEventListener("click",()=>{
  firstMenuMobile.classList.add("hidden");
  menuMobileDivBachegane.classList.remove("hidden");
  menuMobileDivBachegane.classList.remove("translate-x-full");
})
menuMobileBtnBacheganeClose.addEventListener("click",()=>{
  firstMenuMobile.classList.remove("hidden");
  menuMobileDivBachegane.classList.add("hidden");
  menuMobileDivBachegane.classList.add("translate-x-full");
})





// div select title
let mardane = document.getElementById("mardane");
let zanane = document.getElementById("zanane");
let bachegane = document.getElementById("bachegane");
let salamat = document.getElementById("salamat");
let mardaneDiv = document.getElementById("div-mardane");
let zananeDiv = document.getElementById("div-zanane");
let bacheganeDiv = document.getElementById("div-bachegane");
let salamatDiv = document.getElementById("div-salamat");

mardane.addEventListener("click",()=>{
  mardaneDiv.classList.remove("hidden");
  zananeDiv.classList.add("hidden");
  bacheganeDiv.classList.add("hidden");
  salamatDiv.classList.add("hidden");
  
  mardane.classList.add("text-black");
  mardane.classList.add("border-b-5");
  mardane.classList.add("border-black");
  mardane.classList.add("-mb-1");

  
  zanane.classList.remove("text-black");
  zanane.classList.remove("border-b-5");
  zanane.classList.remove("border-black");
  zanane.classList.remove("-mb-1");

  bachegane.classList.remove("text-black");
  bachegane.classList.remove("border-b-5");
  bachegane.classList.remove("border-black");
  bachegane.classList.remove("-mb-1");

  salamat.classList.remove("text-black");
  salamat.classList.remove("border-b-5");
  salamat.classList.remove("border-black");
  salamat.classList.remove("-mb-1");
});
zanane.addEventListener("click",()=>{
  mardaneDiv.classList.add("hidden");
  zananeDiv.classList.remove("hidden");
  bacheganeDiv.classList.add("hidden");
  salamatDiv.classList.add("hidden");
  
  zanane.classList.add("text-black");
  zanane.classList.add("border-b-5");
  zanane.classList.add("border-black");
  zanane.classList.add("-mb-1");

  mardane.classList.remove("text-black");
  mardane.classList.remove("border-b-5");
  mardane.classList.remove("border-black");
  mardane.classList.remove("-mb-1");

  bachegane.classList.remove("text-black");
  bachegane.classList.remove("border-b-5");
  bachegane.classList.remove("border-black");
  bachegane.classList.remove("-mb-1");

  salamat.classList.remove("text-black");
  salamat.classList.remove("border-b-5");
  salamat.classList.remove("border-black");
  salamat.classList.remove("-mb-1");
});
bachegane.addEventListener("click",()=>{
  mardaneDiv.classList.add("hidden");
  zananeDiv.classList.add("hidden");
  bacheganeDiv.classList.remove("hidden");
  salamatDiv.classList.add("hidden");
  
  bachegane.classList.add("text-black");
  bachegane.classList.add("border-b-5");
  bachegane.classList.add("border-black");
  bachegane.classList.add("-mb-1");

  mardane.classList.remove("text-black");
  mardane.classList.remove("border-b-5");
  mardane.classList.remove("border-black");
  mardane.classList.remove("-mb-1");

  zanane.classList.remove("text-black");
  zanane.classList.remove("border-b-5");
  zanane.classList.remove("border-black");
  zanane.classList.remove("-mb-1");

  salamat.classList.remove("text-black");
  salamat.classList.remove("border-b-5");
  salamat.classList.remove("border-black");
  salamat.classList.remove("-mb-1");
});
salamat.addEventListener("click",()=>{
  mardaneDiv.classList.add("hidden");
  zananeDiv.classList.add("hidden");
  bacheganeDiv.classList.add("hidden");
  salamatDiv.classList.remove("hidden");
  
  salamat.classList.add("text-black");
  salamat.classList.add("border-b-5");
  salamat.classList.add("border-black");
  salamat.classList.add("-mb-1");

  mardane.classList.remove("text-black");
  mardane.classList.remove("border-b-5");
  mardane.classList.remove("border-black");
  mardane.classList.remove("-mb-1");

  zanane.classList.remove("text-black");
  zanane.classList.remove("border-b-5");
  zanane.classList.remove("border-black");
  zanane.classList.remove("-mb-1");

  bachegane.classList.remove("text-black");
  bachegane.classList.remove("border-b-5");
  bachegane.classList.remove("border-black");
  bachegane.classList.remove("-mb-1");
});




// div select brand irani
let brandIrani1 = document.getElementById("brand-irani1");
let brandIrani2 = document.getElementById("brand-irani2");
let brandIrani3 = document.getElementById("brand-irani3");
let brandIraniDiv1 = document.getElementById("brand-irani1-div");
let brandIraniDiv2 = document.getElementById("brand-irani2-div");
let brandIraniDiv3 = document.getElementById("brand-irani3-div");

brandIrani1.addEventListener("click",()=>{
  brandIraniDiv1.classList.remove("hidden");
  brandIraniDiv2.classList.add("hidden");
  brandIraniDiv3.classList.add("hidden");

  brandIrani1.classList.add("text-[28px]");
  brandIrani1.classList.add("text-black");
  brandIrani2.classList.remove("text-[28px]");
  brandIrani2.classList.remove("text-black");
  brandIrani3.classList.remove("text-[28px]");
  brandIrani3.classList.remove("text-black");
})
brandIrani2.addEventListener("click",()=>{
  brandIraniDiv1.classList.add("hidden");
  brandIraniDiv2.classList.remove("hidden");
  brandIraniDiv3.classList.add("hidden");

  brandIrani1.classList.remove("text-[28px]");
  brandIrani1.classList.remove("text-black");
  brandIrani2.classList.add("text-[28px]");
  brandIrani2.classList.add("text-black");
  brandIrani3.classList.remove("text-[28px]");
  brandIrani3.classList.remove("text-black");
})
brandIrani3.addEventListener("click",()=>{
  brandIraniDiv1.classList.add("hidden");
  brandIraniDiv2.classList.add("hidden");
  brandIraniDiv3.classList.remove("hidden");

  brandIrani1.classList.remove("text-[28px]");
  brandIrani1.classList.remove("text-black");
  brandIrani2.classList.remove("text-[28px]");
  brandIrani2.classList.remove("text-black");
  brandIrani3.classList.add("text-[28px]");
  brandIrani3.classList.add("text-black");
})





// btn more
let infoParagraph = document.getElementById("info-paragraph");
let btnMore = document.getElementById("btn-more");
let btnTextInfo = document.getElementById("btn-text-info");
btnMore.addEventListener("click",()=>{
  infoParagraph.classList.toggle("line-clamp-3");
  if (btnTextInfo.innerText === "مشاهده بیشتر") {
    btnTextInfo.innerText = "بستن";
  }
  else{
    btnTextInfo.innerText = "مشاهده بیشتر";
  }
})

