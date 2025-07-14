import { useState } from 'react';

function MobileInput({
  mobile,
  name,
  onChange,
  isRequired = false,
  errorMessage,
  setErrors,
}) {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="my-6">
      <div
        className={`flex items-center rounded-xs border-1 py-2 pl-2 ${!isActive ? 'border-zinc-200' : 'border-y-zinc-700'}`}
      >
        <InputSpan isActive={isActive}>+91</InputSpan>
        <InputSpan isActive={isActive}>|</InputSpan>

        <input
          value={mobile}
          className="ml-2 w-full placeholder-zinc-400 outline-none placeholder:text-[13px]"
          placeholder={
            isActive ? '' : 'Mobile Number' + (isRequired ? '*' : '')
          }
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
          onChange={(e) => {
            onChange(e);
            if (errorMessage) {
              setErrors((prev) => ({ ...prev, [name]: '' }));
            }
          }}
        />
      </div>
      {errorMessage && (
        <p className="ml-2 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

function InputSpan({ isActive, children }) {
  return (
    <span
      className={`mx-1 text-[13px] duration-150 ${!isActive && '-translate-x-0.5 text-zinc-400'}`}
    >
      {children}
    </span>
  );
}

export default MobileInput;
