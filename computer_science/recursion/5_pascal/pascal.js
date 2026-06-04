const pascal = function (n) {
    if (n === 1) {
        return [1];
    }

    const subproblem = pascal(n - 1);
    subproblem.unshift(0);
    subproblem.push(0);

    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(subproblem[i] + subproblem[i - 1]);
    }

    return result;
};

// Do not edit below this line
module.exports = pascal;
