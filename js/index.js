//Preloader
let preloader = document.querySelector('.preloader');

window.addEventListener('load', ()=> {
  preloader.style.display = 'none';
});

//Navbar Effect 
let navbar = document.querySelector(".nav");
let navTrigger = document.querySelector(".menu_icon");

navTrigger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("show");
});

//Scroll Effect
// let upScrollBtn = document.querySelector("#upScrollBtn");
// let downScrollBtn = document.querySelector("#downScrollBtn");
// let scrollContainer = document.querySelector(".other_movies");

// upScrollBtn.addEventListener('click', () => {
//   scrollContainer.scrollTop = 1;
// });

// downScrollBtn.addEventListener('click', () => {
//   scrollContainer.scrollTop = 1;
// });

//Dropdown Effect
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  const faqQuestion = faq.querySelector(".question");
  const faqAnswer = faq.querySelector(".answer");
  const faqIcon = faq.querySelector(".faq_ic");

  faqQuestion.addEventListener("click", () => {
    faqAnswer.classList.toggle("show");
    faqIcon.classList.toggle("spin");
  });
});

//Pop-Up Effect
let signUp = document.querySelector(".signup_wrapper");
let toggleBtn = document.querySelector("#user_icon");
let toggleBtn2 = document.querySelector(".user_icon");
let cancelBtn = signUp.querySelector(".cancel_btn");
let newsletter = document.querySelector(".newsletter_wrapper");
let newsletterToggleBtn = document.querySelector("#subscribe_btn");
let newsletterToggleBtn2 = document.querySelector(".subscribe_btn");
let newsletterCancelBtn = newsletter.querySelector(".cancel_btn");

toggleBtn.addEventListener('click', () => {
  signUp.classList.add('show');
});

toggleBtn2.addEventListener('click', () => {
  signUp.classList.add('show');
});

cancelBtn.addEventListener('click', () => {
  signUp.classList.remove('show');
});

newsletterToggleBtn.addEventListener('click', () => {
  newsletter.classList.add('show');
});

newsletterToggleBtn2.addEventListener('click', () => {
  newsletter.classList.add('show');
});

newsletterCancelBtn.addEventListener('click', () => {
  newsletter.classList.remove('show');
});
