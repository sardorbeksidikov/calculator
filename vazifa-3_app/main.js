var addToCart = function (cart, product) {
  cart.items.push(product);
  cart.total += product.price;
};
var removeFromCart = function (cart, productId) {
  var index = cart.items.findIndex(function (item) {
    return item.id === productId;
  });
  if (index !== -1) {
    var removedItem = cart.items.splice(index, 1)[0];
    cart.total -= removedItem.price;
  }
};
var product1 = {
  id: 1,
  name: "Laptop",
  price: 999,
  category: "Electronics",
};
var product2 = {
  id: 2,
  name: "Headphones",
  price: 99,
  category: "Electronics",
};
var cart = { items: [], total: 0 };
addToCart(cart, product1);
console.log("Cart after adding product1:", cart);
addToCart(cart, product2);
console.log("Cart after adding product2:", cart);
removeFromCart(cart, 1);
console.log("Cart after removing product1:", cart);
