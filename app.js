let fib = [0, 1];
const genFib = (current, next) => current + next;
const lastElement = (array, pos = 1) => array[array.length - pos];
const createNewElement = () => genFib(lastElement(fib, 2), lastElement(fib));
const addToArray = over => {
    const item = createNewElement();
    if (item <= over) {
        fib.push(item);

        return lastElement(fib);
    }
}
const createArray = (current, over) => over > current ? addToArray(over) : createNewElement();
const stringOfFib = maxNumber => {
    let current = lastElement(fib);
    while (maxNumber >= current) {
        current = createArray(current, maxNumber);
    }

    return fib;
}
const fibArray = stringOfFib(7000);

console.log(fibArray, fibArray.length);