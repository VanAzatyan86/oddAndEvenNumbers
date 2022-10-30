function checkNumberType(x) {
    if (typeof x === 'number') {
        if (x % 2 == 0) {
            for (let i = 0; i <= x; i = i + 2) {
                console.log(i);
            }
        }
        else {
            for (let i = 1; i <= x; i = i + 2) {
                console.log(i);
            }
        }
    } else {
        console.log("please enter  only numbers");
        checkNumberType(20)
    }
}
console.log(checkNumberType(20));

