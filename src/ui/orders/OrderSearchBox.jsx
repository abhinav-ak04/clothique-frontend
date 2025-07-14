import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

function OrderSearchBox() {
  const [query, setQuery] = useState('');
  return (
    <form className="flex shrink items-center rounded-sm border border-zinc-300 transition-all duration-200 focus-within:border focus-within:border-zinc-800">
      <a className="px-2 py-[10px] text-neutral-600">
        <IoSearchOutline strokeWidth={10} />
      </a>
      <input
        placeholder="Search in orders"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 bg-transparent px-4 py-2 text-sm placeholder:text-neutral-500 focus:outline-none sm:w-60"
      />
    </form>
  );
}

export default OrderSearchBox;
