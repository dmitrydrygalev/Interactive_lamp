"use strict";

const btn = document.querySelector('#switch_btn'),
      light = document.querySelector('#light');  

btn.addEventListener('click', () => {
    btn.classList.toggle("active");    
    light.classList.toggle("hidden");
});