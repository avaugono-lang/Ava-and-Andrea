import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { ShoppingBag, X, CheckCircle2, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateCartQuantity, clearCart, awardXp } = useGym();
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 35 ? 0 : 4.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setCheckedOut(true);
    awardXp(50, 'Completed Gear Order! Order dispatched to your club! 📦');
    setTimeout(() => {
      clearCart();
      setCheckedOut(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#1f1619]/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-[#fef08a] flex items-center justify-between bg-[#fffdf0]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#db2777]" />
            <h3 className="font-bold text-lg text-[#1f1619]">Your Gear Bag</h3>
            <span className="px-2 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-xs font-bold">
              {cart.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>
          <button
            id="btn-cart-close"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#fff5f8] border border-[#fce7f3] flex items-center justify-center text-[#6b555c] hover:text-[#1f1619]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {checkedOut ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[#854d0e] flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-[#db2777]" />
            </div>
            <h4 className="text-xl font-bold text-[#1f1619]">Order Confirmed! 🎉</h4>
            <p className="text-xs text-[#6b555c]">
              Your gymnastics gear order has been sent. Free delivery to your gym bag! +50 XP bonus awarded.
            </p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-3 text-[#6b555c]">
            <ShoppingCart className="w-12 h-12 text-[#f472b6]" />
            <p className="text-sm font-bold text-[#1f1619]">Your gear bag is empty</p>
            <p className="text-xs max-w-xs text-[#6b555c]">
              Explore leotards, bar dowel grips, duffle bags, and gymnastics training equipment in our Pro Shop.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize || 'default'}`}
                className="flex items-center gap-3 p-3 bg-[#fff5f8] rounded-2xl border border-[#fce7f3]"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover bg-white shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#1f1619] truncate">{item.product.name}</h4>
                  {item.selectedSize && (
                    <span className="text-[10px] text-[#db2777] font-semibold block">
                      Size: {item.selectedSize}
                    </span>
                  )}
                  <span className="text-xs font-extrabold text-[#db2777] block mt-0.5">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full bg-white border border-[#fce7f3] text-xs font-bold text-[#db2777] flex items-center justify-center shadow-2xs"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-[#1f1619]">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-white border border-[#fce7f3] text-xs font-bold text-[#db2777] flex items-center justify-center shadow-2xs"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  id={`btn-cart-remove-${item.product.id}`}
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-gray-400 hover:text-red-500 p-1"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer with checkout */}
        {cart.length > 0 && !checkedOut && (
          <div className="p-4 border-t border-[#fef08a] bg-[#fffdf0] space-y-3">
            <div className="space-y-1.5 text-xs text-[#6b555c]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#1f1619]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? <strong className="text-emerald-700 font-bold">FREE (Over $35)</strong> : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-[#1f1619] pt-1 border-t border-[#fef08a]">
                <span>Total</span>
                <span className="text-[#db2777]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              id="btn-cart-checkout"
              onClick={handleCheckout}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] hover:from-[#db2777] hover:to-[#d97706] text-white font-bold text-sm shadow-md shadow-pink-500/20 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>Simulate Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
