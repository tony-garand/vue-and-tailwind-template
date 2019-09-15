import stickybits from 'stickybits';
import Flickity from 'flickity';

function eventlessHashChange(newHash) {
    if (history.replaceState) {
        history.replaceState(null, null, '#' + newHash);
    }
    else {
        window.location.hash = '#' + newHash;
    }
}

function openModal() {
    setTimeout(() => {
        let id = window.location.hash.substring(1);
        eventlessHashChange(id);
        let modal = document.getElementById('modal');
        let modalInner = document.getElementById(id);
        // let pageInner = document.getElementById('page-inner');
        if (modalInner) {
            modal.classList.remove('hidden');
            modalInner.classList.remove('hidden');
            // pageInner.classList.remove('relative');
            // pageInner.classList.add('fixed');
        }
    }, 100);
}

function closeModal() {
    let id = window.location.hash.substring(1);
    let modal = document.getElementById('modal');
    let modalInner = document.getElementById(id);
    // let pageInner = document.getElementById('page-inner');
    if (modalInner) {
        modal.classList.add('hidden');
        modalInner.classList.add('hidden');
        eventlessHashChange('');
        // pageInner.classList.remove('fixed');
        // pageInner.classList.add('relative');
    }
}

function handleScroll() {
  if(window.innerWidth > 600){
    if (typeof handleScroll.openedModal !== 'undefined') {
        return;
    }
    let mainCopy = document.getElementById('main-copy');
    if (window.scrollY >= mainCopy.scrollTop + mainCopy.offsetHeight) {
        handleScroll.openedModal = true;
        window.location.hash = 'schedule-appointment';
        openModal();
    }
  }
}

// Simpli.fi Script onclick
function fireButtonPixel()
{
    if (typeof fireButtonPixel.fired !== 'undefined') {
        return;
    }
    fireButtonPixel.fired = true;
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://tag.simpli.fi/sifitag/cae574e0-979e-0137-589a-06659b33d47c";
    document.getElementsByTagName('head')[0].appendChild(s);
}

// Setting the onclick attributes for the submit buttons
document.addEventListener("DOMContentLoaded", function() {
    // kick off the polyfills
    stickybits('#page-header',{
        useStickyClasses: true
    });
    let flktyOptions = {
        contain: true,
        prevNextButtons: false,
        watchCSS: true
    };
    let flkty = new Flickity('.main-carousel', flktyOptions);

    //open modal form
    if (window.location.hash.length > 1) {
        openModal();
    }
    let openButtons = document.querySelectorAll('[data-open-modal]');
    openButtons.forEach((elem) => {
        elem.onclick = openModal;
    });

    //close modal
    let closeButtons = document.getElementsByClassName('close-modal');
    for(let elem of closeButtons) {
        elem.onclick = closeModal;
    }
    let modal = document.getElementById('modal');
    let formInner = document.getElementById('schedule-appointment');
    let thanksInner = document.getElementById('thanks');
    document.addEventListener('click', (event) => {
        if (!formInner.contains(event.target)
            && !thanksInner.contains(event.target)
            && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    //scrollEvents
    document.body.onscroll = handleScroll;

    let buttons = document.querySelectorAll("#scheduleAppointment-form div.submit button");
    buttons.forEach((element) => {
        element.addEventListener('click', fireButtonPixel);
    });

    let apptForm = document.getElementById('scheduleAppointment-form');
    apptForm.addEventListener('submit', (event) => {
        if(grecaptcha.getResponse().length == 0) {
            event.preventDefault();
            if (typeof apptForm.hasRecaptchaError === 'undefined') {
                let error = document.createElement('div');
                error.classList.add('text-red-500','font-body','text-xs','mt-2');
                error.innerText = 'The ReCaptcha is required.';
                apptForm.append(error);
                apptForm.hasRecaptchaError = true;
            }
        }
    });
});
