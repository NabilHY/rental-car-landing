import $ from 'jquery';
import navbar from './components/Navbar.js';
import landingPage from './components/landingPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

const body = document.querySelector('body');

function component() {
  const navbarComponent = navbar();
  const landingPageComponent = landingPage();
  body.appendChild(navbarComponent);
  body.appendChild(landingPageComponent);
  return body;
}

$(document).ready(() => {
  $('.navbar-toggler').on('click', () => {
    $('#navbarSupportedContent').toggleClass('show');
  });
});

document.body.appendChild(component());