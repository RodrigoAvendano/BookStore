let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onload = () => {
    if(window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    if(window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
};

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
};