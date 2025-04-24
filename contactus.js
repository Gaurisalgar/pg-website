document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  // Reset all error messages
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (!name) {
    document.getElementById('name-error').textContent = 'Name is required';
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById('name-error').textContent = 'Only alphabets allowed in name';
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
    isValid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  if (!email) {
    document.getElementById('email-error').textContent = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('email-error').textContent = 'Enter a valid email';
    isValid = false;
  }

  // Mobile validation
  const mobile = document.getElementById('mobile').value.trim();
  if (!mobile) {
    document.getElementById('mobile-error').textContent = 'Mobile number is required';
    isValid = false;
  } else if (!/^\d{10}$/.test(mobile)) {
    document.getElementById('mobile-error').textContent = 'Enter a valid 10-digit number';
    isValid = false;
  }

  // City validation
  const city = document.getElementById('city').value.trim();
  if (!city) {
    document.getElementById('city-error').textContent = 'City is required';
    isValid = false;
  }

  // Enquiry Type
  const enquiry = document.getElementById('enquiry').value;
  if (!enquiry) {
    document.getElementById('enquiry-error').textContent = 'Please select enquiry type';
    isValid = false;
  }

  // Message
  const message = document.getElementById('message').value.trim();
  if (!message) {
    document.getElementById('message-error').textContent = 'Message is required';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
   
  }
});

