function fibonacci(number) {

    let i = 0

    let seq = [0, 1]

    let option = seq[i] + seq[i + 1]

    while (option <= number) {
        seq.push(option)

        i += 1

        option = seq[i] + seq[i + 1]
    }

    return seq.includes(number)

}

console.log(fibonacci(7))