/**
 * time api
 */
const myLocalTime = document.getElementById('my-local-time');
const getLocalTime = () => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Tehran/')
    .then(response => response.json())
    .then(data => {
        const datetime = new Date(data.datetime);
        const time = datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        myLocalTime.innerHTML = time;
    })
    .catch(error => {
        myLocalTime.innerHTML = '¯\\_(ツ)_/¯';
    })
};

getLocalTime();
setInterval(getLocalTime, '60000'); // 1 min


/**
 * weather api
 */
const localWeather = document.getElementById('local-weather');
const localWeatherIcon = document.getElementById('local-weather-icon');
// yeah yeah i know about the key, i mean what do u wanna do with it? so it's not a security risk really;
const getLocalWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=29.5926&lon=52.5836&units=metric&appid=400eb64a3459875f31b22fc9c3f692e9')
    .then(response => response.json())
    .then(data => {
        const temperature = Math.floor(data.main.temp);
        localWeather.innerHTML = temperature + "°C";
        localWeatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        localWeatherIcon.classList.remove('hidden');
    })
    .catch(error => {
        localWeather.innerHTML = '¯\\_(ツ)_/¯';
    })
}

getLocalWeather();
setInterval(getLocalWeather, '1800000'); // 30 min



/**
 * search tags btns
 */

// search functionality
const dataPostTags = document.querySelectorAll('[data-tag]');

const allSearch = document.getElementById('all_btn_search');
const phoneSearch = document.getElementById('phone_btn_search');
const softwareSearch = document.getElementById('software_btn_search');
const cssSearch = document.getElementById('css_btn_search');

allSearch.addEventListener('click', () => {
    dataPostTags.forEach(tag => {
        const tagValue = tag.getAttribute('data-tag');
        if (tagValue) {
            tag.classList.remove('hidden');
        }
    });
});

phoneSearch.addEventListener('click', () => {
    dataPostTags.forEach(tag => {
        const tagValue = tag.getAttribute('data-tag');
        if (tagValue !== 'phone') {
            tag.classList.add('hidden');
        }

        if (tagValue === 'phone') {
            tag.classList.remove('hidden');
        }
    });
});

softwareSearch.addEventListener('click', () => {
    dataPostTags.forEach(tag => {
        const tagValue = tag.getAttribute('data-tag');
        if (tagValue !== 'software') {
            tag.classList.add('hidden');
        }

        if (tagValue === 'software') {
            tag.classList.remove('hidden');
        }
    });
});

cssSearch.addEventListener('click', () => {
    dataPostTags.forEach(tag => {
        const tagValue = tag.getAttribute('data-tag');
        if (tagValue !== 'css') {
            tag.classList.add('hidden');
        }

        if (tagValue === 'css') {
            tag.classList.remove('hidden');
        }
    });
});


// btns tags click effect
const allSearchTagBtns = document.querySelectorAll('._btn-search-tag');
allSearchTagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('scale-95');
        setTimeout(() => {
            btn.classList.remove('scale-95');
        }, 150);

        scroller.update(); // locomotive scroll gets updated
        
    });
});



/**
 * savage duck
 */
const savageDuckCon = document.getElementById('savage-duck-con');

const savageDuck = document.getElementById('shy-but-savage-duck');
const savageDuckThought = document.getElementById('savage-duck-thought');
const startTalkingWithSavageDuck = document.getElementById('talk-with-savage-duck-start');
const cancelTalkingWithSavageDuck = document.getElementById('talk-with-savage-duck-cancel');

const dontBeShyTextMe = () => {
    savageDuckCon.classList.remove('hidden');

    setTimeout(() => {
        savageDuck.classList.remove('translate-x-32');
        savageDuck.classList.add('translate-x-12');
        savageDuck.classList.remove('-rotate-[0deg]');
        savageDuck.classList.add('-rotate-[50deg]');
    }, 100);

    savageDuckThought.style.display = 'flex';

    setTimeout(() => {
        savageDuckThought.classList.remove('opacity-0');
    }, 500);

};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        dontBeShyTextMe();
        savageDuckCon.scrollIntoView({ behavior: 'smooth' });
    }, 40000);
});


