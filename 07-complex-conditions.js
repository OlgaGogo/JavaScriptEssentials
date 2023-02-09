const car = {
    color: "red",
    price: 2000,
    numDors: 3,
};

if (car.price < 2000 || (car.color === "red" && car.numDors === 4)) {
    console.log("I will take it!");
} else {
    console.log("It's best to keep looking")
}
