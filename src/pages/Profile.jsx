import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import Loader from '../ui/shared/Loader';
import { getReadableDateString } from '../utils/date-utils';

function Profile() {
  const [user, setUser] = useState({});

  const { userData, loading } = useUser();

  useEffect(() => {
    if (!userData) return;

    if (userData.dob) {
      const transformedDob = getReadableDateString(userData.dob);
      const modifiedUserData = { ...userData, dob: transformedDob };
      setUser(modifiedUserData);
    } else {
      setUser(userData);
    }
  }, [userData]);

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

  if (!userData || loading) return <Loader />;

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
              {user[key] && user[key].length > 0
                ? key === 'gender'
                  ? genderMap[user[key]]
                  : user[key]
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
