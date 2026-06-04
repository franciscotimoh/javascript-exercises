const contains = function (obj, value) {
    /*
    Loop through the object's values
    For each value: if it's not a plain object, compare it to the target
    If it matches → return true immediately
    If it's an object → recurse, and if that returns true → return true immediately, otherwise keep looping
    If the loop finishes with no match → return false
    */

    for (const val of Object.values(obj)) {
        if (!(val?.constructor === Object)) {
            if (Object.is(val, value)) {
                return true;
            }
        } else {
            if (contains(val, value)) {
                return true;
            }
        }
    }

    return false;
};

// Do not edit below this line
module.exports = contains;
