
//Mobile Menu Functionality

const primaryNav = document.querySelector('.nav-list-ul');
const navToggle = document.querySelector('.mobile-menu-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
});


//Animate on scroll effect

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Load video only on screen size parameter (hero image loads based on CSS parameter)

var windowWidth = window.innerWidth;

if (windowWidth >1000) {

    var div = document.createElement('video')
    div.classList.add('desktop-hero')


    div.src = './Assets/HallowedSiteHero.mp4'
    div.muted = true;
    div.autoplay = true;
    div.loop = true;
    div.setAttribute('poster','./Assets/Video Frame.png')

    var box = document.getElementById('header');
    box.appendChild(div)
}

//Connors version

// if (windowWidth > 1000) {
//     // Check if 'header' element exists
//     const box = document.getElementById('header');
//     if (box) {
//         // Create video element
//         const video = document.createElement('video');
//         video.classList.add("desktop-hero");
        
//         // Use remote file
//         video.src = '../Assets/Hallowed Site Hero.mp4';
        
//         video.loop = true;
//         video.muted = true;
//         video.autoplay = true;
        
//         // Include in HTML as child of #box
//         box.appendChild(video);
//     }
// }

//Hide Nav Bar on scroll

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementsByClassName("navigation").style.transform = translateY(-100);
//   } else {
//     document.getElementsByClassName("navigation").style.transform = translateY(0);
//   }
// }