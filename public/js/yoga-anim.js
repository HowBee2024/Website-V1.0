window.onload = () => {
    const image = document.querySelector('#myyogaImage');
    const paraElement = document.querySelector('#yoga-right-para2');
    const paraLeftElement = document.querySelector('#yoga-left-para1');
    console.log(paraElement);
    console.log(window.innerWidth);


    if (image && paraElement && window.innerWidth > 1025) {
        let imageWidth = image.width;
        let rightPara = imageWidth - 30;
        let leftPara = imageWidth - 150

        // Set position dynamically if missing
        paraElement.style.right = `-${rightPara}px`;
        paraLeftElement.style.left = `-${leftPara}px`;
        console.log('Right position:', paraElement.style.right); // Debug
    } else {
        console.error('Image or paragraph element not found.');
    }
};
