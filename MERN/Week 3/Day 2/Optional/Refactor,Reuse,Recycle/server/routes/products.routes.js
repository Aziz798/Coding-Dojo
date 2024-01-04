const productController= require("../controllers/product.controller");

module.exports=app=>{
    app.get('/api/products',productController.allProducts);
    app.get('/api/products/:id',productController.oneProduct);
    app.post('/api/products/create',productController.createProduct);
    app.patch('/api/products/:id/update',productController.updateProduct);
    app.delete('/api/products/:id',productController.deleteProduct);
}