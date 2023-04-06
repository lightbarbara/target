function invert(string) {
    let str = string.split('')

    let str_rev = []

    for (let i=str.length-1; i>=0; i--) {
        str_rev.push(str[i])
    }

    let string_reverse = str_rev.join('')

    return string_reverse
}

console.log(invert('oi'))