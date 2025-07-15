import { useSearchParams } from 'react-router-dom';

function SortDropdownItem({ title, sortValue, sortby, setSortby }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick() {
    setSortby(title);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('sortBy', sortValue);
    setSearchParams(newSearchParams);
  }
  return (
    <div
      className={`w-full p-2.5 text-sm hover:bg-zinc-100 ${sortby === title && 'bg-zinc-100'}`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
}

export default SortDropdownItem;
