
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

type ShoppingCart = {
  items: Product[];
  total: number;
};


const addToCarti = (cart: ShoppingCart, product: Product): void => {
  cart.items.push(product);
  cart.total += product.price;
};

const removeFromCarti = (cart: ShoppingCart, productId: number): void => {
  const index = cart.items.findIndex((item) => item.id === productId);
  if (index !== -1) {
    const removedItem = cart.items.splice(index, 1)[0];
    cart.total -= removedItem.price;
  }
};


const produst1: Product = {
  id: 1,
  name: "Laptop",
  price: 999,
  category: "Electronics",
};
const produst2: Product = {
  id: 2,
  name: "Headphones",
  price: 99,
  category: "Electronics",
};

const cast: ShoppingCart = { items: [], total: 0 };

addToCart(cart, product1);
console.log("Cart after adding product1:", cart);

addToCart(cart, product2);
console.log("Cart after adding product2:", cart);

removeFromCart(cart, 1);
console.log("Cart after removing product1:", cart);
