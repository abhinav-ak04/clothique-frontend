export function getFirstAvailableSize(sizes) {
  let size = '';
  for (const { size, isAvailable } of sizes) {
    if (isAvailable) return size;
  }
  return '';
}
