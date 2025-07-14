import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function NavSearchBox() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery('');
  }

  return (
    <form
      className="flex shrink items-center rounded-md bg-zinc-100 transition-all duration-300 focus-within:border focus-within:border-zinc-200 focus-within:bg-white"
      onSubmit={handleSubmit}
    >
      <a className="px-2 py-[10px] text-neutral-600">
        <IoSearchOutline strokeWidth={10} />
      </a>
      <input
        placeholder="Search for products, brands and more"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 bg-transparent px-4 py-2 text-sm placeholder:text-neutral-500 focus:outline-none sm:w-80"
      />
    </form>
  );
}

export default NavSearchBox;
