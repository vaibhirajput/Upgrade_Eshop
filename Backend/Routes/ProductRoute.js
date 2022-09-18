const products = require("express").Router();
const {AddProductFun, EditedProductFun, DeleteProductFun, AllProductFun, productFunById, ProductFunByCategories } = require("../Controller/ProductController");




// post add new product route
products.post('/products', AddProductFun);

// put edited the product route
products.put('/products', EditedProductFun);


// delete the product route
products.delete('/products', DeleteProductFun);


// get all product route
products.get('/products', AllProductFun);

// get lower product route
products.get('/products/categories', ProductFunByCategories);

// get lower product route
products.get('/products/id',productFunById);

module.exports = products; 