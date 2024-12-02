function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.querySelector('.login-container').style.display = 'none'; // Hide registration container
    document.getElementById('forgotPasswordContainer').style.display = 'none'; // Hide forgot password
    document.getElementById('otpContainer').style.display = 'none'; // Hide OTP container
    document.getElementById('profileBadge').style.display = 'none'; // Hide profile badge
}

function showRegister() {
    document.getElementById('registerForm').reset();
    document.getElementById('loginContainer').style.display = 'none'; // Hide login container
    document.querySelector('.login-container').style.display = 'block'; // Show registration container
    document.getElementById('forgotPasswordContainer').style.display = 'none'; // Hide forgot password
    document.getElementById('otpContainer').style.display = 'none'; // Hide OTP container
    document.getElementById('profileBadge').style.display = 'none'; // Hide profile badge
}

function showForgotPassword() {
    document.getElementById('forgotPasswordContainer').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none'; // Hide login container
    document.getElementById('otpContainer').style.display = 'none'; // Hide OTP container
    document.getElementById('profileBadge').style.display = 'none'; // Hide profile badge
}

function showOTP() {
    document.getElementById('otpContainer').style.display = 'block';
    document.getElementById('forgotPasswordContainer').style.display = 'none'; // Hide forgot password
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const userDetails = {
        fullName: fullName,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(userDetails));
    alert('Registration successful! Your data is stored in our database which is used to sent fitness tips.You can now log in.');
    showLogin();
});

// Login Logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUser = localStorage.getItem(loginEmail);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === loginPassword) {
            alert('Hey Buddy ,Login successful! Due to some maintanance issue you reach to home page after 3 second automatically. Sorry for inconvinence.');
            handleLogin(user); // Call the function to handle login
        } else {
            alert('Incorrect password!');
        }
    } else {
        alert('No user found with this email!');
    }
});

// Handle login
function handleLogin(user) {
    // Set user profile details
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('profileBadge').style.display = 'block';
    document.getElementById('userName').innerText = user.fullName;
    document.getElementById('userEmail').innerText = user.email;

    // Hide the login and register links after logging in
    document.querySelector('.register-link').style.display = 'none'; // Hide register link
    // Ensure login button is hidden as well
    const loginButton = document.querySelector('button[type="submit"]'); // Get the login button
    if (loginButton) {
        loginButton.style.display = 'none'; // Hide login button
    }

    // Redirect to the Fitness Freak website after a short delay
    setTimeout(function() {
        window.location.href = "http://127.0.0.1:5500/Project/fitness%20freak%20website/main/index.html"; // Change this to the actual URL
    }, 3000); // 3 seconds delay for user to see the profile
}

// Logout function
function logout() {
    document.getElementById('profileBadge').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.querySelector('.register-link').style.display = 'block'; // Show register link again
}

// Forgot Password Logic
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const forgotEmail = document.getElementById('forgotEmail').value;
    const storedUser = localStorage.getItem(forgotEmail);
    if (storedUser) {
        alert('OTP sent to your email! (Simulated, not actually sent)');
        showOTP();
    } else {
        alert('No user found with this email!');
    }
});

// OTP Verification Logic
document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const otpInput = document.getElementById('otp').value;
    // Simulate OTP verification (you can implement a real OTP system)
    if (otpInput === "230225") { // Example: hardcoded OTP for simulation
        const email = document.getElementById('forgotEmail').value;
        const storedUser = JSON.parse(localStorage.getItem(email));
        const newPassword = prompt("Enter your new password:");
        storedUser.password = newPassword;
        localStorage.setItem(email, JSON.stringify(storedUser));
        alert('Password has been reset successfully!');
        showLogin();
    } else {
        alert('Invalid OTP!');
    }
});





