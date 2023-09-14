'use strict';

var navLinks = document.querySelector('.nav-links');
const iconX= document.querySelector(".icon2");
document.getElementById('menuIcon').addEventListener('click', function() {
    navLinks.classList.toggle("showitem");
    iconX.classList.toggle("showitem");
    
});

 