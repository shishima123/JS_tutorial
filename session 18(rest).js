// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

sum(1, 2, 3, 4, 5, 6);