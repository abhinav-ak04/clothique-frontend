import { useState } from 'react';
import SortCategory from './SortCategory';
import SortDropdown from './SortDropdown';

function SortSection() {
  const [showOptions, setShowOptions] = useState('');

  return (
    <div className="border-b-1 border-zinc-200 pb-2.5 pl-24">
      <div className="flex justify-between">
        <SortCategory
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
        <SortDropdown />
      </div>
      {showOptions && <div>{showOptions}</div>}
    </div>
  );
}

export default SortSection;
