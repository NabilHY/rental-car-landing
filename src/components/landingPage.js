const cardsContainer = document.createElement('div');
cardsContainer.classList.add('card-deck', 'container', 'mt-5', 'mb-5');

class Car {
  constructor(make, model, transmission, year) {
    this.image = `https://source.unsplash.com/1600x900?${make}`;
    this.model = model;
    this.transmission = transmission;
    this.year = year;
    this.price = Math.random() * (500 - 100) + 100;
    this.make = make;
  }
}

const getCar = async () => {
  try {
    const headers = {
      'X-Api-Key': 'LiqC2WFDwQDeHnYb75q8Pw==ptLkVH7Dpz6x2f1B',
    };
    const maker = () => {
      const makers = ['Audi', 'BMW', 'Chevrolet', 'Dodge', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Subaru', 'Toyota', 'Volkswagen'];

      return makers[Math.floor(Math.random() * makers.length)];
    };
    const response = await fetch(`https://api.api-ninjas.com/v1/cars?make=${maker()}`, {
      method: 'GET',
      headers,
    });
    const data = await response.json();
    data.filter((car) => car.class === 'Sedan');
    const randomCar = data[Math.floor(Math.random() * data.length)];
    const car = new Car(randomCar.make, randomCar.model, randomCar.transmission, randomCar.year);
    return car;
  } catch (error) {
    throw new Error(error);
  }
};

const card = (make, image, model, transmission, price) => `
  <div class='col-sm-4'>
      <div class='card'>
          <img src='${image}' class='card-img-top' alt='car image'>
          <div class='card-body'>
          <h5 class='card-title'>${make}</h5>
          <h5 class='card-title'>${model}</h5>
          <p class='card-text'>${transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          <p class='card-text'>Daily Rent:${parseInt(price, 10)}$</p>
          <a href='#' class='btn btn-primary'>Go somewhere</a>
          </div>
      </div>
  </div>
`;

const createRow = () => {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
};

const generateCardsRow = () => {
  for (let i = 0; i < 3; i += 1) {
    const cardsRow = createRow();
    for (let j = 0; j < 3; j += 1) {
      getCar().then((car) => {
        cardsRow.innerHTML += card(car.make, car.image, car.model, car.transmission, car.price);
      });
    }
    cardsContainer.appendChild(cardsRow);
  }
  return cardsContainer;
};

export default generateCardsRow;