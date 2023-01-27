let numbers = [1, 3, 4, 6, 7, 8];
console.log(numbers.includes(4));

const list = ['oscar', 'David', 'Ana'];
console.log(list.includes('oscar'));

const letras = { a: 1, b: 2, c: 3 }
// Se diferencian en que in evalúa todas las propiedades del objeto y del prototipo
"a" in letras // true

letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true