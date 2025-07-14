export const isNameValid = (name, isRequired) => {
  const trimmedName = name.trim();
  const length = trimmedName.length;

  if (!isRequired && !trimmedName) return;
  else if (!trimmedName) return 'Name is required';
  else if (length < 2) {
    return 'Name must be at least 2 characters long';
  } else if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
    return 'Name can only contain letters and spaces';
  }
};
