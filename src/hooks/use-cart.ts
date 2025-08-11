import { useState, useEffect } from "react";
import { Product } from "@/services/product-service";
import { CartItem, cartService } from "@/services/cart-service";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateCart = () => {
    setCart([...cartService.getCartItems()]);
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    const success = cartService.addToCart(product, quantity);
    if (success) {
      updateCart();
    }
    return success;
  };

  const removeFromCart = (productId: string) => {
    cartService.removeFromCart(productId);
    updateCart();
  };

  const updateQuantity = (productId: string, quantity: number) => {
    cartService.updateQuantity(productId, quantity);
    updateCart();
  };

  const total = cartService.calculateTotal();
  const itemCount = cartService.getItemCount();

  useEffect(() => {
    updateCart();
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
    itemCount,
  };
}
