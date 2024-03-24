//const express=require('express');
//const ProductManager=require("./classes/productManager");
import express  from 'express';
import ProductManager from "./classes/productManager.js";

const port=3000;
const app=express();
const Products=new ProductManager("./src/data/products.json");

//para definir una ruta
app.get("/", (req,res)=> {
    res.send(`<h1>Home Page</h1>`);      
})

app.get("/Productos", async(req,res)=> {
    let product = await Products.getProductsById(2);  
    res.json(product);
    
    /*res.status(200).json({
        status:"Ok",        
        message: "List of products",  
        data:product          
    });*/        
});


app.get("/Contacto", (req,res)=> {
    res.send(`<h1>Contact Page</h1>`);      
})

//el servidor escucha en el puerto 3000
app.listen(port, ()=>console.log(`Server corriendo en puerto ${port}`))
