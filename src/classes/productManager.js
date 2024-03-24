//const fs= require('fs');
import fs  from 'fs';

class ProductManager {
    #products;
    #path;
    static idProduct=0;
    constructor() {
        //this.#products = [];
        this.#path="./src/data/products.json";
        this.#products = this.#readProductsInFile();
    }

    #readProductsInFile () { 
        try{    
            if(fs.existsSync(this.#path)){  
                let data = fs.readFileSync(this.#path,'utf-8');    
                return JSON.parse(data);
            }
            console.log('No existe el archivo de productos');
            return [] ;
        }catch(error){    
            console.log(`Error al leer el archivo de productos, ${error}`);
            return [] ;
        }
    }

    #saveProductsInFile () { //funciona
        try {
            fs.writeFileSync(this.#path ,JSON.stringify(this.#products));
        } catch (error) {
            console.log("Se ha producido un error al guardar los datos en el fichero");
        }
    }

    addProduct(title, descrption, price, thumbnail, code, stock) {  
        if (!title || !descrption || !price || !thumbnail || !code || !stock)
            return "Faltan datos son requeridos";       
        //validar que el codigo no se repita
        const productExist = this.#products.some((p=> p.code == code));
        if(productExist) 
            return `El código ${code} ya se encuentra registrado, el producto no se agregó`;
        //id que se incremente 
        ProductManager.idProduct=ProductManager.idProduct+1;
        const id = ProductManager.idProduct;
            const newProduct = {
                id: id,
                title: title,
                description: descrption,        
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,       
            };
            //guardar la información en el array
            this.#products.push(newProduct);
            //guardar la información en el archivo
            this.#saveProductsInFile();
            return `*** Producto ${id} se agregó exitosamente`
    }       
    updateProduct(id, newFields){
        // modificar un producto con su id
        let index = this.#products.findIndex((p)=> p.id === id);
        if (index !== -1) {
            const {id, ...rest}=newFields;
            this.#products[index]={...this.#products[index], ...rest};           
            this.#saveProductsInFile();
            return `*** Se actualizó el producto id: ${this.#products[index].id}`;            
            }else{    
                return `No se encontró el producto id: ${id} para modificar`   
            }  
    }
    deleteProduct(id) {  
        // eliminar un producto con su id
        let index = this.#products.findIndex((p)=> p.id === id);
        if (index !== -1) {
            this.#products = this.#products.filter((e) => e.id != id );
            this.#saveProductsInFile();  
            return `*** Se eliminó el producto id: ${id}`
        } else {
            return `No se encontró el producto id: ${id} para eliminar`;                            
        }
    }

    getProducts(){
        //devuelve los productos
        //return this.#products;
        return this.#readProductsInFile();
    }

    getProductsById(id){
        //devuelve el producto que coincide con el id
        const  product = this.#products.find((p)=> p.id===id);
        if(product)
            return product;
        else
            return `No se encuentra producto con id: $(id)`;
    } 
}
//module.exports =  ProductManager;
export default ProductManager;
