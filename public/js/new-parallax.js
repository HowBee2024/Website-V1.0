
document.addEventListener("scroll", () => {
    const circles = document.querySelectorAll(".circle");
    const heading = document.querySelector(".parallax-head");
    const paragraph = document.querySelector(".parallax-para");
    const scrollTop = window.scrollY;
    let dcancingArrow = document.querySelector(".dancing-arrow")
    console.log(scrollTop);
    if(scrollTop == 0){
        dcancingArrow.style.display = "block"
    }else{
        dcancingArrow.style.display = "none"
    }
    let circle1 = document.querySelector(".circle-1");
    const computedStyle1 = window.getComputedStyle(circle1);
    let circle1Height = circle1.offsetHeight;
    let circle1Mv = Math.min(-circle1Height + scrollTop * 0.7, -circle1Height / 2);
    circle1.style.top = circle1Mv + 'px';

    // Handling for circle2
    let circle2 = document.querySelector(".circle-2");
    const computedStyle2 = window.getComputedStyle(circle2);
    let circle2Height = circle2.offsetHeight;
    console.log(parseInt(circle1.style.top) , -circle1Height/2);
    console.log(parseInt(circle1.style.top) == -circle1Height/2);
    let circle2Mv = -circle2Height;  // Initial position set to half height (not moving initially)
    if ((-circle1Height / 2) - 1 < parseInt(circle1.style.top) ) {  // Check if circle1 has reached its max position
        circle2Mv = Math.min(-circle2Height + (scrollTop - (circle1Height)) * 1, -circle2Height / 2);
    }
    circle2.style.top = circle2Mv + 'px';

    // Handling for circle3
    let circle3 = document.querySelector(".circle-3");
    const computedStyle3 = window.getComputedStyle(circle3);
    let circle3Height = circle3.offsetHeight;
    let circle3Mv = -circle3Height;  // Initial position set to half height
    console.log(parseInt(circle2.style.top) , -circle2Height/2);
    console.log(parseInt(circle2.style.top) == -circle2Height/2);
    
    if ((-circle2Height / 2) - 1 < parseInt(circle2.style.top)) {  // Check if circle2 has reached its max position
        circle3Mv = Math.min(-circle3Height + (scrollTop) * 1.5, -circle3Height / 2);
    }
    circle3.style.top = circle3Mv + 'px';

    // Repeat the pattern for circle4 and circle5
    let circle4 = document.querySelector(".circle-4");
    const computedStyle4 = window.getComputedStyle(circle4);
    let circle4Height = circle4.offsetHeight;
    let circle4Mv = -circle4Height;  // Initial position set to half height
    if ((-circle3Height / 2) - 1 <  parseInt(circle3.style.top) ) {
        circle4Mv = Math.min(-circle4Height + (scrollTop - ((circle3Height))) * 2, -circle4Height / 2);
    }
    circle4.style.top = circle4Mv + 'px';

    let circle5 = document.querySelector(".circle-5");
    const computedStyle5 = window.getComputedStyle(circle5);
    let circle5Height = circle5.offsetHeight;
    let circle5Mv = -circle5Height;  // Initial position set to half height
    if ((-circle4Height / 2) - 1 <  parseInt(circle4.style.top)) {
        circle5Mv = Math.min(-circle5Height + (scrollTop - (circle4Height)) * 2.5, -circle5Height / 2);
    }
    circle5.style.top = circle5Mv + 'px';



    // // Get the current transform style
    // const currentTransform = computedStyle.transform || computedStyle.webkitTransform;
    // // Extract the current translateY value from the matrix
    // let currentTranslateY = getMatrixTranslateY(currentTransform);
    // // Decrease translateY by 4, but do not exceed 50% of the element's height
    // let newTranslateY = Math.min(currentTranslateY + 100, 0);
    // if(scrollTop == 0){       
    //     newTranslateY = - circle1.offsetHeight /2
    // }   
    // // Construct a new matrix with the updated translateY value
    // const newTransform = currentTransform.replace(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+\)/, `matrix($1, $2, $3, $4, $5, ${newTranslateY})`);
    // // Update the transform style
    // circle1.style.transform = newTransform;


    // let circle2 = document.querySelector(".circle-2")
    // // Get the current computed style of the element
    // const computedStyle2 = window.getComputedStyle(circle2);
    // // Get the current transform style


    // const currentTransform2 = computedStyle2.transform || computedStyle2.webkitTransform;
    // console.log(currentTransform2);
    // // Extract the current translateY value from the matrix
    // let currentTranslateY2 = getMatrixTranslateY(currentTransform2);
    // // Decrease translateY by 4, but do not exceed 50% of the element's height
    // let newTranslateY2= Math.min(currentTranslateY2 + 300, 0);
    // console.log(newTranslateY2);


    // // Update the transform style
    // circle2.style.transform =`translateX(-50%) translateY(${newTranslateY2}px)`;


    // let circle3 = document.querySelector(".circle-3")
    // // Get the current computed style of the element
    // const computedStyle3 = window.getComputedStyle(circle3);
    // // Get the current transform style
    // const currentTransform3 = computedStyle3.transform || computedStyle3.webkitTransform;
    // // Extract the current translateY value from the matrix
    // let currentTranslateY3 = getMatrixTranslateY(currentTransform3);
    // // Decrease translateY by 4, but do not exceed 50% of the element's height
    // let newTranslateY3= Math.min(currentTranslateY3 + 200, 0);
    // if(scrollTop == 0){


    //     newTranslateY3 = - circle3.offsetHeight /2
    // }      
    // // Update the transform style
    // circle2.style.transform =`translateX(-50%) translateY(${newTranslateY3}px)`;
    // console.log("down");
    





    // Update the transform style
    // circle1.style.transform = `translateX(-50%) translateY(${newTranslateY}vh)`;






    const triggerHeight = window.innerHeight * 0.5; // Trigger point for circle animations

    // Animate circles based on scroll position
    // circles.forEach((circle, index) => {
    //     const offset = (index + 1) * 150; // Adjust timing for each circle based on index
    //     // console.log({scrollTop,offset,triggerHeight});
    //     // console.log(scrollTop > offset - triggerHeight);

    //     // Add "active" class to circles when the scroll position reaches their trigger point
    //     if (scrollTop > offset) {
    //         circle.classList.add(`active-circle-${index + 1}`);
    //     } else {
    //         circle.classList.remove(`active-circle-${index + 1}`);
    //     }
    // });

    // Animate heading and paragraph
    const textTriggerHeight = 800; // Adjust based on position
    if (scrollTop > textTriggerHeight - triggerHeight) {
        heading.classList.add("active-text");
        paragraph.classList.add("active-text");
    } else {
        heading.classList.remove("active-text");
        paragraph.classList.remove("active-text");
    }

    const viewportHeight = window.innerHeight; // Height of the viewport in pixels
    const scrollCaptureSection = document.querySelector(".parallax-box");

    // Check if the user has scrolled past 100vh
    // if (scrollTop > viewportHeight) {
    //     // Change circles to absolute position

    //     // Apply smooth transition to #scroll-capture-section height
    //     scrollCaptureSection.style.transition = "height 1s ease-out, padding 1s ease-out";
    //     scrollCaptureSection.style.position = "relative";
    //     scrollCaptureSection.style.paddingBottom = "0"; // Remove extra padding

    // } else {



    //     // Apply smooth transition to #scroll-capture-section height
    //     scrollCaptureSection.style.transition = "height 1s ease-out, padding 1s ease-out";
    //     scrollCaptureSection.style.position = "fixed";

    // }
});
