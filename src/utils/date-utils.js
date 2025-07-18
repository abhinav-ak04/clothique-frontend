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

export function getReadableDateString(date) {
  const transformedDate = new Date(date).toLocaleDateString('en-GB');
  return transformedDate;
}

export function getISODateStringFromReadable(dateString) {
  const [day, month, year] = dateString.split('/');
  const isoString = new Date(`${year}-${month}-${day}`).toISOString();
  return isoString;
}

export function getOrderStatus(expectedDeliveryDate) {
  const currentDate = new Date();
  const expectedDate = new Date(expectedDeliveryDate);

  // Strip the time portion by setting hours, minutes, seconds, milliseconds to 0
  currentDate.setHours(0, 0, 0, 0);
  expectedDate.setHours(0, 0, 0, 0);

  if (expectedDate < currentDate) return 'Delivered';
  if (expectedDate.getTime() === currentDate.getTime())
    return 'Out for Delivery';
  return 'Shipped';
}
