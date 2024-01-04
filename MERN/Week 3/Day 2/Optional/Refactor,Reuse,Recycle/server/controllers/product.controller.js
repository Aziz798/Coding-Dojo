const Products= require('../models/product');

module.exports.allProducts=(req,res)=>{
    Products.find().then(allProducts=>res.json(allProducts)).catch(err=>res.json(err));
};

module.exports.oneProduct=(req,res)=>{
    Products.findOne({_id:req.params.id}).then(theProduct=>res.json(theProduct)).catch(err=>res.json(err));
};

module.exports.createProduct=(req,res)=>{
    Products.create(req.body).then(newlyCreatedProduct=>res.json(newlyCreatedProduct)).catch(err=>res.json(err));
};

module.exports.deleteProduct=(req,res)=>{
    Products.deleteOne({_id:req.params.id}).then(deletedProduct=>res.json(deletedProduct)).catch(err=>res.json(err));
};

module.exports.updateProduct=(req,res)=>{
    Products.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(updatedProduct=>res.json(updatedProduct)).catch(err=>res.json(err));
};