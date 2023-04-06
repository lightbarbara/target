let json = require('./dados.json')

let values = json.map(data => data.valor)

let min_value = Math.min(...values)

let max_value = Math.max(...values)

let mean = values.reduce((acc, cur) => acc + cur)/values.length

let qt_more = (json.filter(data => data.valor > mean)).length

console.log(`Menor: ${min_value}; maior: ${max_value}; quantidade de valores maiores que a média: ${qt_more}`)