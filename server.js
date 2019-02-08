const express = require('express')
const app = express();
const hbs = require('hbs')
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Miguel',
        anio: new Date().getFullYear()
    })
})
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Miguel',
        anio: new Date().getFullYear()
    })
})
app.listen(3800, () => {
    console.log('Servidor creado en el puerto 3800');
})