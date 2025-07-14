function NavigateButton({ onClick, children }) {
  return (
    <button
      className="bg-core-theme w-full cursor-pointer rounded-xs py-2 text-[15px] font-bold text-white hover:brightness-92"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default NavigateButton;
