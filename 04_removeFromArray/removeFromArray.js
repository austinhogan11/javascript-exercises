const removeFromArray = function (array) {
    //Use arguments for a variable amount of arguments
    // Loop through number of arguments, index 0 = array, next indexes are items to remove
    for (let x = 1; x < arguments.length; x++) {
        // Loop through array checking if arguments match array eleemnts
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arguments[x]) {
                if (i === array.length - 1) {
                    array.pop();
                } else {
                    array.splice(i, 1);
                }
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
