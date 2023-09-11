'use strict';

document.getElementById('menuIcon').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
});

document.get