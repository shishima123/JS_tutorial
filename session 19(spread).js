// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments(for function calls) or elements(for array literals) are expected, or an object expression to be expanded in places where zero or more key - value pairs(for object literals) are expected.

let a = [1, 2, 3, 4];

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number)
    console.log(total);
}

sum(...a);