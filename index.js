const names = ["Charlie", "Samip", "Ali"]
function writeCards(names, event) {
    const names2 = [];
    for (let i = 0; i < names.length; i++) {
        names2.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return names2;
}

writeCards()


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }

}
countDown(number);