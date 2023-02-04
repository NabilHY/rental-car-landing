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

export default Car;