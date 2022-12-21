const express = require("express");
const app = express ();
const port = 3000;

//ESTA ES LA WEB
app.get('/',(req, res) => {
    let a = 10;
    let b = 15;

    let suma = a + b;
    res.send(`La suma de ${a} mas ${b} es igual a ${suma}`)
});

// ESTA ES LA CONSOLA
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});