const dontBeShyTextMeCancel = () => {
    savageDuckThought.classList.add('opacity-0');

    setTimeout(() => {
        savageDuckThought.style.display = 'none';
    }, 500);

    setTimeout(() => {
        savageDuck.classList.add('translate-x-32');
        savageDuck.classList.remove('translate-x-12');
        savageDuck.classList.add('-rotate-[0deg]');
        savageDuck.classList.remove('-rotate-[50deg]');
    }, 500);

    setTimeout(() => {
        savageDuckCon.classList.add('hidden');
    }, 900);

};

cancelTalkingWithSavageDuck.addEventListener('click', dontBeShyTextMeCancel);

startTalkingWithSavageDuck.addEventListener('click', () => {
    savageDuckThought.innerText = "I know Unix for a long time, and he's good at what he does!";
    setTimeout(() => {
        savageDuckThought.innerText = "yeah I know he ain't got many projects to show off";
    }, 6000);

    setTimeout(() => {
        savageDuckThought.innerText = "but come on bruh he haven't had the right opportunites";
    }, 12000);

    setTimeout(() => {
        savageDuckThought.innerText = "u need to put your faith in junior developers man, they're the future!";
    }, 18000);

    setTimeout(() => {
        savageDuckThought.innerText = "now don't be shy! say Hi to him, he won't eat you, that's for sure;";
    }, 24000);

    setTimeout(() => {
        savageDuckThought.innerText = "Okay then, Imma head back, tnx for listening bro.";
    }, 30000);

    setTimeout(() => {
        dontBeShyTextMeCancel();
    }, 36000);
});


/**
 * profile picture moving with mouse moving || it's needed to use 'defer'
 */

// the variable below has already been declared in pointer.js file - checks whether the device is touch or not
if (!isTouchDevice) {
    const profPic = document.getElementById("prof-pic");

    // to rotate the profPic
    function rotate(event) {
        let x = event.clientX;
        let y = event.clientY;
        let w = window.innerWidth;
        let h = window.innerHeight;
        let midX = w / 2;
        let midY = h / 2;
        let posX = x - midX;
        let posY = y - midY;
        let valX = (posX / midX) * 20;
        let valY = (posY / midY) * - 20;
        profPic.style.transform = "perspective(1000px) rotateY(" + valX + "deg) rotateX(" + valY + "deg)";
    }

    // to handle intersection changes
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.addEventListener("mousemove", rotate, false);
            } else {
                document.removeEventListener("mousemove", rotate, false);
            }
        });
    }

    const options = {
        root: null,
        threshold: 0.2 // trigger when at least 20% of profPic is in view
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(profPic); 

    document.addEventListener('mouseleave', () => {
        profPic.classList.add('transition-transform');
        profPic.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
        setTimeout(() => {
            profPic.classList.remove('transition-transform');
        }, 200);
    });
}


/**
 * horizontal auto scroll
 */
const horizontalScrollContentCopy = document.querySelector('.horizontal-scroll-content').cloneNode(true);
document.querySelector('.horizontal-scroll-con').appendChild(horizontalScrollContentCopy);



/**
 * touchable actions for touch devices
 */
// the variable below has already been declared in pointer.js file - checks whether the device is touch or not
// didn't want to use hammer.js for something too little 

if (isTouchDevice) {
    const touchResponse = document.querySelectorAll('.touchableResponse');
    touchResponse.forEach((touchElement) => {
        touchElement.addEventListener('touchstart', () => {
            touchElement.classList.add('bg-slate-700/30');
        });
        touchElement.addEventListener('touchend', () => {
            setTimeout(() => {
                touchElement.classList.remove('bg-slate-700/30');
            }, 300);
        });
    });
}




////////////////////////////test





