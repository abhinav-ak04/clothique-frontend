export function sliceNumberToThousands(num) {
  return num > 1000 ? (num / 1000).toFixed(1) + 'K' : `${num}`;
}
