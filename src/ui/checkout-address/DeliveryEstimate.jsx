import { getDeliveryDateString } from '../../utils/date-utils';

function DeliveryEstimate({ selectedItems }) {
  return (
    <>
      <h2 className="my-3 text-[13px] font-bold text-zinc-600">
        DELIVERY ESTIMATES
      </h2>
      {selectedItems.map(({ _id, product }) => {
        const { imgs, deliveryDuration } = product;
        const deliveryDateString = getDeliveryDateString(deliveryDuration);
        return (
          <div
            key={_id}
            className="flex items-center gap-3 border-b-1 border-dashed border-zinc-200 py-1.5"
          >
            <img src={imgs[0]} className="h-auto w-10" />
            <p className="text-sm text-zinc-700">
              Estimated Delivery by{' '}
              <span className="font-bold">{deliveryDateString}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default DeliveryEstimate;
