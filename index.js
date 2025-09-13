function factorial(n) {
    if (n === 0) return 0
    else if (n === 1) return 1

    let first_number = 0;
    let second_number = 1;

    for (let i = 2; i <= n; i++) {
        next_number = first_number + second_number;
        first_number = second_number;
        second_number = next_number;
    }

    return second_number;

}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));