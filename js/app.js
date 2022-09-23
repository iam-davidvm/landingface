const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet';
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return 'mobile';
    }
    return 'desktop';
}

const device = deviceType();

// if the device is a desktop (with probably a mouse, we want the eyes to follow the eyes, else we want the eyes to animate)
if (device === 'desktop') {
    window.addEventListener('mousemove', e => {
        const eyes = document.querySelectorAll('.eye-inner');
    
        eyes.forEach(eye => {
            // Get the mouse position on the horizontal axis
            let mouseX = e.clientX * 100 / window.innerWidth - 50;
            // we don't want the eyes to move to far
            mouseX = mouseX < -33 ? -33 : mouseX;
            mouseX = mouseX > 33 ? 33 : mouseX;
    
            // Now we also need the vertical offset
            let mouseY = e.clientY * 100 / window.innerHeight - 50;
            // we don't want the eyes to move to far
            mouseY = mouseY < -35 ? -35 : mouseY;
            mouseY = mouseY > 35 ? 35 : mouseY;
    
            // change the translate values to move the eyes
            eye.style.transform = `translate(${mouseX}%, ${mouseY}%)`;
        });
    });
} else {
    const eyeLeft = document.getElementById('eye-left');
    const eyeRight = document.getElementById('eye-right');
    const eyeLeftInner = document.querySelector('.eye-left-inner');
    const eyeRightInner = document.querySelector('.eye-right-inner');

    eyeLeft.classList.add('eye-movement-start');
    eyeRight.classList.add('eye-movement-start');
    eyeLeftInner.classList.add('eye-inner-movement-start');
    eyeRightInner.classList.add('eye-inner-movement-start');

    setTimeout(() => {
        eyeLeft.classList.remove('eye-movement-start');
        eyeRight.classList.remove('eye-movement-start');
        eyeLeftInner.classList.remove('eye-inner-movement-start');
        eyeRightInner.classList.remove('eye-inner-movement-start');
        eyeLeft.classList.add('eye-movement-continue');
        eyeRight.classList.add('eye-movement-continue');
        eyeLeftInner.classList.add('eye-inner-movement-continue');
        eyeRightInner.classList.add('eye-inner-movement-continue');
    }, 4000)
}

