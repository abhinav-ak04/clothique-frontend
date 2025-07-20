export const isEmailValid = (email, isRequired) => {
  const trimmedEmail = email ? email.trim() : '';

  if (!isRequired && !trimmedEmail) return;
  else if (!trimmedEmail) return 'Email ID is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail))
    return 'Enter a valid Email ID';
};
