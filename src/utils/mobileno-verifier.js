export const isMobileNoValid = (mobileNo, isRequired) => {
  const trimmedMobileNo = mobileNo.trim();

  if (!isRequired && !trimmedMobileNo) return;
  else if (!trimmedMobileNo) return 'Mobile number is required';
  else if (!/^[6-9]\d{9}$/.test(mobileNo)) {
    return 'Enter a valid 10-digit mobile number';
  }
};
