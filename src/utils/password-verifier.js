export const isPasswordValid = (password) => {
  if (typeof password !== 'string') return 'Password must be a string';
  if (password.length <= 3) return 'Password must be more than 3 characters';
  if (/\s/.test(password)) return 'Password must not contain spaces';
  return null; // valid
};
