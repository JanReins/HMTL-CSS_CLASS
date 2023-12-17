document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username && email && password) {
        // You can further validate email and password formats here if needed
        console.log('Form Submitted!', username, email, password);
        // Here you can also send the data to a server or perform other actions
    } else {
        alert('Please fill out all fields.');
    }
});
