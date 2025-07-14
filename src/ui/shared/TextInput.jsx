import { useState } from 'react';

function TextInput({
  placeholder,
  name,
  setErrors,
  value,
  onChange,
  isDisabled = false,
  isRequired = false,
  errorMessage,
  maxLength = 50,
  onBlur,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative my-6`}>
      <input
        className={`w-full border-1 text-sm text-zinc-700 outline-none ${isFocused ? 'border-zinc-700' : 'border-zinc-200'} h-11 rounded-sm p-3 ${isDisabled && 'cursor-not-allowed'}`}
        onFocus={() => setIsFocused(true)}
        onBlur={async () => {
          setIsFocused(false);

          const pincodeError = {};
          if (onBlur) await onBlur(pincodeError);

          const error = pincodeError.pincode;
          if (error) setErrors((prev) => ({ ...prev, [name]: error }));
        }}
        value={value}
        onChange={(e) => {
          onChange(e);
          if (errorMessage) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
          }
        }}
        disabled={isDisabled}
        maxLength={maxLength}
      />

      <p
        className={`absolute left-3 bg-white px-1 text-[13px] text-zinc-400 duration-80 ${isFocused || value ? '-top-2.5 z-50' : 'top-3 -z-50'} ${isDisabled && 'cursor-not-allowed'} ${isFocused && 'text-zinc-700'}`}
      >
        {placeholder + (isRequired ? '*' : '')}
      </p>

      {errorMessage && (
        <p className="ml-2 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

export default TextInput;
