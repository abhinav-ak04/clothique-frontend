import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { getUserData, updateUserData } from '../api/user';
import { useUser } from '../contexts/UserContext';
import MobileInput from '../ui/shared/MobileInput';
import TextInput from '../ui/shared/TextInput';
import {
  getISODateStringFromReadable,
  getReadableDateString,
} from '../utils/date-utils';
import { isDOBValid } from '../utils/dob-verifier';
import { isEmailValid } from '../utils/email-verifier';
import { isMobileNoValid } from '../utils/mobileno-verifier';
import { isNameValid } from '../utils/name-verifier';

function ProfileEdit() {
  const { userId } = useUser();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    gender: '',
    dob: '',
    alternateMobileNo: '',
  });
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState(null);
  const [alterMobNo, setAlterMobNo] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const { user } = await getUserData(userId);

        const transformedDob = getReadableDateString(user.dob);
        const modifiedUserData = { ...user, dob: transformedDob };

        setUserData(modifiedUserData);

        setName(userData.name);
        setMobileNo(userData.mobileNo);
        setEmail(userData.email);
        setGender(userData.gender);
        setDob(userData.dob);
        setAlterMobNo(userData.alternateMobileNo);
      } catch (error) {
        console.error('Error occured fetching user data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [
    userData.alternateMobileNo,
    userData.dob,
    userData.email,
    userData.gender,
    userData.mobileNo,
    userData.name,
    userId,
  ]);

  const [errors, setErrors] = useState({});

  function resetStates() {}

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    const nameError = isNameValid(name, false);
    if (nameError) newErrors.name = nameError;

    const mobileNoError = isMobileNoValid(mobileNo, true);
    if (mobileNoError) newErrors.mobileNo = mobileNoError;

    const emailError = isEmailValid(email, false);
    if (emailError) newErrors.email = emailError;

    const dobError = isDOBValid(dob, false);
    if (dobError) newErrors.dob = dobError;

    const alternateMobileNoError = isMobileNoValid(alterMobNo, false);
    if (alternateMobileNoError)
      newErrors.alternateMobileNo = alternateMobileNoError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const newUserData = {
        name,
        mobileNo,
        email,
        gender,
        dob: getISODateStringFromReadable(dob),
        alternateMobileNo: alterMobNo,
      };
      console.log('Form submitted successfully', newUserData);

      const { user } = await updateUserData(userId, newUserData);
      console.log('Data updated successfully!!', user);

      navigate(`/my/profile`);
    } catch (error) {
      console.error('Error updating user details...', error);
    } finally {
      setLoading(false);
    }
    resetStates();
  }

  if (!userData.mobileNo) return <p>Loading Current Data...</p>;

  return (
    <div className="m-4 w-[730px] border-1 border-zinc-200">
      <div className="m-12">
        <h1 className="mt-2 border-b-1 border-zinc-200 pb-4 pl-6 text-xl font-bold text-zinc-800">
          Edit Details
        </h1>
        <TextInput
          placeholder="Full Name"
          name="name"
          setErrors={setErrors}
          value={name}
          onChange={(e) => setName(e.target.value)}
          errorMessage={errors.name}
        />
        <MobileInput
          name="mobileNo"
          setErrors={setErrors}
          mobile={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          isRequired={true}
          errorMessage={errors.mobileNo}
        />
        <TextInput
          placeholder="Email"
          name="email"
          setErrors={setErrors}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={errors.email}
        />
        <div className="flex w-full items-center rounded-xs border-1 border-zinc-200">
          <p
            className="flex w-1/2 cursor-pointer items-center justify-center border-r-1 border-zinc-200 p-2.5 text-sm text-zinc-800"
            onClick={() => {
              gender !== 'M' && setGender('M');
            }}
          >
            <div className="flex items-center gap-2">
              {gender === 'M' && <FaCheck className="text-core-theme" />}Male
            </div>
          </p>
          <p
            className="flex w-1/2 cursor-pointer items-center justify-center p-2.5 text-sm text-zinc-800"
            onClick={() => {
              gender !== 'F' && setGender('F');
            }}
          >
            <div className="flex items-center gap-2">
              {gender === 'F' && <FaCheck className="text-core-theme" />}Female
            </div>
          </p>
        </div>
        <TextInput
          placeholder="Birthday (dd/mm/yyyy)"
          name="dob"
          setErrors={setErrors}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          errorMessage={errors.dob}
        />
        <h2 className="py-1 text-sm font-bold text-zinc-700">
          Alternate Mobile Details
        </h2>
        <MobileInput
          name="alternateMobileNo"
          setErrors={setErrors}
          mobile={alterMobNo}
          onChange={(e) => setAlterMobNo(e.target.value)}
          errorMessage={errors.alternateMobileNo}
        />
        <button
          className="bg-core-theme mt-5 w-full cursor-pointer rounded-xs py-2 font-bold text-white"
          type="submit"
          onClick={handleSubmit}
        >
          SAVE DETAILS
        </button>
      </div>
    </div>
  );
}

export default ProfileEdit;
