import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../api/product';
import { useLoader } from '../contexts/LoaderContext';
import ProductDesc from '../ui/product-details/ProductDesc';
import ProductImages from '../ui/product-details/ProductImages';
import Loader from '../ui/shared/Loader';

function ProductDetails() {
  const { productId } = useParams();
  const location = useLocation();

  const { isLoading, startLoading, stopLoading } = useLoader();

  const [product, setProduct] = useState(location.state?.product || null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (product) return;

    startLoading();
    const fetchProduct = async () => {
      try {
        const { product } = await getProductById(productId);
        setProduct(product);
      } catch (e) {
        setError(`Error fetching product: ${e}`);
      } finally {
        stopLoading();
      }
    };
    fetchProduct();
  }, [productId]);

  if (isLoading || !product) return <Loader />;

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
