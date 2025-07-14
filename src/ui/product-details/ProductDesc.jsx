import { useState } from 'react';
import Header from './product-desc/Header';
import Pricing from './product-desc/Pricing';
import Sizing from './product-desc/Sizing';
import Actions from './product-desc/Actions';
import Summary from './product-desc/Summary';
import Delivery from './product-desc/Delivery';
import Details from './product-desc/Details';
import Ratings from './product-desc/Ratings';

function ProductDesc({ product }) {
  const {
    _id,
    productId,
    brand,
    desc,
    details,
    mainCategory,
    subCategory,
    individualCategory,
    gender,
    sizeAndFit,
    materialAndCare,
    specs,
    seller,
    deliveryDuration,
    discountPrice,
    originalPrice,
    discount,
    ratings,
    sizes,
  } = product;

  const [sizeSelected, setSizeSelected] = useState(null);
  const [pincode, setPincode] = useState('');

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + deliveryDuration);

  const day = deliveryDate.toLocaleString('en-US', { weekday: 'short' }); // "Mon", "Tue", etc.
  const date = String(deliveryDate.getDate()).padStart(2, '0');
  const month = deliveryDate.toLocaleString('en-US', { month: 'short' }); // "Jan", "Feb", etc.

  const deliveryDateString = `${day}, ${date} ${month}`;

  return (
    <div className="ml-5 w-[42%]">
      <Header brand={brand} desc={desc} ratings={ratings} />
      <Pricing
        discountPrice={discountPrice}
        originalPrice={originalPrice}
        discount={discount}
      />
      <Sizing
        sizes={sizes}
        sizeSelected={sizeSelected}
        setSizeSelected={setSizeSelected}
      />
      <Actions _id={_id} sizeSelected={sizeSelected} />
      {sizeSelected && (
        <Summary
          discount={discount}
          discountPrice={discountPrice}
          originalPrice={originalPrice}
          seller={seller}
          deliveryDateString={deliveryDateString}
          pincode={pincode}
        />
      )}
      <Delivery
        deliveryDateString={deliveryDateString}
        pincode={pincode}
        setPincode={setPincode}
      />
      <Details
        details={details}
        sizeAndFit={sizeAndFit}
        materialAndCare={materialAndCare}
        specs={specs}
      />
      <Ratings ratings={ratings} />
    </div>
  );
}

export default ProductDesc;
