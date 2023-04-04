const logBox = document.querySelector('.log-box');
const logLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', function (){
    logBox.classList.add('active');
});

logLink.addEventListener('click', function (){
    logBox.classList.remove('active');
});
