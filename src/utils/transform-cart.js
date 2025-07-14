export function transformCartItems(items) {
  return items.map(({ _id, product, quantity, size, isSelected }) => ({
    _id,
    product,
    quantity,
    selectedSize: size || product?.sizes?.[0]?.size || '',
    isSelected: isSelected === undefined ? true : isSelected,
  }));
}
