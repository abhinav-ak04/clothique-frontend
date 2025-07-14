import AlterButton from '../shared/buttons/AlterButton';

function SelectCheckoutAddress({
  heading,
  addressList,
  selectedAddress,
  setSelectedAddress,
}) {
  function handleChange(clickedId) {
    if (clickedId === selectedAddress) return;
    setSelectedAddress(+clickedId);
  }

  const isSelected = (id) => id === selectedAddress;

  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xs font-bold text-zinc-600">{heading}</h2>
      {addressList.map(
        ({
          id,
          name,
          mobileNo,
          address,
          pincode,
          locality,
          city,
          state,
          addressType,
        }) => (
          <div
            key={id}
            onClick={() => handleChange(id)}
            className={`mb-2 flex w-full cursor-pointer rounded-md border-1 border-zinc-200 px-5 py-4 ${isSelected(id) && 'shadow-[0_0_3px_rgba(0,0,0,0.2)]'}`}
          >
            <input
              type="radio"
              value={id}
              checked={isSelected(id)}
              className={`checked:bg-core-theme checked:outline-core-theme mt-1 mr-4 h-3 w-3 cursor-pointer appearance-none rounded-full outline outline-offset-3 outline-zinc-400 transition-opacity outline-solid checked:border-transparent`}
            />
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-sm font-bold text-zinc-800">{name}</span>
                <div className="rounded-full border-1 border-emerald-600 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                  {addressType}
                </div>
              </div>
              <div className="mb-3 text-[13px] text-zinc-600">
                <p>
                  {address}, {locality}
                </p>
                <p>
                  {city}, {state} - {pincode}
                </p>
              </div>
              <p className="text-[13px] font-bold text-zinc-700">
                <span className="font-normal text-zinc-600">Mobile: </span>
                {mobileNo}
              </p>
              {isSelected(id) && (
                <>
                  <p className="mt-4 text-sm text-zinc-600">
                    • Pay on Delivery available
                  </p>
                  <div className="mt-4 flex items-center gap-5">
                    <AlterButton isWide={true}>REMOVE</AlterButton>
                    <AlterButton isWide={true}>EDIT</AlterButton>
                  </div>
                </>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default SelectCheckoutAddress;
