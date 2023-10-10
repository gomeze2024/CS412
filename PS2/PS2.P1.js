function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* evenFibs () {
    let myFibs = fibs();
    let fibValue = 0;

    while (true) {
    do {
        fibValue = myFibs.next().value;
    } while(fibValue % 2 != 0)

    yield fibValue;
    }
}


//Get the first six even fibs
var myFibs = evenFibs();
let count = 6;
    while (count --> 0) {
    console.log(myFibs.next().value)
}