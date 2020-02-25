import util from '../helpers/utilities.js'

const cartToDom = () => {
  let domString = '';
  domString += 'THIS IS THE CART',
  util.printToDom('cart-container', domString);
};

export default { cartToDom };