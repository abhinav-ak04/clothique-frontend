export function getDynamicFilters(products) {
  const counts = {
    gender: {},
    individualCategory: {},
    brand: {},
    color: {},
    discount: {},
  };

  const discountSlabs = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  products.forEach((product) => {
    // Gender(Type), Brand and individualCategory(Categories) Filter
    ['gender', 'brand', 'individualCategory'].forEach((key) => {
      const val = product[key];
      if (val) counts[key][val] = (counts[key][val] || 0) + 1;
    });

    // Color Filters
    const { color } = product;
    if (Array.isArray(color)) {
      color.forEach((clr) => {
        if (clr) counts.color[clr] = (counts.color[clr] || 0) + 1;
      });
    }

    // Discount Filters
    const { originalPrice, discountPrice } = product;
    if (!originalPrice || !discountPrice) return;

    const discountPercent = Math.round(
      ((originalPrice - discountPrice) / originalPrice) * 100,
    );

    discountSlabs.forEach((slab) => {
      if (discountPercent >= slab) {
        counts.discount[`${slab}% and above`] =
          (counts.discount[`${slab}% and above`] || 0) + 1;
      }
    });
  });

  return counts;
}
