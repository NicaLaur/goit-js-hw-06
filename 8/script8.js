const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    
    event.preventDefault();

    const emailValue = loginForm.querySelector('[name="email"]').value
    const passwordValue = loginForm.querySelector('[name="password"]').value

    const formData = {
        email: emailValue,
        password: passwordValue
    };
    console.log(formData);

    loginForm.reset();
})

