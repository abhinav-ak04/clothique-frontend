function NavAccountItems({ description, children }) {
  return (
    <div
      className={`flex flex-col items-center border-b-2 border-b-white px-3 py-[21px] ${description === 'Profile' ? 'hover:border-b-profileAction' : ''}`}
    >
      {children}
      <span className="text-xs font-bold">{description}</span>
    </div>
  );
}
export default NavAccountItems;
