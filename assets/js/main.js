/* ========== SHOW MENU ========== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ========== 1 item show button ========== */
const showItem = (buttonID, showingThingID) => {
    const button = document.getElementById(buttonID),
        showingThing = document.getElementById(showingThingID)

    // Validate that variables exist
    if (button && showingThing) {
        button.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            showingThing.classList.toggle('none')
        })
    }
}
showItem('lc-icon', 'lc-menu')


/* ========== 1 item show - 1 remove button ========== */
const showHideItem = (buttonID, showingThingID, hideThingID) => {
    const button = document.getElementById(buttonID),
        showingThing = document.getElementById(showingThingID),
        hideThing = document.getElementById(hideThingID)

    // Validate that variables exist
    if (button && showingThing) {
        button.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            showingThing.classList.toggle('none')
            if (!hideThing.classList.contains('none')){
                hideThing.classList.toggle('none')
            }
        })
    }
}
showHideItem('web__portfolio-button', 'web__portfolio-carousel', 'web__certificates-carousel')
showHideItem('web__certificates-button', 'web__certificates-carousel', 'web__portfolio-carousel')

/* ========== LANG CHANGE SHOW MENU ========== */
const languageChange = (buttonID, showingClass, hidingClassOne, hidingClassTwo) => {
    const button = document.getElementById(buttonID),
    showingClases = document.getElementsByClassName(showingClass),
    hidingClasesOne = document.getElementsByClassName(hidingClassOne),
    hidingClasesTwo = document.getElementsByClassName(hidingClassTwo) 

    button.addEventListener('click', () => {
        for (let i=0; i < showingClases.length; i++) {
            showingClases[i].classList.add('visible')
        }
        for (let i=0; i < hidingClasesOne.length; i++) {
            hidingClasesOne[i].classList.remove('visible')
        }
        for (let i=0; i < hidingClasesTwo.length; i++) {
            hidingClasesTwo[i].classList.remove('visible')
        }
    })

}
languageChange('polish', 'txt-pl','txt-ru','txt-en')
languageChange('english', 'txt-en','txt-ru','txt-pl')
languageChange('russian', 'txt-ru','txt-en','txt-pl')




/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ========================= Show Scroll Top ========================== */

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'



// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'




// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

  
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

/* =============================== carousel ========================= */
function carousel(carouselName, nextBtnID, prevBtnID) {
    const name = carouselName;
    const nextButtonID = nextBtnID;
    const prevButtonID = prevBtnID;
    let slidePosition = 0;
    const slides = document.getElementsByClassName(name);
    const totalSlides = slides.length;


    document.
        getElementById(nextButtonID)
        .addEventListener("click", function() {
            moveToNextSlide();
        });
    document.
        getElementById(prevButtonID)
        .addEventListener("click", function() {
            moveToPrevSlide();
        });

    function updateSlidePositions() {
        for(let slide of slides) {
            slide.classList.remove('carousel__item--visible');
            slide.classList.add('carousel__item--hidden');
        }

        slides[slidePosition].classList.add('carousel__item--visible');
    }

    function moveToNextSlide() {
        if (slidePosition=== totalSlides-1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        updateSlidePositions();
    }

    function moveToPrevSlide() {
        if (slidePosition === 0) {
            slidePosition = totalSlides-1;
        } else {
            slidePosition--;
        }
        updateSlidePositions();
    }
}

carousel('wp', 'wp__btn--next', 'wp__btn--prev')
carousel('wc', 'wc__btn--next', 'wc__btn--prev')

