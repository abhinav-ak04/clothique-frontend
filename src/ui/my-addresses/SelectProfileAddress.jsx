import { useState } from 'react';
import { getSlicedString } from '../../utils/string-slicer';
import { setAddressDefault } from '../../api/address';
import { useUser } from '../../contexts/UserContext';

function SelectProfileAddress({
  heading,
  addressList,
  selectedAddress,
  setSelectedAddress,
}) {
  const { userId } = useUser();

  const [loading, setLoading] = useState(false);

  function handleChange(clickedId) {
    if (clickedId === selectedAddress) return;
    setSelectedAddress(clickedId);
  }

  const isSelected = (id) => id === selectedAddress;

  async function handleSetDefault(_id) {
    setLoading(true);
    try {
      const { address } = await setAddressDefault(_id, userId);
    } catch (error) {
      console.error('Error setting address default', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="mt-6 mb-2 text-[13px] font-bold text-zinc-900">
        {heading}
      </h2>
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
          isDefault,
        }) => {
          return (
            <div
              key={_id}
              onClick={() => handleChange(_id)}
              className="mb-4 w-full rounded-xs border-1 border-zinc-100 px-5 py-3 shadow-sm hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[14px] font-bold text-zinc-600">{name}</p>
                <p className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-bold text-zinc-500">
                  {addressType}
                </p>
              </div>
              <div className="py-1 text-[14.5px] leading-4 text-zinc-500">
                <p>
                  {isSelected(_id)
                    ? addressLine
                    : getSlicedString(addressLine, 34)}
                </p>
                <p>{locality}</p>
                <p>
                  {city} - {pincode}
                </p>
                {isSelected(_id) && (
                  <>
                    <p className="mb-3">{state}</p>
                    <p>Mobile: {mobileNo}</p>
                  </>
                )}
              </div>
              {isSelected(_id) && !isDefault && (
                <button
                  className="mt-3 cursor-pointer text-xs font-bold text-emerald-400"
                  onClick={() => handleSetDefault(_id)}
                >
                  MAKE THIS DEFAULT
                </button>
              )}
              {isSelected(_id) && (
                <div className="mt-4 flex w-full items-center border-t-1 border-zinc-200">
                  <button className="mt-2 w-1/2 cursor-pointer border-r-1 border-zinc-200 py-1 text-sm font-bold text-indigo-500">
                    EDIT
                  </button>
                  <button className="mt-2 w-1/2 cursor-pointer py-1 text-sm font-bold text-indigo-500">
                    REMOVE
                  </button>
                </div>
              )}
            </div>
          );
        },
      )}
    </div>
  );
}

export default SelectProfileAddress;
