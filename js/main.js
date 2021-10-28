

/*==================== DEBUT SHOW MENU MOBILE =============================================*/
//MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//MENU SHOW 
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//MENU HIDDEN
//validate if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        // navMenu.classList.add('close-menu') ---> PAS CA, sinon ne fonctionera qu'une seule fois, apres un seul clik 
    navMenu.classList.remove('show-menu')
    })
}
/*==================== FIN SHOW MENU MOBILE ==========================================*/


/*==================== DEBUT REMOVE MENU MOBILE ==========================================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== FIN REMOVE MENU MOBILE ==========================================*/


/*==================== DEBUT CHANGE BACKGROUND HEADER - MENU ====================*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== FIN CHANGE BACKGROUND HEADER - MENU ====================*/ 


/*==================== DEBUT SWIPER DISCOVER ==========================================*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate:0,
    },
  });
/*==================== FIN SWIPER DISCOVER ==========================================*/


/*==================== DEBUT VIDEO ==========================================*/
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        //Play video
        videoFile.play()

        //We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else{
        //Pause video
        videoFile.pause()

        //We change the icon 
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)


function finalVideo(){
    // video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
//ended, we the video ends 
videoFile.addEventListener('ended', finalVideo)

/*==================== FIN VIDEO ==========================================*/




/*==================== DEBUT SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*==================== FIN SHOW SCROLL UP ====================*/ 



/*==================== DEBUT SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== FIN SCROLL SECTIONS ACTIVE LINK ====================*/




/*==================== DEBUT DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line' //a copier coler sur le site "iconscout.com" au niveau de "<i class="uil uil-sun"></i>"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*==================== FIN DARK LIGHT THEME ====================*/ 
 

/*==================== DEBUT SCROLL REVEAL ANIMATION ====================*/ 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    //reset:true
})

sr.reveal(`.home__data, .home__social-link, .home__info, 
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, footer__rights`,{
    origin:'top',
    interval:100,
})

sr.reveal(`.about__data,
           .video__description,
           .subscribe__description`,{
    origin:'left',
})

sr.reveal(`.about__img-overlay,
           .video__content,
           .subscribe__form`,{
    origin:'right',
})

/*==================== FIN SCROLL REVEAL ANIMATION ====================*/ 
