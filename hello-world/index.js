const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.send({ nombre: 'Rene', edad: 20, eyes: 'brown' });

    // res.json({ texto: 'probando nueva respuesta!'})
})

const server = app.listen(8000, () => {
    console.log(`Listening http://localhost:${server.address().port}`);
});

