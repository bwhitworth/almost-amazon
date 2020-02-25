import util from '../helpers/utilities.js';
import bookData from '../helpers/data/bookData.js';
import cart from './cart.js'

const makeStore = () => {
  const book = bookData.getBook();  //declare here and use below
  let domString = '';
     domString += `<h2>${book.name}</h2>`,
     domString += '<button type="button" class="btn btn-info" id="add-btn">Add to Cart</button>'
  util.printToDom('store-container', domString);
  document.getElementById('add-btn').addEventListener('click', addToCart);

  };

const addToCart = () => {
  cart.cartToDom();
};
 
export default { makeStore };