// dropdown profile

let showprofile = document.getElementById("showprofile");

function abc(){
  showprofile.classList.toggle("open-menu");
  
}

let showprofile1 = document.getElementById("showprofile1");

function def(){
  showprofile1.classList.toggle("open-menu1");
  
}

// main2
let scrollContainer1 = document.querySelector(".action1");
let backBtn1 = document.getElementById("backbtn1");
let nextBtn1 = document.getElementById("nextbtn1");

scrollContainer1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
    scrollContainer1.style.scrollBehavior = "auto";
});

nextBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft += 340;
});

backBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft -= 340;
});

// thriller section

let scrollContainer2 = document.querySelector(".thriller1");
let backBtn2 = document.getElementById("backbtn2");
let nextBtn2 = document.getElementById("nextbtn2");



nextBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 340;
});

backBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 340;
});

// comedy section
let scrollContainer3 = document.querySelector(".comedy1");
let backBtn3 = document.getElementById("backbtn3");
let nextBtn3 = document.getElementById("nextbtn3");


nextBtn3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft += 340;
});

backBtn3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft -= 340;
});

// sci-fic

let scrollContainer4 = document.querySelector(".sci-fic1");
let backBtn4 = document.getElementById("backbtn4");
let nextBtn4 = document.getElementById("nextbtn4");


nextBtn4.addEventListener("click", () => {
    scrollContainer4.style.scrollBehavior = "smooth";
    scrollContainer4.scrollLeft += 340;
});

backBtn4.addEventListener("click", () => {
    scrollContainer4.style.scrollBehavior = "smooth";
    scrollContainer4.scrollLeft -= 340;
});

// horro section

let scrollContainer5 = document.querySelector(".horror1");
let backBtn5 = document.getElementById("backbtn5");
let nextBtn5 = document.getElementById("nextbtn5");


nextBtn5.addEventListener("click", () => {
    scrollContainer5.style.scrollBehavior = "smooth";
    scrollContainer5.scrollLeft += 340;
});

backBtn5.addEventListener("click", () => {
    scrollContainer5.style.scrollBehavior = "smooth";
    scrollContainer5.scrollLeft -= 340;
});


// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

  