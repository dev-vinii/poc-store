import { Product } from '@/services/product-service';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-2xl font-bold text-green-600 mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
      <button
        onClick={() => onAddToCart(product)}
        disabled={product.stock === 0}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}