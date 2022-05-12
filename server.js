const express = require('express');
const app = express();

const Container = require('./container');
const fileName = new Container ("productos.txt");

app.get('/productos', (req, res) => {
    const getProducts = async () => {
        const products = await fileName.getAll();
        res.send(products);
    };
    getProducts();
});


app.get('/productoRandom', (req, res) => {
    const getProducts = async () => {
        const products = await fileName.getAll();
        const numberRandom = Math.floor((Math.random() * (products.length)));
        res.send(products[numberRandom]);
        //o se puede hacer con getById
        //const numberRandomById = numberRandom + 1;
        //const productById = await fileName.getById(numberRandomById);
        //res.send(productById);
    };
    getProducts();
})


app.listen(8080, () => {
    console.log('escuchando!');
});









