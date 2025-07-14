import { useSearchParams } from 'react-router-dom';
import SortCategoryItem from './SortCategoryItem';

function SortCategory({ showOptions, setShowOptions }) {
  const [searchParams] = useSearchParams();
  const selectedValues = new Set(searchParams.getAll('type') || []);
  const isKid = selectedValues.has('Boys') || selectedValues.has('Girls');

  return (
    <div className="flex gap-12">
      <SortCategoryItem
        id="country"
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        title="Country of Origin"
      />
      {isKid ? (
        <SortCategoryItem
          id="age"
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          title="Age"
        />
      ) : (
        <SortCategoryItem
          id="size"
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          title="Size"
        />
      )}
    </div>
  );
}

export default SortCategory;
