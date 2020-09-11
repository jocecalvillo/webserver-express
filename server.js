const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers')

const port=process.env.PORT || 8080;



app.use(express.static(__dirname + '/public')); //Indicamos los recursos estaticos html

//Express HSB engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//hELPER



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'jose luis calvillo'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}` );
});