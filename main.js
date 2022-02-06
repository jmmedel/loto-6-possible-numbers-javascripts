// loto 6 possible numbers

function loto6() {
    var numbers = [];
    var i = 0;
    while (i < 6) {
        var number = Math.floor(Math.random() * 49) + 1;
        if (numbers.indexOf(number) == -1) {
            numbers.push(number);
            i++;
        }
    }
    return numbers;
}
console.log(loto6());

