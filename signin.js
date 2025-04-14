// Form Submission
document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, you would:
    // 1. Validate credentials with Firebase/Auth0
    // 2. Redirect to homepage on success
    console.log('Signing in with:', email);
    
    // For demo purposes:
    alert(`Sign-in attempt for ${email}`);
    window.location.href = 'index.html'; // Redirect after sign-in
});

// Create Account Button
document.querySelector('.create-account-btn').addEventListener('click', () => {
    window.location.href = 'register.html'; // You'll create this later
});