/* COUTDOWN FUNCTION | START */
const countDownDate = new Date("Sept 4, 2019 15:32:25").getTime();

// Update the count down every 1 second
const x = setInterval(function() {
    
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    days = ((days < 10) ? "0" + days : days);
    hours = ((hours < 10) ? "0" + hours : hours);
    minutes = ((minutes < 10) ? "0" + minutes : minutes);
    seconds = ((seconds < 10) ? "0" + seconds : seconds);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
/* COUTDOWN FUNCTION | END */


window.onload = function () {
    // Inject SVGs from templates
    const svgsToBeInjected = document.querySelectorAll("[data-svg]");
    Array.from(svgsToBeInjected).forEach((el, index) => {
        const template = document.querySelector("template#" + el.dataset.svg);          // Select template
        const node = template.content.cloneNode(true);                                  // Clone template
        node.querySelector("svg").setAttribute("class", el.classList);                  // Replace classes
        el.replaceWith(node);                                                           // Replace with SVG node
    });
    
    // Pseudo click for selecting Day 1 events
    document.querySelector("[data-day='1']").click();
}


document.addEventListener("DOMContentLoaded", function(event) { 
    // Initialize Swiper Carousel
    new Swiper ('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 32,
        breakpoints: {
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 }
        }
    })
})

// Scroll listener for changing nav classes
document.onscroll = function (e) {
    const nav = document.querySelector("nav");
    if (window.pageYOffset > nav.clientHeight) nav.classList.add("offset");
    else nav.classList.remove("offset");
}

// Function for toggling navbar dropdown
function toggleNavLinks(val) {
    const nav = document.querySelector("nav");
    if (val === false) nav.classList.remove("active");
    else nav.classList.toggle("active");
}

// Setting visibility classes for active day events
function activeDay(el) {
    const day = Number(el.dataset.day);
    
    const activeDayEl = document.querySelector(".days.active");
    if (activeDayEl) activeDayEl.classList.remove("active");
    
    document.querySelector("[data-day='" + day + "']").classList.add("active");
    
    const activeEvents = document.querySelectorAll(".schedule .event.active");
    activeEvents.forEach(ae => { ae.classList.remove("active"); });
    
    const toActivateEvents = document.querySelectorAll(".schedule .event[data-parent-day='" + day + "']");
    toActivateEvents.forEach(ae => { ae.classList.add("active") })
}