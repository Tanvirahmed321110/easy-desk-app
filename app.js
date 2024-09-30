// password show and hide
function showHidePassword(button) {
    const input = document.getElementById('password-input')
    const icon = button.querySelector('i')

    if (input.type === 'password') {
        input.type = 'text'
        icon.classList.remove('ri-eye-off-line');
        icon.classList.add('ri-eye-line');
    }
    else {
        input.type = 'password'
        icon.classList.remove('ri-eye-line');
        icon.classList.add('ri-eye-off-line');
    }
}




function errorTextClose() {
    const errorTag = document.querySelector('.error');
    const input = document.querySelector('#password-input')
    const loginBtn = document.querySelector('#login-btn')
    let countShow = document.querySelector('#count-text')
    const value = input.value;

    countShow.textContent = value.length;

    if (value.length >= 6) {
        errorTag.classList.add('active')
        loginBtn.classList.remove('disable')
        loginBtn.removeAttribute('disabled')
    }
    else {
        errorTag.classList.remove('active')
        loginBtn.classList.add('disable')
        loginBtn.setAttribute('disabled', true);
    }
}



function date() {
    const dateTag = document.querySelector('#date')
    const today = new Date()

    const time = today.toLocaleDateString()
    const formattedTime = time.replace(/\//g, '-');

    dateTag.innerText = formattedTime;
}



window.onload = function () {
    const notification = document.querySelector('.notification')
    if (notification) {
        notification.classList.add('active')

        setTimeout(() => {
            notification.classList.remove('active')
        }, 2000)
    }

    date()
}