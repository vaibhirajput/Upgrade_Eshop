const products = require("express").Router();
const Auth = require("../Authentication/Auth");
const {AddProductFun, EditedProductFun, DeleteProductFun, AllProductFun, productFunById, ProductFunByCategories } = require("../Controller/ProductController");




// post add new product route
products.post('/products', Auth, AddProductFun);

// put edited the product route
products.put('/products',Auth, EditedProductFun);


// delete the product route
products.delete('/products',Auth, DeleteProductFun);


// get all product route
products.get('/products', AllProductFun);

// get lower product route
products.get('/products/categories', ProductFunByCategories);

// get lower product route
products.get('/products/id',productFunById);

module.exports = products; 