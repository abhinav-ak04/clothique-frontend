import { useState } from 'react';
import AlterButton from '../shared/buttons/AlterButton';
import { getUserAddresses, removeAddress } from '../../api/address';
import { useAddresses } from '../../contexts/AddressContext';
import { useUser } from '../../contexts/UserContext';

function SelectCheckoutAddress({
  heading,
  addressList,
  selectedAddress,
  setSelectedAddress,
}) {
  const { setAddresses } = useAddresses();
  const { userId } = useUser();
  const [loading, setLoading] = useState(false);

  function handleChange(clickedId) {
    if (clickedId === selectedAddress) return;
    setSelectedAddress(clickedId);
  }

  async function handleRemove() {
    setLoading(true);

    try {
      const { deletedAddress } = await removeAddress(selectedAddress);
      console.log('Address deleted successfully');

      const { addresses } = await getUserAddresses(userId);
      setAddresses(addresses);
    } catch (error) {
      console.error('Error removing address', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleEdit() {}

  const isSelected = (id) => id === selectedAddress;

  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xs font-bold text-zinc-600">{heading}</h2>
      {addressList.map(
        ({
          _id,
          name,
          mobileNo,
          addressLine,
          pincode,
          locality,
          city,
          state,
          addressType,
        }) => {
          console.log(_id);
          return (
            <div
              key={_id}
              onClick={() => handleChange(_id)}
              className={`mb-2 flex w-full cursor-pointer rounded-md border-1 border-zinc-200 px-5 py-4 ${isSelected(_id) && 'shadow-[0_0_3px_rgba(0,0,0,0.2)]'}`}
            >
              <input
                type="radio"
                value={_id}
                checked={isSelected(_id)}
                className={`checked:bg-core-theme checked:outline-core-theme mt-1 mr-4 h-3 w-3 cursor-pointer appearance-none rounded-full outline outline-offset-3 outline-zinc-400 transition-opacity outline-solid checked:border-transparent`}
              />
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-bold text-zinc-800">
                    {name}
                  </span>
                  <div className="rounded-full border-1 border-emerald-600 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    {addressType}
                  </div>
                </div>
                <div className="mb-3 text-[13px] text-zinc-600">
                  <p>
                    {addressLine}, {locality}
                  </p>
                  <p>
                    {city}, {state} - {pincode}
                  </p>
                </div>
                <p className="text-[13px] font-bold text-zinc-700">
                  <span className="font-normal text-zinc-600">Mobile: </span>
                  {mobileNo}
                </p>
                {isSelected(_id) && (
                  <>
                    <p className="mt-4 text-sm text-zinc-600">
                      • Pay on Delivery available
                    </p>
                    <div className="mt-4 flex items-center gap-5">
                      <AlterButton isWide={true} onClick={handleRemove}>
                        REMOVE
                      </AlterButton>
                      <AlterButton isWide={true} onClick={handleEdit}>
                        EDIT
                      </AlterButton>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}

export default SelectCheckoutAddress;
