import { product } from '../data/sample-product';
import ProductDesc from '../ui/product-details/ProductDesc';
import ProductImages from '../ui/product-details/ProductImages';

function ProductDetails() {
  // const { productId } = useParams();
  // const location = useLocation();
  // const [product, setProduct] = useState(location.state?.item || null);

  // useEffect(() => {
  //   // If product is null (user refreshed or came directly), fetch data
  //   if (!product) {
  //     fetch(`/api/products/${productId}`)
  //       .then(res => res.json())
  //       .then(data => setProduct(data));
  //   }
  // }, [productId, product]);

  // if (!product) return <p>Loading...</p>;

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
