class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`Eating...`);
    }
}

class Bird extends Animal {
    eat(callback) {
        console.log(`Eating the worms ...`);
        callback();
    }
}

bird = new Bird('Parrot');
bird.eat(() => {
    console.log('Go to bed');
});