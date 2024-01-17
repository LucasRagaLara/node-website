const express = require('express');

const app = express();

app.get('/index', (req, res) => {
    res.send('<h1>hola mundo</h1>');
});

pagina = "<body style='background: #123123; color: white;'>"+
    "<div style='display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:90vh;'>" + 
    "<h1 style=text-align:center;>HIJO PUTA JONES</h1>" + 
    "<img style='width: 25%; border-radius:15px;' src=https://www.lahiguera.net/cinemania/actores/jamie_foxx/fotos/14727/jamie_foxx.jpg>" +
    "</div>" +
    "</body>"

app.get('/about', (req, res) => {
    res.send(pagina);
});

app.listen(3000);
console.log('listening on port 3000');