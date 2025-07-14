import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import ActionButton from '../shared/buttons/ActionButton';
import { IoIosCheckbox } from 'react-icons/io';

function DonationSelector({ donation, setDonation }) {
  const donationMap = [
    { donationString: '₹10', donationValue: 10 },
    { donationString: '₹20', donationValue: 20 },
    { donationString: '₹50', donationValue: 50 },
    { donationString: '₹100', donationValue: 100 },
  ];

  function handleToggleDonation() {
    if (donation) setDonation(0);
    else setDonation(10);
  }

  return (
    <div className="mt-3 border-b-1 border-zinc-100 pb-5">
      <h2 className="text-[13px] font-bold text-zinc-600">
        SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
      </h2>
      <div className="mt-5 mb-4 flex items-center gap-3">
        <button onClick={handleToggleDonation} className="text-xl">
          {donation ? (
            <IoIosCheckbox className="text-core-theme" />
          ) : (
            <MdOutlineCheckBoxOutlineBlank />
          )}
        </button>
        <p className="text-sm font-bold text-zinc-800">
          Donate and make a difference
        </p>
      </div>
      <div className="mb-3.5 flex items-center gap-4">
        {donationMap.map(({ donationString, donationValue }, idx) => (
          <div
            key={idx}
            className={`cursor-pointer rounded-full border-1 px-3 py-2 text-sm font-bold ${donation === donationValue ? 'border-core-theme text-core-theme' : 'border-zinc-300 text-zinc-800'}`}
            onClick={() => setDonation(donationValue)}
          >
            {donationString}
          </div>
        ))}
      </div>
      <ActionButton>Know More</ActionButton>
    </div>
  );
}

export default DonationSelector;
