const primaryNav = document.querySelector('.primary-nav2');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    
    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
       
    }
});


const nav= document.querySelector("nav");
const header = document.querySelector("header");

const sectionOneOptions = { 
    rootMargin : "-510px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
            // console.log(entry.target);
            if(!entry.isIntersecting) {
                nav.classList.add("nav-scrolled")
            } else {
                nav.classList.remove("nav-scrolled");
            }
        })
}, 
sectionOneOptions)


sectionOneObserver.observe(header)