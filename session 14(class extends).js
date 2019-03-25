class Animal {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`Runing...`);
    }
}

class Bird extends Animal {
    fly() {
        console.log(`Flying...`);
    }
}

bird = new Bird('abc');
bird.fly();