import { CartItem } from "@/services/product-service";

interface CartProps {
  cart: CartItem[];
  total: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
}

export function Cart({
  cart,
  total,
  onUpdateQuantity,
  onRemoveFromCart,
}: CartProps) {
  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-black">Shopping Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-black">Shopping Cart</h2>

      {cart.map((item) => (
        <div
          key={item.product.id}
          className="flex items-center justify-between py-2 border-b"
        >
          <div>
            <h3 className="font-semibold">{item.product.name}</h3>
            <p className="text-gray-600">${item.product.price} each</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                onUpdateQuantity(item.product.id, item.quantity - 1)
              }
              className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="mx-2 text-black font-semibold">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                onUpdateQuantity(item.product.id, item.quantity + 1)
              }
              className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              +
            </button>
            <button
              onClick={() => onRemoveFromCart(item.product.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-black">
            Total: ${total.toFixed(2)}
          </span>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
