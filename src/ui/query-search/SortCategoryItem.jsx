import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function SortCategoryItem({ id, title, showOptions, setShowOptions }) {
  const isOpen = id === showOptions;

  function handleClick() {
    setShowOptions(isOpen ? '' : id);
  }

  return (
    <div
      className={`flex cursor-pointer items-center justify-between gap-[3px] rounded-2xl px-3 hover:bg-zinc-100 ${isOpen && 'bg-zinc-100'}`}
      onClick={handleClick}
    >
      <span className="text-sm">{title}</span>
      {isOpen ? (
        <IoIosArrowUp className="pt-1 text-zinc-400" />
      ) : (
        <IoIosArrowDown className="pt-1 text-zinc-400" />
      )}
    </div>
  );
}

export default SortCategoryItem;
