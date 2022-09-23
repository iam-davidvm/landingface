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