'use client';

import { useProducts } from '@/hooks/use-products';
import { useCart } from '@/hooks/use-cart';
import { ProductCard } from '@/components/product-card';
import { Cart } from '@/components/cart';

export default function Home() {
  const { products, loading } = useProducts();
  const { cart, addToCart, removeFromCart, updateQuantity, total, itemCount } = useCart();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">POC Store</h1>
        <p className="text-gray-600">Services + Hooks Architecture Demo</p>
        {itemCount > 0 && (
          <div className="mt-2 text-lg font-semibold text-blue-600">
            Cart: {itemCount} items
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>

        <div>
          <Cart
            cart={cart}
            total={total}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
}
