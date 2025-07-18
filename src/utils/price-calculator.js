export function getPriceSummary(items, donation) {
  const totalItems = items.length;

  const totalMRP = items.reduce((mrp, { quantity, product }) => {
    const { originalPrice } = product;
    return mrp + originalPrice * quantity;
  }, 0);

  const totalDiscount = items.reduce((discount, { quantity, product }) => {
    const { originalPrice, discountPrice } = product;
    return discount + (originalPrice - discountPrice) * quantity;
  }, 0);

  const platformFee = items.length ? 20 : 0;

  const finalPrice = totalMRP - totalDiscount + platformFee + (donation || 0);

  return { totalItems, totalMRP, totalDiscount, platformFee, finalPrice };
}
