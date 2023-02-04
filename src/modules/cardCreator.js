const card = (make, image, model, transmission, price) => `
  <div class='col-sm-4'>
      <div class='card'>
          <img src='${image}' class='card-img-top' alt='car image'>
          <div class='card-body'>
          <h5 class='card-title'>${make}</h5>
          <h5 class='card-title'>${model}</h5>
          <p class='card-text'>${transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          <p class='card-text'>Daily Rent:${parseInt(price, 10)}$</p>
          <a href='#' class='btn btn-primary'>Book Reservation</a>
          </div>
      </div>
  </div>
`;

export default card;