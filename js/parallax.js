let isAnimating = false; // Flag to track if animation is in progress
let animationProgress = 0; // Track how far into the animation we are (0 to 100)
let isAnimationComplete = false; // Track if the animation has finished

// Elements to animate
const sun = document.querySelector(".parallax_sun");
const birds = document.querySelector(".parallax_bird");
const message = document.querySelector(".parallax__message");
const subMsg1 = document.querySelector(".parallax_submsg_1");
const subMsg2 = document.querySelector(".parallax_submsg_2");
const leftGround = document.querySelector(".ground-left");
const rightGround = document.querySelector(".ground-right");
const mountFrame1 = document.querySelector(".mount-frame-1"); // Image element
const parallaxHeader = document.querySelector(".parallax__header");

// Variables for touch handling
let startTouchY = 0;
let isTouching = false;
let specialAnimationTriggered = false; // Flag for special animation

function handleScrollAnimation(deltaY) {
  // If animation is complete, allow normal scrolling
  if (isAnimationComplete) return;

  // Adjust animation progress based on scroll direction
  if (deltaY > 0 && animationProgress < 100) {
    animationProgress += 5; // Increase progress (scroll down)
  } else if (deltaY < 0 && animationProgress > 0) {
    animationProgress -= 5; // Decrease progress (scroll up)
  }

  // Clamp progress to 0-100 range
  animationProgress = Math.min(100, Math.max(0, animationProgress));

  // Apply animations based on progress
  // Use requestAnimationFrame to call the animation function
  requestAnimationFrame(() => animateElements(animationProgress));

  // Once animation reaches the end, release scrolling
  if (animationProgress === 100) {
    document.body.style.overflowY = "scroll"; // Enable normal scrolling
    isAnimationComplete = true;
  } else {
    document.body.style.overflowY = "hidden"; // Keep scroll disabled
  }
}

// Function to animate elements based on progress
function animateElements(progress) {
  const startGradient1 = 26; // Start gradient stop 1 at 26%
  const endGradient1 = -11; // End gradient stop 1 at -11%
  const startGradient2 = 72; // Start gradient stop 2 at 72%
  const endGradient2 = 52; // End gradient stop 2 at 52%

  const gradientStop1 = startGradient1 + ((endGradient1 - startGradient1) * (progress / 100));
  const gradientStop2 = startGradient2 + ((endGradient2 - startGradient2) * (progress / 100));

  // Calculate position offsets for each element (adjust as needed)
  const sunOffsetY = progress * 35;
  const sunOffsetX = progress * 35;
  const birdsOffsetY = progress * 20;
  const birdsOffsetX = progress * 20;
  const messageOffset = progress * -35;
  const subMsg1Offset = progress * -35;
  const subMsg2Offset = progress * 35;
  const leftGroundOffset = progress * 35;
  const rightGroundOffset = progress * 35;

  sun.style.transform = `translate(${-sunOffsetX}px, ${-sunOffsetY}px)`;
  birds.style.transform = `translate(${birdsOffsetX}px, ${-birdsOffsetY}px)`;
  message.style.transform = `translateX(${messageOffset}px)`;
  subMsg1.style.transform = `translateX(${subMsg1Offset}px)`;
  subMsg2.style.transform = `translateX(${subMsg2Offset}px)`;
  leftGround.style.left = -leftGroundOffset + "px";
  rightGround.style.right = -rightGroundOffset + "px";
  parallaxHeader.style.transform = `translateY(${-birdsOffsetY}px)`;

  // Update background gradient
  document.getElementById("scroll-capture-section").style.background =
    `linear-gradient(to bottom, #69A8DB ${gradientStop1}%, #FFC986 ${gradientStop2}%)`;
  console.log(progress);

  // Handle the animation and position change of the secondary section
  const secondarySection = document.querySelector(".parallax__section--secondary");

  if (progress > 15) {
    // Change position to absolute and start moving the section upwards
    secondarySection.style.position = "absolute";
    
    // Calculate the new top value, starting at 100vh and decreasing as progress increases
    const startTop = 100;  // 100vh in percentage
    const topOffset = Math.max(0, startTop - (progress - 15) * 5);  // Decrease top value as progress increases

    // Set the calculated top value for the section
    secondarySection.style.top = `${topOffset}vh`;
  } else {
    // Reset position to relative when progress is less than 15
    secondarySection.style.position = "relative";
    secondarySection.style.top = `initial`; // Reset top to its default
  }

  // Trigger special animation when progress is around 50%
  if (progress >= 10 && !specialAnimationTriggered) {
    triggerSpecialAnimation();
    specialAnimationTriggered = true; // Ensure it only triggers once
  } else if (progress < 10 && specialAnimationTriggered) {
    resetSpecialAnimation(); // Reset if progress goes back below 50
    specialAnimationTriggered = false;
  }
}

// Function for special animation with fade transition
function triggerSpecialAnimation() {
  // Add 'hidden' class to start fade out effect
  mountFrame1.classList.add("hidden");

  // Use a timeout to wait for the fade out to complete before changing the image
  setTimeout(() => {
    // Change the image source to the special version
    mountFrame1.src = "./assets/parallax/mount-frame-2.png"; // Replace with new image path

    // Remove the 'hidden' class to fade back in
    mountFrame1.classList.remove("hidden");
  }, 100); // Duration should match the CSS transition time
}

// Function to reset the special animation with fade transition
function resetSpecialAnimation() {
  // Add 'hidden' class to start fade out effect
  mountFrame1.classList.add("hidden");

  // Use a timeout to wait for the fade out to complete before changing the image back
  setTimeout(() => {
    // Revert the image source back to the original
    mountFrame1.src = "./assets/parallax/mount-frame-1.png"; // Reset to original image path

    // Remove the 'hidden' class to fade back in
    mountFrame1.classList.remove("hidden");
  }, 100); // Duration should match the CSS transition time
}

// Listen for scroll input (desktop)
window.addEventListener("wheel", (event) => {
  console.log("Wheeled")
  if (isAnimating) return; // Ignore if animation is in progress
  handleScrollAnimation(event.deltaY);
});

// Touch event listeners (mobile)
window.addEventListener("touchstart", (event) => {
  startTouchY = event.touches[0].clientY; // Capture starting Y position
  isTouching = true;
});

window.addEventListener("touchmove", (event) => {
  if (!isTouching || isAnimating) return;

  const currentTouchY = event.touches[0].clientY;
  const deltaY = startTouchY - currentTouchY;

  // Treat vertical touch movement similar to scroll wheel
  handleScrollAnimation(deltaY);
  startTouchY = currentTouchY; // Update the starting position for continuous touch movement
});

window.addEventListener("touchend", () => {
  isTouching = false;
});
function scrollHandler(){
  console.log("Scrolled")
  const scrollPosition = window.scrollY;
  const sectionTop = document.getElementById("scroll-capture-section").offsetTop;

  // Check if the user has scrolled back up to the section
  if (scrollPosition <= sectionTop) {
    isAnimationComplete = false;
    animationProgress = 0;
    specialAnimationTriggered = false; // Reset special animation flag
    animateElements(animationProgress); // Reset elements
    document.body.style.overflowY = "hidden"; // Re-capture scroll
  }
}
// Reset animation when scrolling back up
window.addEventListener("scroll", scrollHandler());



