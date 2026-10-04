import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { CartDrawer } from '../components/CartDrawer';
import { Product } from '../types';
import { ShoppingBag, Search, X, CheckCircle2, Plus, Sparkles } from 'lucide-react';

export const ShopScreen: React.FC = () => {
  const { products, cart, addToCart } = useGym();
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'APPAREL' | 'GRIPS' | 'EQUIPMENT' | 'ACCESSORIES'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('Adult S');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'APPAREL') return p.category === 'leotards';
    if (selectedCategory === 'GRIPS') return p.category === 'grips';
    if (selectedCategory === 'EQUIPMENT') return p.category === 'mats';
    if (selectedCategory === 'ACCESSORIES') return p.category === 'accessories' || p.category === 'bags';

    return true;
  });

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleOpenProduct = (product: Product) => {
    setActiveProductModal(product);
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  };

  const handleAddFromModal = () => {
    if (activeProductModal) {
      addToCart(activeProductModal, 1, selectedSize);
      setActiveProductModal(null);
      setIsCartOpen(true);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-4 space-y-5 pt-2 pb-16">
      {/* Shop Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#854d0e] bg-[#fef9c3] border border-[#fef08a] px-2.5 py-0.5 rounded-full">
              Official Gear & Apparel
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1f1619] tracking-tight mt-1">
            GymTrack Pro Shop
          </h1>
          <p className="text-xs text-[#6b555c]">
            Certified leotards, leather dowel grips, grip bags, and spring floor mats
          </p>
        </div>

        <button
          id="btn-shop-open-cart"
          onClick={() => setIsCartOpen(true)}
          className="relative px-3.5 py-2.5 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-[#db2777] text-xs font-bold hover:bg-[#fce7f3] transition-colors flex items-center gap-1.5 shadow-2xs"
        >
          <ShoppingBag className="w-4 h-4 text-[#db2777]" />
          <span>Gear Bag</span>
          {totalCartItems > 0 && (
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-[#ec4899] text-white text-[10px] font-extrabold shadow-2xs">
              {totalCartItems}
            </span>
          )}
        </button>
      </div>

      {/* Search Input */}
      <div className="relative w-full">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b555c]" />
        <input
          id="input-shop-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search leotards, grips, mats, bags..."
          className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-[#fce7f3] text-xs sm:text-sm text-[#1f1619] placeholder:text-[#6b555c]/60 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-2xs"
        />
        {searchQuery && (
          <button
            id="btn-shop-clear-search"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b555c] hover:text-[#1f1619]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="w-full flex p-1 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-xs font-bold shadow-2xs overflow-x-auto no-scrollbar">
        {(['ALL', 'APPAREL', 'GRIPS', 'EQUIPMENT', 'ACCESSORIES'] as const).map((cat) => (
          <button
            key={cat}
            id={`tab-shop-${cat.toLowerCase()}`}
            onClick={() => setSelectedCategory(cat)}
            className={`flex-1 py-2 px-3 rounded-full transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-white text-[#db2777] shadow-xs border border-[#fce7f3]'
                : 'text-[#6b555c] hover:text-[#1f1619]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            id={`product-card-${product.id}`}
            className="bg-white rounded-3xl border border-[#fce7f3] shadow-[0_8px_24px_-4px_rgba(244,114,182,0.08)] overflow-hidden flex flex-col justify-between hover:border-pink-300 transition-all group"
          >
            <div>
              <div
                className="relative w-full h-44 bg-[#fff5f8] overflow-hidden cursor-pointer"
                onClick={() => handleOpenProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#854d0e] border border-[#fef08a] text-[10px] font-bold">
                  {product.categoryTag || product.category}
                </span>
                {product.topPickBadge && (
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#ec4899] text-white text-[10px] font-extrabold shadow-2xs">
                    {product.topPickBadge}
                  </span>
                )}
              </div>

              <div className="p-4 space-y-1">
                <div className="flex items-baseline justify-between">
                  <h3
                    className="text-sm font-bold text-[#1f1619] group-hover:text-[#db2777] transition-colors cursor-pointer"
                    onClick={() => handleOpenProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <span className="text-xs text-[#6b555c]">⭐ {product.rating}</span>
                </div>
                <p className="text-xs text-[#6b555c] line-clamp-1">{product.subtitle}</p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between">
              <div>
                <span className="text-base font-extrabold text-[#1f1619]">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-[10px] text-[#854d0e] font-bold block">USAG Approved</span>
              </div>

              <button
                id={`btn-add-product-${product.id}`}
                onClick={() => handleOpenProduct(product)}
                className="px-3.5 py-2 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-bold shadow-md shadow-pink-500/20 active:scale-95 transition-all flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Product Detail Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#1f1619]/60 backdrop-blur-xs p-0 sm:p-4">
          <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl space-y-4 border border-[#fce7f3] max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-xs font-bold uppercase">
                {activeProductModal.category}
              </span>
              <button
                id="btn-product-modal-close"
                onClick={() => setActiveProductModal(null)}
                className="w-8 h-8 rounded-full bg-[#fff5f8] border border-[#fce7f3] flex items-center justify-center text-[#6b555c]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <img
              src={activeProductModal.image}
              alt={activeProductModal.name}
              className="w-full h-52 rounded-2xl object-cover bg-[#fff5f8]"
            />

            <div>
              <h3 className="text-lg font-bold text-[#1f1619]">{activeProductModal.name}</h3>
              <p className="text-xs text-[#6b555c] mt-0.5">{activeProductModal.subtitle}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-extrabold text-[#db2777]">
                  ${activeProductModal.price.toFixed(2)}
                </span>
                <span className="text-xs text-[#6b555c]">
                  ⭐ {activeProductModal.rating} ({activeProductModal.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-xs text-[#6b555c] leading-relaxed">
              {activeProductModal.description}
            </p>

            {/* Size selector if apparel / grips */}
            {activeProductModal.sizes && activeProductModal.sizes.length > 0 && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1f1619] block">Select Size</label>
                <div className="flex flex-wrap gap-2">
                  {activeProductModal.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedSize === sz
                          ? 'bg-[#ec4899] text-white border-[#ec4899] shadow-2xs'
                          : 'bg-[#fff5f8] text-[#1f1619] border-[#fce7f3]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              id="btn-product-modal-add-bag"
              onClick={handleAddFromModal}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] hover:from-[#db2777] hover:to-[#d97706] text-white font-bold text-sm shadow-md shadow-pink-500/20 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Gear Bag (${activeProductModal.price.toFixed(2)})</span>
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer Slide-over */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};
