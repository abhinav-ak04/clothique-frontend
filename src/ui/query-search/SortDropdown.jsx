import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import SortDropdownItem from './SortDropdownItem';

const dropdownItems = [
  { id: 1, title: 'Recommended', sortValue: 'recommended' },
  { id: 2, title: "What's New", sortValue: 'new' },
  { id: 3, title: 'Popularity', sortValue: 'popularity' },
  // { id: 4, title: 'Better Discount', sortValue: 'discount' },
  { id: 5, title: 'Price: High to Low', sortValue: 'price_desc' },
  { id: 6, title: 'Price: Low to High', sortValue: 'price_asc' },
  // { id: 7, title: 'Customer Rating', sortValue: 'rating' },
];

function SortDropdown() {
  const [sortby, setSortby] = useState('Recommended');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mr-10 w-64 cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center justify-between border-1 border-zinc-300 px-4 py-1.5">
        <div>
          <span className="text-[15px]">Sort by : </span>
          <span className="text-[15px] font-bold">{sortby}</span>
        </div>
        <IoIosArrowDown className="text-xl text-zinc-400" />
      </div>
      {isOpen && (
        <div className="absolute top-9 z-50 w-full border-1 border-t-0 border-zinc-300 bg-white py-3">
          {dropdownItems.map(({ id, title, sortValue }) => (
            <SortDropdownItem
              key={id}
              title={title}
              sortValue={sortValue}
              sortby={sortby}
              setSortby={setSortby}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
