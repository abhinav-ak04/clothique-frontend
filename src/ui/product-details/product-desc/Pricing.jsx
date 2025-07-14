function ProductDescPricing({ discountPrice, originalPrice, discount }) {
  return (
    <>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-[27px] font-bold text-zinc-900">
          ₹{discountPrice}
        </span>
        <div className="flex gap-1 text-xl text-zinc-600">
          <span>MRP</span>
          <span className="line-through">₹{originalPrice}</span>
        </div>
        <span className="text-xl font-bold text-orange-400">({discount})</span>
      </div>
      <span className="mt-1 text-sm font-bold text-teal-600">
        inclusive of all taxes
      </span>
    </>
  );
}

export default ProductDescPricing;
