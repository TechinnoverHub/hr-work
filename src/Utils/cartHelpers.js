function getCartLength(cart) {
  return Object.values(cart).reduce(
    (acc, curr) => {
      acc.total += Number(curr.qty);
      acc.price += Number(curr.qty) * Number(curr.price);
      return acc;
    },
    { total: 0, price: 0 }
  );
}

function addItem(item, cartData) {
  const cart = { ...cartData };

  if (cart[item.id]) {
    cart[item.id].qty += 1;
  } else {
    cart[item.id] = item;
    cart[item.id].qty = 1;
  }

  return cart;
}

function updateItem(item, action, cartData) {
  const cart = { ...cartData };

  if (cart[item.id] && action === 'increase') {
    cart[item.id].qty += 1;
  } else if (cart[item.id] && action === 'decrease') {
    if (cart[item.id].qty === 1) {
      delete cart[item.id];
    } else {
      cart[item.id].qty -= 1;
    }
  }

  return cart;
}

function deleteItem(item, cartData) {
  const cart = { ...cartData };

  if (cart[item.id]) {
    delete cart[item.id];
  }

  return cart;
}

function storeCart(cart) {
  localStorage.setItem('hr_work_cart', JSON.stringify(cart));
}

function retrieveCart() {
  const cartData = localStorage.getItem('hr_work_cart');
  if (cartData) {
    return JSON.parse(cartData);
  }
}

function clearCartStore() {
  localStorage.removeItem('hr_work_cart');
}

function getCartTotal(cart) {
  return cart.reduce(
    (acc, curr) => {
      const qty = curr.qty || 1;
      acc.total += Number(qty);
      acc.price += Number(qty) * Number(curr.price);
      return acc;
    },
    { total: 0, price: 0 }
  );
}

function formatOrderObject({ productId, planId, ref }) {
  return {
    package: productId, // product id
    plan: planId, // variant id
    ref // pa
  };
}

function getReference() {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

  for (let i = 0; i < 15; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function formatSuccessObject(cart) {
  return Object.values(cart);
}

export {
  deleteItem,
  updateItem,
  addItem,
  getCartLength,
  storeCart,
  retrieveCart,
  clearCartStore,
  getCartTotal,
  formatOrderObject,
  getReference,
  formatSuccessObject
};
