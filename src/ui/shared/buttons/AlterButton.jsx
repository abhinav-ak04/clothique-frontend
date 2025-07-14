function AlterButton({ isWide, onClick, children }) {
  return (
    <button
      className={`cursor-pointer rounded-sm border-1 border-zinc-600 px-3.5 py-2 text-xs font-bold text-zinc-700 ${isWide && 'tracking-wider'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default AlterButton;
