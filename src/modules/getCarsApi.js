import Car from './carObjectProto.js';

const getCar = async () => {
  try {
    const headers = {
      'X-Api-Key': 'LiqC2WFDwQDeHnYb75q8Pw==ptLkVH7Dpz6x2f1B',
    };
    const maker = () => {
      const makers = ['Audi', 'BMW', 'Chevrolet', 'Dodge', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Subaru', 'Toyota', 'Volkswagen', 'Volvo'];

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

export default getCar;