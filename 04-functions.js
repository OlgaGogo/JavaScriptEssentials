function sum(a, b) {
    return a + b;
}

console.log(sum(10, 10)); //output 20

function product(a, b) {
    return a * b;
}

console.log(product(12, 12)); //output 144

const bigProduct = product(1000, 1276354);
console.log(bigProduct);

setTimeout(function () {
    console.log("Hey! You rock!!!");
}, 1000);

setTimeout(() => console.log("Hey! You rock!!!"), 1000);