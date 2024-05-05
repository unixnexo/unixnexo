/**
 * observer to detech when an element is in view
 */
function onVisible(element, callback) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        callback(element);
        observer.disconnect();
      }
    });
  }).observe(element);
  if(!callback) return new Promise(r => callback=r);
}


/**
 * logo and innertext changer
 */
const soundsStateSwitcherCon = document.getElementById('sounds-state-switcher-con');
const soundsStateSwitcher = document.getElementById('sounds-state-switcher');
const pixarOn = document.getElementById('pixar-on');
const pixarOff = document.getElementById('pixar-off');

const stateChanger = () => {
    if (soundsStateSwitcher.innerHTML === 'on') {
        soundsStateSwitcher.innerHTML = 'off';
        pixarOn.classList.add('hidden');
        pixarOff.classList.remove('hidden');
    } else {
        soundsStateSwitcher.innerHTML = 'on';
        pixarOn.classList.remove('hidden');
        pixarOff.classList.add('hidden');
    }
}

soundsStateSwitcherCon.addEventListener('click', stateChanger)


/**
 * if on, enable sounds
 */

// click sound
const audioClick = new Audio('../public/sounds/click.mp3');

const playClickSound = () => {
    if (soundsStateSwitcher.innerHTML === "on") {
        audioClick.play();
    }
}

document.querySelectorAll('.sound-click').forEach(item => {
    item.addEventListener('click', playClickSound);
});


// sounds-switcher sound
const audioSoundSwitcherEnable = new Audio('../public/sounds/enable-sound.mp3');
const audioSoundSwitcherDisable = new Audio('../public/sounds/disable-sound.mp3');

const playSoundSwitcherSound = () => {
    if (soundsStateSwitcher.innerHTML === "on") {
        audioSoundSwitcherEnable.play();
    } else {
        audioSoundSwitcherDisable.play();
    }
}

document.querySelectorAll('.sound-switcher-sound').forEach(item => {
    item.addEventListener('click', playSoundSwitcherSound);
});


// savage duck sound
const audioSavageDuckSound = new Audio('../public/sounds/popup.mp3');

const PlaySavageDuckSound = () => {
    if (soundsStateSwitcher.innerHTML === "on") {
        audioSavageDuckSound.play();
    }
}

onVisible(document.querySelector("#shy-but-savage-duck"), PlaySavageDuckSound); // the func is on top of the page


// theme switch sound
const audioThemeSwitch = new Audio('../public/sounds/theme-ch.mp3');
const audioThemeSwitchRev = new Audio('../public/sounds/theme-ch-rev.mp3');
const themeSwitcherText = document.getElementById('theme-switcher-text');

const PlayThemeSwitchSound = () => {
    if (soundsStateSwitcher.innerHTML === "on") {
        if (themeSwitcherText.innerHTML === "on") {
            audioThemeSwitch.play();
        } else {
            audioThemeSwitchRev.play();
        }
    }
}

document.querySelectorAll('.sound-theme-switcher').forEach(item => {
    item.addEventListener('click', PlayThemeSwitchSound);
});





///////////// test





