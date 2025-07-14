export function getDeliveryDateString(deliveryDuration) {
  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + deliveryDuration);

  const date = String(deliveryDate.getDate());
  const month = deliveryDate.toLocaleString('en-US', { month: 'short' }); // "Jan", "Feb", etc.
  const year = deliveryDate.getFullYear();

  const deliveryDateString = `${date} ${month} ${year}`;

  return deliveryDateString;
}
