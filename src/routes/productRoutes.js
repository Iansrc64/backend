const app = require('./app-express.js');

const { Product, ProductImage, ProductOption } = require("../models/models.js");

app.get("/", (req, res) => {
    res.send("Olá, mundo");
});

// cRud - READ
app.get("/v1/product/search", async (request, res) => {
    console.log(req.query);
    const produtos = await Product.findAll({ limit: 30 });

    Product.findAll({ where: { id: request.params.id } });
    res.send(produtos);
});

// cRud - READ
app.get("/v1/product/:id", (request, res) => {
    console.log("request.url", request.url); 
    console.log("request.params.id", request.params.id);

    Product.findOne({ where: { id: request.params.id } }).then((result) =>
        res.send(result)
    );
});

// cRud - READ
app.get("/v1/product/", (request, res) => {
    console.log("request.url", request.url); 

    Product.findAll().then((result) => res.send(result));
});

// cruD - DELETE
app.delete("/v1/product/:id", (request, res) => {
    console.log("request.url", request.url); 
    Product.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send("deletei com sucesso essa quantidade de linhas: " + result);
    });
});

// Crud - CREATE
app.post("/v1/product", async (request, res) => {
    console.log(request.body.imagensDoProduto)

    const imagensDoProduto = request.body.imagensDoProduto

    const produtoCriado = await Product.create(request.body)

    if (imagensDoProduto) {
        await ProductImage.bulkCreate(imagensDoProduto.map((image) => ({
            product_id: produtoCriado.id,
            path: image.content,
        })))
    }

    if (request.body.options) {
        await ProductOption.bulkCreate(request.body.options.map((option) => ({
            product_id: produtoCriado.id,
            ...option
        })))
    }

    res.status(201).send(produtoCriado);
});

// crUd - UPDATE
app.put("/v1/product/:id", (request, res) => {
    console.log("request.url", request.url); 
    console.log("request.body", request.body);
    Product.update(request.body, { where: { id: request.params.id } }).then(
        (result) => res.send(result)
    );
});