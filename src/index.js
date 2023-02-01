import $ from 'jquery';
import navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

function component() {
  return navbar();
}

$(document).ready(() => {
  $('.navbar-toggler').on('click', () => {
    $('#navbarSupportedContent').toggleClass('show');
  });
});

document.body.appendChild(component());