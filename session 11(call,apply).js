// call function.call(this, param1, param2, ...)
// apply function.call(this, [param1, param2, ...])
function greeting(name, age) {
    console.log(`Hi ${name}. I am ${age} years old`);
}

function greeting2() {
    console.log(`Hi ${this.name}. I am ${this.age} years old`);
}

const cat = {
    name: 'Tom',
    age: 10
}

greeting.call(this, cat.name, cat.age);
greeting.apply(this, [cat.name, cat.age]);

greeting2.call(cat);
greeting2.apply(cat);

// =================================================
function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

function avg() {
    const total = sum.apply(this, arguments);
    return total / arguments.length;
}

console.log(avg(1, 2, 3));