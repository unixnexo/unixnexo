const html = document.querySelector('html');
html.classList.add('overflow-hidden');

const hi = document.getElementById('hi-text');
const progressBar = document.getElementById('progress-indicator');
const loadingCon = document.getElementById('loading-con');

function updateProgressBar(progress) {
    progressBar.style.width = progress + '%';
}

function startLoading() {
    let loadingProgress = 0;
    const interval = setInterval(() => {
        loadingProgress += 1;
        updateProgressBar(loadingProgress);
        if (loadingProgress >= 100) {
            clearInterval(interval);
            progressBar.setAttribute('data-completed', 'true');
            hi.classList.remove('translate-y-20');
        }
    }, 10);
}

startLoading();

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete' && progressBar.getAttribute('data-completed') === 'true') {
        clearInterval(stateCheck);
        loadContent(); 
    }
}, 100);


async function loadContent() {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    hi.classList.add('translate-y-20');

    // Hide progress bar
    for (let loadingProgress = 100; loadingProgress >= 0; loadingProgress--) {
        updateProgressBar(loadingProgress);
        await new Promise(resolve => setTimeout(resolve, 1)); 
    }

    loadingCon.classList.add('-translate-y-full');
    html.classList.remove('overflow-hidden');
    const noise = document.querySelector('.noise');
    noise.classList.remove('z-30');

}


