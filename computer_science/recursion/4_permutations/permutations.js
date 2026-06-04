const permutations = function (nums) {
    if (nums.length === 0) {
        return [[]];
    }

    return nums.flatMap((num) => {
        const remainder = nums.filter((item) => item !== num);
        return permutations(remainder).map((permutation) => [
            num,
            ...permutation,
        ]);
    });
};

// Do not edit below this line
module.exports = permutations;
