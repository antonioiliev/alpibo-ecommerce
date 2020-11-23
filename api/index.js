const express = require('express');
const app = express();
const products = require('./products.list');

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`ecommerce api listening on port ${process.env.PORT || 5000}`);
})