function hello() {
    console.log('hello World')
}

function main(outputNumber) {
    for (let i = 0; i < outputNumber; i++) {
        hello()

    }
}
main(2)