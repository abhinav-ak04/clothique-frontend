import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../api/product';
import ProductDesc from '../ui/product-details/ProductDesc';
import ProductImages from '../ui/product-details/ProductImages';

function ProductDetails() {
  const { productId } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (product) return;

    setLoading(true);
    const fetchProduct = async () => {
      try {
        const { product } = await getProductById(productId);
        setProduct(product);
      } catch (e) {
        setError(`Error fetching product: ${e}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId, product]);

  if (loading) return <p className="p-10 text-xl">Loading Details...</p>;
  if (error) return <p className="p-10 text-red-500">Error occured: {error}</p>;

  const { imgs, mainCategory, subCategory, individualCategory, gender } =
    product;

  return (
    <div className="mx-7 mb-10">
      <div className="mt-7 mb-5 flex gap-2 text-sm text-zinc-900">
        <span>Home</span>
        <span>/</span>
        <span>{mainCategory}</span>
        <span>/</span>
        <span>
          {gender} {mainCategory}
        </span>
        <span>/</span>
        <span>{subCategory}</span>
        <span>/</span>
        <span>{individualCategory}</span>
      </div>
      <div className="flex">
        <ProductImages imgs={imgs} />
        <ProductDesc product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
