'use strict';

// Remove preload class once page is fully loaded

window.addEventListener('load', function() {
  Array.from(document.getElementsByTagName('body')).forEach(function(el) {
    el.classList.remove('preload');
  });
});

// Add class to navigation when scrolling down

document.addEventListener('scroll', function() {
  const header = document.querySelector('.header-main');
  if (window.scrollY >= 20) {
    header.classList.add('fade-in');
  } else {
    header.classList.remove('fade-in');
  }
});

// Add class when mobile navigation icon is clicked

function toggleMenu() {
  Array.from(document.getElementsByTagName('body')).forEach(function(el) {
    el.classList.toggle('no-scroll');
  });
  Array.from(document.getElementsByClassName('header-main')).forEach(function(el) {
    el.classList.toggle('active');
  });
}

Array.from(document.getElementsByClassName('nav-toggle')).forEach(function(el) {
  el.addEventListener('click', function() {
    toggleMenu();
  });
});

document.querySelectorAll('#navbar a').forEach(function(el){
  el.addEventListener('click', function() {
    toggleMenu();
    return true;
  });
});

// add remove class to active (hides hamburger menu) and no-scroll tags (to allow scrolling) after selecting a nav item

document.querySelectorAll('#navbar a').forEach(function(el){
  el.addEventListener('click', function() {
    Array.from(document.getElementsByTagName('body')).forEach(function(el) {
      el.classList.remove('no-scroll');
    });
    Array.from(document.getElementsByClassName('header-main')).forEach(function(el) {
      el.classList.remove('active');
    });
    return true;
  });
});

// Prevent background from scrolling on mobile when navigation is toggled

document.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
});

// Navbar padding and size scale //
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//    document.getElementById("navbar").style.padding = "0px 24px 24px 24 px";
      document.getElementById("navbar").className = "navbarScroll";
//    document.getElementById("logo").style.fontSize = "25px";
  } else {
//    document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("navbar").className = "navbarTop";
//    document.getElementById("logo").style.fontSize = "35px";
  }
}
*/
// Bootstrap Carousel
$('.carousel').carousel()
