import $ from 'jquery';
import navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

const body = document.querySelector('body');

function component() {
  const navbarComponent = navbar();
  body.appendChild(navbarComponent);
  return body;
}

$(document).ready(() => {
  $('.navbar-toggler').on('click', () => {
    $('#navbarSupportedContent').toggleClass('show');
  });
});

document.body.appendChild(component());