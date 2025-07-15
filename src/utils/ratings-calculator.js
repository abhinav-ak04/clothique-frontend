export function getRatings(ratings) {
  const [five, four, three, two, one] = ratings;
  const totalRatings = one + two + three + four + five;
  const overallRating = (
    (5 * five + 4 * four + 3 * three + 2 * two + 1 * one) /
    totalRatings
  ).toFixed(1);

  return { overallRating, totalRatings };
}
