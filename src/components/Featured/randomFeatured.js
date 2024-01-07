import { products } from '../../data/ProductsData';


//Modificar para que reciba los productos y la cantidad, despues (no se como)le envio los productos desde el componente trayendolos del estado 
export const pickRandomProducts = (cantidad) => {
    const nuevoArray = [];

  while (nuevoArray.length < cantidad) {
    const indexRandom = Math.floor(Math.random() * products.length);

    if (!nuevoArray.length) {
      nuevoArray.push(products[indexRandom]);
    }

    const productoExistente = nuevoArray.find((newProduct) => {
      return newProduct.id === products[indexRandom].id;
    });

    if (!productoExistente) {
      nuevoArray.push(products[indexRandom]);
    }
    
  }

  return nuevoArray;
}