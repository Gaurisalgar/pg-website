document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
    
    // Validate fields
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('name-error').textContent = 'Name can contain only letters and spaces';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
        document.getElementById('phone-error').textContent = 'Phone number is required';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
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
    
    // Gender validation
    const gender = document.getElementById('gender').value;
    if (!gender) {
        document.getElementById('gender-error').textContent = 'Please select your gender';
        isValid = false;
    }
    
    // Terms validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms-error').textContent = 'You must agree to the terms';
        isValid = false;
    }
    
    // If form is valid, redirect to login page
    if (isValid) {
        // Redirect to login page
        window.location.href = 'login.html';
    }
});

// Add real-time validation for better UX
document.getElementById('name').addEventListener('input', function() {
    if (this.value.trim().length >= 3) {
        document.getElementById('name-error').textContent = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.value.trim())) {
        document.getElementById('email-error').textContent = '';
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(this.value.trim())) {
        document.getElementById('phone-error').textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value.length >= 8) {
        document.getElementById('password-error').textContent = '';
    }
});
