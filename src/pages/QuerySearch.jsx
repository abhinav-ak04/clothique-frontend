import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProducts } from '../api/product';
import DisplayResult from '../ui/query-search/DisplayResult';
import Filters from '../ui/query-search/Filters';
import SortSection from '../ui/query-search/SortSection';
import ActionButton from '../ui/shared/buttons/ActionButton';
import { getDynamicFilters } from '../utils/get-dynamic-filters';

function QuerySearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const nbHits = products.length;

  useEffect(() => {
    if (!searchParams.get('q')) console.error('No query string found');

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const queryString = searchParams.toString();
        const { products } = await searchProducts(queryString);

        setProducts(products);
        setFilters(getDynamicFilters(products));
      } catch (err) {
        console.error('Error fetching products', err);
        setProducts([]);
        setFilters({});
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  function handleClearFilters() {
    const query = searchParams.get('q');
    const newParams = new URLSearchParams();
    if (query) newParams.set('q', query);
    setSearchParams(newParams);
  }

  if (nbHits === 0) return <p className="m-3 text-xl">No products found...</p>;

  return (
    <div className="">
      <div className="mt-6 ml-6">
        <span className="text-lg font-bold">Item</span>
        <span className="text-lg text-zinc-500"> - {nbHits} items</span>
      </div>
      <div className="mt-5 flex">
        <div className="flex flex-col">
          <div className="flex w-56 justify-between border-b-1 border-zinc-200 pt-2 pr-3 pb-4 pl-6">
            <h1 className="text-base font-bold">FILTERS</h1>
            <ActionButton onClick={handleClearFilters}>CLEAR ALL</ActionButton>
          </div>
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-grow">
          <SortSection />
          <DisplayResult products={products} />
        </div>
      </div>
    </div>
  );
}

export default QuerySearch;
