let data = [
    { 'estado': 'SP', 'valor': 67836.43 },
    { 'estado': 'RJ', 'valor': 36678.66 },
    { 'estado': 'MG', 'valor': 29229.88 },
    { 'estado': 'ES', 'valor': 27165.48 },
    { 'estado': 'Outros', 'valor': 19849.53 }
]

let total = (data.map(d => d.valor)).reduce((acc, cur) => acc + cur)

data.map(d => d['percentual'] = Number((d.valor/total * 100).toFixed(2)))

console.log(data)