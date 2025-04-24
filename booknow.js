document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
    
    // Validate fields
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
        isValid = false;
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
    
    
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
        document.getElementById('phone-error').textContent = 'Phone number is required';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }
    
    
    const city = document.getElementById('city').value.trim();
    if (!city) {
        document.getElementById('city-error').textContent = 'City is required';
        isValid = false;
    }
    const roomType = document.getElementById('roomType').value;
    if (!roomType) {
        document.getElementById('roomType-error').textContent = 'Please select a room type';
        isValid = false;
    }
    
    
    const checkin = document.getElementById('checkin').value;
    if (!checkin) {
        document.getElementById('checkin-error').textContent = 'Check-in date is required';
        isValid = false;
    } else {
        const today = new Date();
        const selectedDate = new Date(checkin);
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            document.getElementById('checkin-error').textContent = 'Check-in date cannot be in the past';
            isValid = false;
        }
    }
    
    
    const duration = document.getElementById('duration').value;
    if (!duration) {
        document.getElementById('duration-error').textContent = 'Duration is required';
        isValid = false;
    } else if (duration < 1 || duration > 12) {
        document.getElementById('duration-error').textContent = 'Duration must be between 1 and 12 months';
        isValid = false;
    }
    
    
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms-error').textContent = 'You must agree to the terms';
        isValid = false;
    }
    
    
    if (isValid) {
        alert('Form submitted successfully!');
        
    }
});


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