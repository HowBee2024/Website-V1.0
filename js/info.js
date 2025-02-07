window.addEventListener('scroll', () => {
    const box = document.querySelector('.info-section__img ');
    const boxPosition = box.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;
    // Check if the box is in the viewport
    if (boxPosition < screenPosition) {
        box.classList.add('animate'); // Trigger the animation
    } else {
        box.classList.remove('animate')
    }
    const leftCloud = document.querySelector('.left-cloud');
    const rightCloud = document.querySelector('.right-cloud');
    const leftCloudPosition = leftCloud.getBoundingClientRect().top;
    const rightCloudPosition = rightCloud.getBoundingClientRect().top;
    
    // Check if the box is in the viewport
    if (leftCloudPosition < screenPosition) {
        leftCloud.classList.add('animate'); // Trigger the animation
        rightCloud.classList.add('animate');
    } else {
        leftCloud.classList.remove('animate'); // Trigger the animation
        rightCloud.classList.remove('animate');
    }
});
