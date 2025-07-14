export const isDOBValid = (dobString, isRequired) => {
  if (!isRequired && !dobString.trim()) return;

  // Regex to validate dd/mm/yyyy format
  const dobRegex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  // Check format first
  if (!dobRegex.test(dobString)) {
    return 'Invalid date format. Please use dd/mm/yyyy format.';
  }

  // Parse the date
  const parts = dobString.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are 0-based in JS
  const year = parseInt(parts[2], 10);
  const dobDate = new Date(year, month, day);

  // Check if the parsed date is valid (handles cases like 31/02/2020)
  if (
    dobDate.getFullYear() !== year ||
    dobDate.getMonth() !== month ||
    dobDate.getDate() !== day
  ) {
    return 'Invalid date. Please enter a valid date.';
  }

  // Check if date is in the future
  const today = new Date();
  if (dobDate > today) {
    return 'Date of birth cannot be in the future.';
  }
};
