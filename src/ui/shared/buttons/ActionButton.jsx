function ActionButton({ onClick, children }) {
  return (
    <button
      className="text-core-theme cursor-pointer text-sm font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;
