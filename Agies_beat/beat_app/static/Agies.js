// Handle Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Replace with your sign-up API or functionality
    alert(`Sign Up successful for username: ${username}`);
    document.getElementById('signup-modal').style.display = 'none';
});

// Handle Log In Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Replace with your login API or functionality
    alert(`Logged in as: ${username}`);
    document.getElementById('login-modal').style.display = 'none';
});
