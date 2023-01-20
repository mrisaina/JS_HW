// ===============================
// ES5 Classes

// function Car({ maxSpeed, price }) {
//   this.speed = 0;
//   this.price = price;
//   this.maxSpeed = maxSpeed;
//   this.isOn = false;
//   this.distance = 0;
// }

// Car.prototype.getSpecs = function () {
//   console.log(
//     `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`
//   );
// };

// Car.prototype.price = function () {
//   return this.price;
// };

// Car.prototype.newPrice = function (newPrice) {
//   this.price = newPrice;
// };

// Car.prototype.turnOn = function () {
//   this.isOn = true;
// };

// Car.prototype.turnOff = function () {
//   this.isOn = false;
// };

// Car.prototype.accelerate = function (value) {
//   const newSpeed = this.speed + value;
//   if (newSpeed < this.maxSpeed) {
//     this.speed = newSpeed;
//   } else {
//     console.log("speed cannot be greater than maxSpeed");
//   }
// };

// Car.prototype.decelerate = function (value) {
//   const newSpeed = this.speed - value;
//   if (newSpeed > 0) {
//     this.speed = newSpeed;
//   } else {
//     console.log("speed cannot be less than 0");
//   }
// };

// Car.prototype.drive = function (hours) {
//   if (this.isOn) {
//     this.distance += hours * this.speed;
//   }
// };

// ================================
// ES6 Classes

// class Car {
//   /*
//    * Додай статичний метод `getSpecs(car)`,
//    * який приймає об'єкт-машину як параметр і виводить
//    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//    */

//   static getSpecs(car) {
//     console.log(
//       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
//     );
//   }

//   /*
//    * Конструктор отримує об'єкт налаштувань.
//    *
//    * Додай властивості майбутнього екземпляра класу:
//    *  speed - поточна швидкість, початкова 0
//    *  price - ціна автомобіля
//    *  maxSpeed - максимальна швидкість
//    *  isOn - заведений автомобіль, значення true або false. Спочатку false
//    *  distance - загальний кілометраж, спочатку 0
//    */
//   constructor({ maxSpeed, price }) {
//     this.speed = 0;
//     this.price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   /*
//    * Додай геттер і сеттер для властивості price,
//    * який буде працювати з властивістю ціни автомобіля.
//    */

//   get getPrice() {
//     console.log(this.price);
//   }

//   set newPrice(value) {
//     this.price = value;
//   }

//   /*
//    * Додай код для того, щоб завести автомобіль
//    * Записує у властивість isOn значення true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Додай код для того, щоб заглушити автомобіль
//    * Записує у властивість isOn значення false,
//    * і скидає поточну швидкість в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Додає до властивості speed отримане значення,
//    * за умови, що результуюча швидкість
//    * не більше, ніж значення властивості maxSpeed
//    */
//   accelerate(value) {
//     const newSpeed = this.speed + value;
//     if (newSpeed < this.maxSpeed) {
//       this.speed = newSpeed;
//     } else {
//       console.log("speed cannot be greater than maxSpeed");
//     }
//   }

//   /*
//    * Забирає від властивості speed отримане значення,
//    * за умови, що результуюча швидкість не менше нуля
//    */
//   decelerate(value) {
//     const newSpeed = this.speed - value;
//     if (newSpeed > 0) {
//       this.speed = newSpeed;
//     } else {
//       console.log("spped cannot be less than 0");
//     }
//   }

//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// =====================================

// check the ES5 classes

// const mustang5 = new Car({ maxSpeed: 200, price: 2000 });

// mustang5.turnOn();
// mustang5.accelerate(50);
// mustang5.drive(2);

// mustang5.getSpecs();
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang5.decelerate(20);
// mustang5.drive(1);
// mustang5.turnOff();

// mustang5.getSpecs();
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang5.price); // 2000
// mustang5.newPrice(4000);
// console.log(mustang5.price); // 4000

// =====================================

// check the ES6 classes

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.getPrice;
// mustang.newPrice = 4000;
// console.log(mustang.price); // 4000
