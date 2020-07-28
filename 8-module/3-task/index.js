export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
<<<<<<< HEAD
    // ваш код
=======
>>>>>>> cc46dc829acef03f5f558dc4abb9a257008e0999
    let cartItem = this.cartItems.find(
      item => item.product.id == product.id
    );
    if (!cartItem) {
      cartItem = {
        product,
        count: 1
      };
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++;
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
<<<<<<< HEAD
    // ваш код
=======
>>>>>>> cc46dc829acef03f5f558dc4abb9a257008e0999
    let cartItem = this.cartItems.find(item => item.product.id == productId);
    cartItem.count += amount;

    if (cartItem.count === 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }

    this.onProductUpdate(cartItem);
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }

  isEmpty() {
<<<<<<< HEAD
    // ваш код
=======
>>>>>>> cc46dc829acef03f5f558dc4abb9a257008e0999
    return this.cartItems.length === 0;
  }

  getTotalCount() {
<<<<<<< HEAD
    // ваш код
=======
>>>>>>> cc46dc829acef03f5f558dc4abb9a257008e0999
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
<<<<<<< HEAD
    // ваш код
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
=======
>>>>>>> cc46dc829acef03f5f558dc4abb9a257008e0999
    return this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0
    );
  }
}
