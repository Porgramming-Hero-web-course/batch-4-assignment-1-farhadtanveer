class Car {
  make: string;
  model: String;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // calculate the car age
  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}
// const car = new Car("Honda", "Civic", 2000);
// console.log(car.getCarAge());
