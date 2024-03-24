//const express=require('express');
//const ProductManager=require("./classes/productManager");
import express  from 'express';
import ProductManager from "./classes/productManager.js";

const port=3000;
const app=express();
const Products=new ProductManager("./src/data/products.json");

//Ruta para visualizar todos los productos o con un límite de visualización
app.get("/products/", async(req,res)=> {
    const {limit} = req.query;
    console.log (limit);
    let product = await Products.getProducts(limit);  
    res.json({Products: product});         
});

//Ruta para visualizar solo uno de los productos por su id
app.get("/products/:pid", async(req,res)=> {
    const {pid} = req.params;
    let product = await Products.getProductsById(Number(pid));  
    res.json({Products: product});  
})

//el servidor escucha en el puerto 3000
app.listen(port, ()=>console.log(`Server corriendo en puerto ${port}`))