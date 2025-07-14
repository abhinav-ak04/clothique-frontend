export const getSlicedString = (string, limit) =>
  string.length > limit ? string.slice(0, limit - 3) + '...' : string;
