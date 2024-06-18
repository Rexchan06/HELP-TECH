document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.form-slide').style.transform = 'translateX(-50%)';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.form-slide').style.transform = 'translateX(0)';
});