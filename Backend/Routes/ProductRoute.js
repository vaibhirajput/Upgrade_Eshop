const products = require("express").Router();
const Auth = require("../Authentication/Auth");
const {AddProductFun, EditedProductFun, DeleteProductFun, AllProductFun, productFunById, ProductFunByCategories } = require("../Controller/ProductController");




// post add new product route
products.post('/addproducts', Auth, AddProductFun);

// put edited the product route
products.put('/editproduct',Auth, EditedProductFun);


// delete the product route
products.delete('/deleteproducts',Auth, DeleteProductFun);


// get all product route
products.get('/products', AllProductFun);

// get categories product route
products.post('/products/categories', ProductFunByCategories);

// get id product route
products.post('/products/id',productFunById);

module.exports = products; 