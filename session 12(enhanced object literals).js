// Construct function
function Mouse(name) {
    this.name = name;
}

Mouse.prototype.run = function () {
    console.log(`Hi ${this.name}`);
}

let mouse = new Mouse('Mickey');
mouse.run();

// Object literals
let Cat = {
    name: 'Tom',
    run: function () {
        console.log(`Hi ${this.name}`);
    }
}
Cat.run();

// Enhanced Object Literals
const name = 'Pull';
let Dog = {
    name,
    run() {
        console.log(`Hi ${this.name}`);
    }
}
Dog.run();