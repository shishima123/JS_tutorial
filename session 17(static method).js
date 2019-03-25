class foo {
    // static method
    static doSomeThing() {
        console.log(`Do some thing...`);
    }

    // instance method
    anotherSomeThing() {
        console.log(`Do another SomeThing...`)
    }
}

// static method chỉ có thể gọi trực tiếp từ class
foo.doSomeThing();

// instance method chỉ có thể gọi được khi tạo ra object và gọi nó thông qua object
let doSomeThing = new foo;
doSomeThing.anotherSomeThing();