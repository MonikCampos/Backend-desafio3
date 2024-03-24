//const ProductManager = require("./productManager");
import ProductManager from "./src/classes/productManager.js"

const producto = new ProductManager();

//Mostrar los productos, para probar la corrección del path
console.log("---------------------------------------------------------------------------------");
console.log("Productos guardados");
console.log(producto.getProducts());

/*console.log("---------------------------------------------------------------------------------");
console.log("Agregando productos");
//title, descrption, price, thumbnail, code, stock
//se quieren agregar 6 productos, hay un código repetido
console.log(producto.addProduct('Producto1','Descripción del producto1',800000,'https:/micarpeta/img1.jpg',"mxFgh5",6));
console.log(producto.addProduct('Producto2','Descripción del producto2',500000,'https:/micarpeta/img2.jpg',"fgtJd2",10));
console.log(producto.addProduct('Producto3','Descripción del producto3',900000,'https:/micarpeta/img3.jpg',"asdfTg3",7));
console.log(producto.addProduct('Producto4','Descripción del producto4',500000,'https:/micarpeta/img4.jpg',"fgtJd2",8));
console.log(producto.addProduct('Producto4','Descripción del producto4',600000,'https:/micarpeta/img4.jpg',"wffs5d",8));
console.log(producto.addProduct('Producto5','Descripción del producto5',700000,'https:/micarpeta/img5.jpg',"ksiei2",6));
console.log(producto.addProduct('Producto6','Descripción del producto6',400000,'https:/micarpeta/img6.jpg',"kheds6",4));

console.log("---------------------------------------------------------------------------------");
console.log("Eliminando productos");
//se elimina un producto existente
console.log(producto.deleteProduct(4));
//se quiere eliminar un producto que no existe
console.log(producto.deleteProduct(7));

console.log("---------------------------------------------------------------------------------");
console.log("Modificando productos");
const productUpdated = {
    "id": 999,
    "description": "Nueva descripción del producto 3",
    "price": 1000000,
    "thumbnail": "https:/micarpeta/Nvaimg3.jpg",
    "stock": 10
}    
//se quiere modificar un producto existente
console.log(producto.updateProduct(3,productUpdated));
//se quiere modificar un producto que no existe
console.log(producto.updateProduct(7,'Nueva descripción del producto 7'));

//Mostrar los productos
console.log("---------------------------------------------------------------------------------");
console.log("Productos guardados");
console.log(producto.getProducts());

//Mostrar un producto por su id
console.log("---------------------------------------------------------------------------------");
console.log("A continuación se muestra el producto con el ID:2");
console.log(producto.getProductsById(2));*/