const totalIntegers = function (group) {
    if (typeof group !== "object") {
        return undefined;
    }

    let array;
    if (!Array.isArray(group)) {
        array = Object.values(group);
    } else {
        array = group;
    }

    const count = array.reduce(
        (total, value) => (Number.isInteger(value) ? total + 1 : total),
        0,
    );

    const nestedGroups = array.filter(
        (value) => typeof value === "object" && value !== null,
    );

    if (nestedGroups.length === 0) {
        return count;
    }

    return (
        count +
        nestedGroups.reduce((total, group) => total + totalIntegers(group), 0)
    );
};

// Do not edit below this line
module.exports = totalIntegers;
