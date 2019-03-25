// arguments create a object like array from parameters
obj = {
    0: 'a',
    1: 'b',
    length: 2
}

// for (let i = 0; i<obj.length;i++){
//   console.log(obj[i]);
// }

function sum() {
    let arr = Array.from(arguments);
    return arr.reduce(function (a, b) {
        return a * b;
    }, 1);
}
sum(1, 2, 3, 4, 5, 6, 7);