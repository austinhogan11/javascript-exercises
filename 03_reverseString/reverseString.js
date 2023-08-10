const reverseString = function (text) {
    // 1. Built in methods
    // split = text.split("");
    // reversed = split.reverse();
    // joined = reversed.join("");
    // return joined;
    
    // Same as 1. but better
    return text.split("").reverse().join("");

    // for loop
    // let res = "";
    // for (let i = text.length - 1; i >= 0; i--) {
    //     res += text[i];
    // }

    // return res;



};

// Do not edit below this line
module.exports = reverseString;
