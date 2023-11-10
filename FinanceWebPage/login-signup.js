document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const loginData = {
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        };
        // Replace 'LOGIN_ENDPOINT' with your server's login endpoint.
        fetch('LOGIN_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Handle login success (e.g., redirect to dashboard)
                window.location.href = '/user-dashboard.html';
            } else {
                // Handle login failure (e.g., show error message)
                alert('Login failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const signupData = {
            fullName: document.getElementById('signupFullName').value,
            email: document.getElementById('signupEmail').value,
            password: document.getElementById('signupPassword').value
        };
        // Replace 'SIGNUP_ENDPOINT' with your server's signup endpoint.
        fetch('SIGNUP_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Handle signup success (e.g., redirect to login page or directly to dashboard)
                window.location.href = '/user-dashboard.html';
            } else {
                // Handle signup failure (e.g., show error message)
                alert('Signup failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
