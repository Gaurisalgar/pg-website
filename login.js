document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
    
    // Validate fields
    let isValid = true;
    
    // Email/Phone validation
    const emailOrPhone = document.getElementById('emailOrPhone').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!emailOrPhone) {
        document.getElementById('emailOrPhone-error').textContent = 'Email or phone number is required';
        isValid = false;
    } else if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
        document.getElementById('emailOrPhone-error').textContent = 'Please enter a valid email or 10-digit phone number';
        isValid = false;
    }
    
    // Password validation
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
        isValid = false;
    }
    
    // If form is valid, submit it
    if (isValid) {
        redirectToHome();  // This will redirect after validation
    }
});

// Function to redirect after successful login validation
function redirectToHome() {
    window.location.href = "index.html";
}
