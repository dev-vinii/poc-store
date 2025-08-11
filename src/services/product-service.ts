export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

class ProductService {
  private products: Product[] = [
    { id: '1', name: 'Headphones', price: 99, stock: 10 },
    { id: '2', name: 'Mouse', price: 29, stock: 15 },
    { id: '3', name: 'Keyboard', price: 79, stock: 5 }
  ];

  async getProducts(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.products];
  }

  async getProduct(id: string): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.products.find(p => p.id === id) || null;
  }

  validateQuantity(product: Product, quantity: number): boolean {
    return quantity > 0 && quantity <= product.stock;
  }

  calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}

export const productService = new ProductService();