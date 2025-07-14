import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { userData } from '../data/sample-user';
import MobileInput from '../ui/shared/MobileInput';
import TextInput from '../ui/shared/TextInput';
import { isDOBValid } from '../utils/dob-verifier';
import { isEmailValid } from '../utils/email-verifier';
import { isMobileNoValid } from '../utils/mobileno-verifier';
import { isNameValid } from '../utils/name-verifier';

function ProfileEdit() {
  const [name, setName] = useState(userData.name);
  const [mobileNo, setMobileNo] = useState(userData.mobileNo);
  const [email, setEmail] = useState(userData.email);
  const [gender, setGender] = useState(userData.gender);
  const [dob, setDob] = useState(userData.dob);
  const [alterMobNo, setAlterMobNo] = useState(userData.alternateMobileNo);

  const [errors, setErrors] = useState({});

  function resetStates() {}

  function handleSubmit(e) {
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

    console.log('Form submitted successfully');
    resetStates();
  }

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
