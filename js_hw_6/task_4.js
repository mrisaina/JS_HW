// ============================

// ES5 Classes

// function StringBuilder(_value) {
//   this._value = _value;
// }

// StringBuilder.prototype.value = function () {
//   return this._value;
// };

// StringBuilder.prototype.append = function (newItem) {
//   this._value += String(newItem);
// };

// StringBuilder.prototype.prepend = function (newItem) {
//   this._value = String(newItem) + this.value;
// };

// StringBuilder.prototype.pad = function (newItem) {
//   this._value = String(newItem) + this.value + String(newItem);
// };

// ============================

// ES6 Classes

// using getters/setters

// class StringBuilder {
//   constructor(_value) {
//     this._value = _value;
//   }

//   get value() {
//     return this._value;
//   }

//   set append(newItem) {
//     this._value += String(newItem);
//   }

//   set prepend(newItem) {
//     this._value = String(newItem) + this.value;
//   }

//   set pad(element) {
//     this._value = String(element) + this.value + String(element);
//   }
// }

// common

// class StringBuilder {
//   constructor(_value) {
//     this._value = _value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(newItem) {
//     this._value += String(newItem);
//   }

//   prepend(newItem) {
//     this._value = String(newItem) + this.value;
//   }

//   pad(newItem) {
//     this._value = String(newItem) + this.value + String(newItem);
//   }
// }

// ============================

const builder = new StringBuilder(".");
console.log(builder);

console.log(builder.value);
// console.log(builder.value());
// builder.append = "^";
builder.append("^");
console.log(builder.value); // '.^'
// console.log(builder.value());

// builder.prepend = "^";
builder.prepend("^");
console.log(builder.value); // '^.^'

// builder.pad = "=";
builder.pad("=");
console.log(builder.value); // '=^.^='
