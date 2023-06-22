var loginForm = document.querySelector('form');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');

document.addEventListener('DOMContentLoaded', function() {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = emailInput.value;
        var password = passwordInput.value;

        if (email === '') {
            emailInput.style.borderColor = 'red';
            alert('Veuillez entrer votre adresse e-mail.');
            return;
        }

        if (password === '') {
            passwordInput.style.borderColor = 'red';
            alert('Veuillez entrer votre mot de passe.');
            return;
        }

        // Rediriger vers la page index.html
        window.location.href = "index.html";
    });
});
