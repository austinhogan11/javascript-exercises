const repeatString = function (text, reps) {
    if (reps < 0) return "ERROR";
    let res = "";
    for (let i = 0; i < reps; i++) {
        res += text;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
