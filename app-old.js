const http = require('http')
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' })
            // res.write('Hola Mundo')
        let salida = {
            nombre: 'Miguel',
            edad: 21,
            url: req.url
        }
        res.write(JSON.stringify(salida))
        res.end()
    })
    .listen(3000)
console.log('escuchando puerto 3000')