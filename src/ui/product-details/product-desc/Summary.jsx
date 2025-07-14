function ProductDescSummary({
  discount,
  discountPrice,
  originalPrice,
  seller,
  deliveryDateString,
  pincode,
}) {
  return (
    <div className="mt-2 border-b-1 border-zinc-300 pb-4 pl-3">
      <div className="mt-3 flex items-center gap-1.5">
        <span className="font-bold text-zinc-900">₹{discountPrice}</span>
        <span className="text-zinc-400 line-through">₹{originalPrice}</span>
        <span className="font-bold text-orange-400">({discount})</span>
      </div>
      {pincode && (
        <p className="text-sm text-zinc-600">
          Get it by {deliveryDateString} - {pincode}
        </p>
      )}
      <div className="mt-1 flex items-center gap-1 text-sm">
        <span>Seller:</span>
        <span className="text-core-theme font-bold">{seller}</span>
      </div>
    </div>
  );
}

export default ProductDescSummary;
