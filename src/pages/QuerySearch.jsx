import { useSearchParams } from 'react-router-dom';
import DisplayResult from '../ui/query-search/DisplayResult';
import Filters from '../ui/query-search/Filters';
import SortSection from '../ui/query-search/SortSection';
import ActionButton from '../ui/shared/buttons/ActionButton';

function QuerySearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  console.log(query);

  function handleClearFilters() {
    setSearchParams(new URLSearchParams());
  }

  return (
    <div className="">
      <div className="mt-6 ml-6">
        <span className="text-lg font-bold">Item</span>
        <span className="text-lg text-zinc-500"> - 29671 items</span>
      </div>
      <div className="mt-5 flex">
        <div className="flex flex-col">
          <div className="flex w-56 justify-between border-b-1 border-zinc-200 pt-2 pr-3 pb-4 pl-6">
            <h1 className="text-base font-bold">FILTERS</h1>
            <ActionButton onClick={handleClearFilters}>CLEAR ALL</ActionButton>
          </div>
          <Filters />
        </div>
        <div className="flex-grow">
          <SortSection />
          <DisplayResult />
        </div>
      </div>
    </div>
  );
}

export default QuerySearch;
