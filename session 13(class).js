// Construct function
// function Mouse(name) {
//   this.name = name;
// }

// Mouse.prototype.run = function() {
//   console.log(`Hi ${this.name}`);
// }

// let mouse = new Mouse('Mickey');
// mouse.run();

// transfer Construct function to Class
class Mouse {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running.`);
    }
}

let mouse = new Mouse('Mickey');
mouse.run();