import { useState, useEffect } from 'react';
import { Product, productService } from '@/services/product-service';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await productService.getProducts();
      setProducts(data);
      setLoading(false);
    };
    
    loadProducts();
  }, []);

  return { products, loading };
}