import util from '../helpers/utilities.js';
import cartData from '../helpers/data/cartData.js';
import bookData from '../helpers/data/bookData.js';

const addToCart = (newBook) => {
  cartData.setCart(newBook);
  cartToDom();
};

const cartToDom = () => {
  const myCart = cartData.getCart;
  let domString = '';
  for (let i=0; i < myCart.length; i++){
  domString += `<h3>${myCart[i].name}</h3>`;
  }
  util.printToDom('cart-container', domString);
};

export default { addToCart };