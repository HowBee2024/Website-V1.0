document.addEventListener('DOMContentLoaded', function () {


    const signupTab = document.getElementById('signup-tab');
    const loginTab = document.getElementById('login-tab');
    const authFormBody = document.getElementById('auth-form-body');
    const contactTab = document.getElementById('contact-tab');
    // Update event listener for contact tab


    function showSignupForm() {
        authFormBody.innerHTML = `
            <form id="signup-form" action="#">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Password</label>
                <div class="password-wrapper">
                    <i class="fas fa-eye" id="toggle-password"></i>
                    <input type="password" id="password" name="password" required>
                </div>
                <small id="password-instruction">Use 8 digit password</small>
                <label for="confirm-password">Confirm Password</label>
                <div class="password-wrapper">
                    <i class="fas fa-eye" id="toggle-confirm-password"></i>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                </div>
                <label for="invite-code">Invite Code</label>
                <input type="text" id="invite-code" name="invite-code" required>
                <label class="auth-form-checkbox-label" style="margin: 1rem 0rem;">
                    <input type="checkbox" name="terms" required>
                    I agree to the terms and conditions
                </label>
                <div class="form-footer">
                    <button type="submit" class="auth-form-submit-btn">Sign Up</button>
                    <span class="auth-form-switch">
                        <p>Already have an account? <a href="#" id="auth-switch-link">Log In</a></p>
                    </span>
                </div>
            </form>
        `;
        signupTab.style.background = 'yellow'
        loginTab.style.background = 'white'
        contactTab.style.background = "white"
        document.getElementById('auth-switch-link').addEventListener('click', function (event) {
            event.preventDefault();
            showLoginForm();
        });
        document.getElementById("auth-header").innerHTML = `<span style="color: #ff9315; font-family: inherit">Bee</span
              > Confident`
        document.getElementById("auth-text").innerHTML = `Begin this wonderful <br/>
            journey with us!`

        togglePasswordVisibility('password', 'toggle-password');
        togglePasswordVisibility('confirm-password', 'toggle-confirm-password');
    }
    function showLoginForm() {
        authFormBody.innerHTML = `
            <form id="login-form" action="#">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Password</label>
                <div class="password-wrapper">
                    <i class="fas fa-eye" id="toggle-password"></i>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-footer">
                    <button type="submit" class="auth-form-submit-btn">Login</button>
                    <span class="auth-form-switch">
                        <p>Don't have an account? <a href="#" id="auth-switch-link">Sign Up</a></p>
                    </span>
                </div>
                <br>
                <a href="#">Forgot your password ?</a>
            </form>
        `;
        signupTab.style.background = 'white'
        loginTab.style.background = 'yellow';
        contactTab.style.background = "white"
        document.getElementById('auth-switch-link').addEventListener('click', function (event) {
            event.preventDefault();

            showSignupForm();
        });
        document.getElementById("auth-header").innerHTML = `<span style="color: #ff9315; font-family: inherit">Bee</span
              > Consistent`
        document.getElementById("auth-text").innerHTML = `Pick up right where you <br/>
            left off!`
        togglePasswordVisibility('password', 'toggle-password');
    }
    function showContactForm() {
        authFormBody.innerHTML = `
            <form id="contact-form" action="#">
                <label for="contact-name">Name</label>
                <input type="text" id="contact-name" name="name" required>
                <label for="contact-phone">Phone No.</label>
                <input type="tel" id="contact-phone" name="phone" required>
                <label for="contact-email">Email</label>
                <input type="email" id="contact-email" name="email" required>
                <label for="contact-desc">Description</label>
                <textarea id="contact-desc" name="desc" required></textarea>
                <div class="form-footer">
                    <button type="submit" style="width:fit-content" class="auth-form-submit-btn">Send Message</button>
                </div>
            </form>
        `;
        signupTab.style.background = 'white';
        loginTab.style.background = 'white';
        contactTab.style.background = 'yellow';
        document.getElementById("auth-header").innerHTML = `<span style="color: #ff9315; font-family: inherit">Bee</span> Responsive`;
        document.getElementById("auth-text").innerHTML = `We're here to help you!<br/>Reach out with any questions you have.`;
    }

    function togglePasswordVisibility(inputId, toggleId) {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(toggleId);

        toggleIcon.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }



    const clouds = document.querySelectorAll('.object');
    const container = document.querySelector('.auth-container');
    const maxWidth = container.clientWidth; // Max width of the container
    const maxHeight = container.clientHeight; // Max height of the container

    function randomizeAnimation(cloud) {
        const startX = Math.random() * maxWidth - maxWidth / 2;
        const startY = Math.random() * maxHeight - maxHeight / 2;
        const midX = Math.random() * maxWidth - maxWidth / 2;
        const midY = Math.random() * maxHeight - maxHeight / 2;
        const endX = startX; // End at the start point for continuity
        const endY = startY; // End at the start point for continuity

        cloud.style.setProperty('--startX', `${startX}px`);
        cloud.style.setProperty('--startY', `${startY}px`);
        cloud.style.setProperty('--midX', `${midX}px`);
        cloud.style.setProperty('--midY', `${midY}px`);
        cloud.style.setProperty('--endX', `${endX}px`);
        cloud.style.setProperty('--endY', `${endY}px`);
    }

    setInterval(() => {
        clouds.forEach(cloud => randomizeAnimation(cloud));
    }, 10000); // Change animation every 10 seconds



    contactTab.addEventListener('click', showContactForm);
    signupTab.addEventListener('click', showSignupForm);
    loginTab.addEventListener('click', showLoginForm);

    // Initially show the signup form
    showSignupForm();
});
