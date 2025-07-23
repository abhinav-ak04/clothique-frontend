import { useState } from 'react';
import { getDeliveryDateString } from '../../utils/date-utils';
import Actions from './product-desc/Actions';
import Delivery from './product-desc/Delivery';
import Details from './product-desc/Details';
import Header from './product-desc/Header';
import Pricing from './product-desc/Pricing';
import Ratings from './product-desc/Ratings';
import Sizing from './product-desc/Sizing';
import Summary from './product-desc/Summary';

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

  const { deliveryDateString } = getDeliveryDateString(deliveryDuration);

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
