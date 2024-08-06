let numbers = [10, 20, 30, 40, 50];

let newNumber = numbers.map((index, num) => {
    return num * 2
});

console.log(newNumber);

let age = numbers.filter((num) => {
    return false;
    if (num < 30) {
        return true
    }

});
console.log(age);
