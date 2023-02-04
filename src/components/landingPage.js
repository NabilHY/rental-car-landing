import getCar from '../modules/getCarsApi.js';
import createRow from '../modules/createRow.js';
import card from '../modules/cardCreator.js';

const cardsContainer = document.createElement('div');
cardsContainer.classList.add('card-deck', 'container', 'mt-5', 'mb-5');

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