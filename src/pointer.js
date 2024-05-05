// if the device supports touch events
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// works when it's not a touch-screen device
if (!isTouchDevice) {

    // svg
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.position = "fixed";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.zIndex = '10';
    svg.style.pointerEvents = "none";

    // ring
    const outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outerCircle.setAttribute("cx", "0");
    outerCircle.setAttribute("cy", "0");
    outerCircle.setAttribute("r", "30");
    outerCircle.setAttribute("fill", "none");
    outerCircle.setAttribute("stroke", "#4381C1");
    outerCircle.setAttribute("stroke-width", "2");
    outerCircle.classList.add('transition-opacity', 'opacity-0', 'duration-300');

    svg.appendChild(outerCircle);
    document.body.appendChild(svg);


    let notMoving;

    document.addEventListener('mousemove', (event) => {
        outerCircle.classList.remove('transition-all');

        // when the mouse is not moving
        clearTimeout(notMoving);
        notMoving = setTimeout(() => {
            console.log('standing by');
        }, 500);

        // ring follows the cursor with a delay
        setTimeout(() => {
            outerCircle.setAttribute("cx", event.clientX);
            outerCircle.setAttribute("cy", event.clientY);
        }, 200);

    });

    document.addEventListener('mousedown', () => {
        outerCircle.classList.add('transition-all');
        outerCircle.setAttribute("r", "25");
    });

    document.addEventListener('mouseup', () => {
        setTimeout(() => {
            outerCircle.setAttribute("r", "30");
        }, 100);
    });

    document.addEventListener('mouseleave', () => {
        outerCircle.classList.add('opacity-0');
    });

    document.addEventListener('mouseenter', () => {
        setTimeout(() => {
            outerCircle.classList.remove('opacity-0');
        }, 300);
    });


    // to remove the ring when the cursor is pointer for a better visibility
    document.addEventListener('mousemove', (event) => {
        let cursorType = window.getComputedStyle(event.target).cursor;
        if (cursorType === 'pointer') {
            outerCircle.classList.add('opacity-0');
        } else {
            outerCircle.classList.remove('opacity-0');
        }
    });

}



/////////////////test


