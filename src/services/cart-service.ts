import { Product } from "./product-service";

export interface CartItem {
  product: Product;
  quantity: number;
}

class CartService {
  private cartItems: CartItem[] = [];

  addToCart = (product: Product, quantity: number = 1): boolean => {
    if (quantity <= 0 || quantity > product.stock) {
      return false;
    }

    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > product.stock) {
        return false;
      }
      existingItem.quantity = newQuantity;
      return true;
    }
    this.cartItems.push({ product, quantity });

    return true;
  };

  removeFromCart = (productId: string): void => {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== productId
    );
  };

  updateQuantity = (productId: string, quantity: number): void => {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const item = this.cartItems.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  };

  getCartItems = (): CartItem[] => {
    return [...this.cartItems];
  };

  calculateTotal = (): number => {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  getItemCount = (): number => {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  clearCart = (): void => {
    this.cartItems = [];
  };
}

export const cartService = new CartService();
