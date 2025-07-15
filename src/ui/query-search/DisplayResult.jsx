import ResultProduct from './ResultProduct';
function DisplayResult({ products }) {
  return (
    <div className="m-6 flex flex-wrap justify-between gap-10">
      {products.map((product) => (
        <ResultProduct key={product.productId} product={product} />
      ))}
    </div>
  );
}

export default DisplayResult;
