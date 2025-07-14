import { NavLink } from 'react-router-dom';
import { userData } from '../data/sample-user';

function Profile() {
  const fieldMap = [
    { key: 'name', label: 'Full Name' },
    { key: 'mobileNo', label: 'Mobile Number' },
    { key: 'email', label: 'Email ID' },
    { key: 'gender', label: 'Gender' },
    { key: 'dob', label: 'Date of Birth' },
    { key: 'location', label: 'Location' },
    { key: 'alternateMobileNo', label: 'Alternate Mobile' },
  ];

  const genderMap = { M: 'MALE', F: 'FEMALE' };

  return (
    <div className="m-4 flex w-[730px] justify-center border-1 border-zinc-200 py-10">
      <div className="w-120">
        <h1 className="pointer-events-none mb-10 border-b-1 border-zinc-200 pb-7 pl-3 text-[19px] font-bold text-zinc-800">
          Profile Details
        </h1>
        {fieldMap.map(({ key, label }, idx) => (
          <div className="mb-6 flex text-zinc-900" key={idx}>
            <p className="w-48 pl-7">{label}</p>
            <p className="">
              {userData[key].length > 0
                ? key === 'gender'
                  ? genderMap[userData[key]]
                  : userData[key]
                : '- not added -'}
            </p>
          </div>
        ))}
        <div className="px-7">
          <NavLink
            className="bg-core-theme block w-full rounded-xs p-4 text-center font-bold text-white"
            to="edit"
          >
            EDIT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Profile;
