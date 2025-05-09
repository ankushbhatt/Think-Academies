'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})


const testimonials = [
      {
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Robert Fox",
        title: "CEO Of UrbanNest's",
        content: "The digital marketing team transformed our online presence, delivering exceptional results with their SEO and targeted ads. Highly recommend their professional approach."
      },
      {
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Leslie Alexander",
        title: "Manager FashionWave's",
        content: "We've seen incredible growth thanks to their tailored digital marketing strategies. The team's expertise in SEO and social media has been invaluable."
      },
      {
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Jacob Smith",
        title: "Founder at ClickFast",
        content: "Truly impressed with their strategic insight and execution. Our campaigns are now running better than ever."
      },
      {
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Emily Brown",
        title: "Marketing Head, Brandify",
        content: "They helped us improve online visibility drastically. ROI from ads increased significantly within weeks!"
      }
    ];

    const track = document.getElementById('carousel-track');

    function createCard(t) {
      return `
        <div class="testimonial-card">
          <div class="testimonial-header">
            <img src="${t.img}" alt="${t.name}">
            <div>
              <div class="name">${t.name}</div>
              <div class="title">${t.title}</div>
            </div>
          </div>
          <div class="testimonial-content">${t.content}</div>
        </div>
      `;
    }
    const combined = [...testimonials, ...testimonials];

    const wrapper = document.createElement('div');
    wrapper.className = 'carousel-wrapper';
    wrapper.innerHTML = combined.map(createCard).join('');
    track.appendChild(wrapper);


    emailjs.init("your_public_key");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("your_service_key", "your_template_key", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (err) => {
        console.error("Error:", err);
        alert("Failed to send message.");
      });
  });