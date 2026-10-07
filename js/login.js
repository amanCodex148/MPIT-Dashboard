document.addEventListener('DOMContentLoaded', function () {
    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');

    // Show or hide password
    if (showPasswordCheckbox && passwordInput) {
        showPasswordCheckbox.addEventListener('change', function () {
            passwordInput.type = this.checked ? 'text' : 'password';
        });
    }

    // Disable text selection, copying, cutting, and pasting
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    document.addEventListener('copy', function (e) {
        e.preventDefault();
    });

    document.addEventListener('cut', function (e) {
        e.preventDefault();
    });

    document.addEventListener('paste', function (e) {
        e.preventDefault();
    });

    // Handle login
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = passwordInput.value;

            if (
                username === 'amancodex148' &&
                password === 'aman@123'
            ) {
                window.location.href = '/pages/home.html';
            } else {
                alert('Invalid username or password!');
            }
        });
    }
});