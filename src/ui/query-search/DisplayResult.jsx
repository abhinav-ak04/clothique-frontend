import { results } from '../../data/sample-results';
import ResultProduct from './ResultProduct';
function DisplayResult() {
  return (
    <div className="m-6 flex flex-wrap justify-between gap-10">
      {results.map((product) => (
        <ResultProduct key={product.productId} product={product} />
      ))}
    </div>
  );
}

export default DisplayResult;
