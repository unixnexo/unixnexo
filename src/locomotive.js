/**
* Locomotive scroll library
*/
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
        smooth: false,
    },
    tablet: {
        smooth: false,
    }
});


scroller.on('call', func => {

    if (typeof func === 'string' && func === 'make-text-bigger') {
        makeTextBigger();
        setTimeout(() => {
            scroller.update();
        }, 700);
    }

    if (typeof func === 'string' && func === 'appear-big-flash') {
        appearBigFlash();
    }

    if (typeof func === 'string' && func === 'w') {
        setTimeout(() => {
            document.getElementById('w').classList.remove('rotate-180');
        }, 200);
    }

    if (typeof func === 'string' && func === 'border-line') {
        setTimeout(() => {
            document.getElementById('border-line').classList.remove('scale-75');
        }, 100);
    }
});


const makeTextBigger = () => {

    const text = document.getElementById('hire-me-header-text');
    let sm = window.matchMedia('(max-width: 640px)');

    if (sm.matches) {
        text.classList.remove('text-3xl');
        text.classList.add('text-6xl');
    } else {
        text.classList.remove('md:text-4xl');
        text.classList.add('md:text-8xl');
    }

}


const appearBigFlash = () => {
    setTimeout(() => {
        const bigFlash = document.getElementById('big-flash');
        bigFlash.classList.remove('opacity-0');
    }, 600);
}


window.onload = () => {
    scroller.update();
    console.log('scroller updated');
}
