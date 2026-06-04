const factorial = function (n) {
    if (
        n < 0 ||
        (Number.isFinite(n) && !Number.isInteger(n)) ||
        typeof n !== "number"
    ) {
        return undefined;
    }

    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = factorial;
