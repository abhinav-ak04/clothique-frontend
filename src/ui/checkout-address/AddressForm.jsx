import { useState } from 'react';
import { isMobileNoValid } from '../../utils/mobileno-verifier';
import { isNameValid } from '../../utils/name-verifier';
import { toTitleCase } from '../../utils/title-case-generator';
import NavigateButton from '../shared/buttons/NavigateButton';
import TextInput from '../shared/TextInput';

function AddressForm({ userId }) {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressType, setAddressType] = useState('Home');
  const [isDefault, setIsDefault] = useState(true);

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const apiKey = import.meta.env.VITE_PINCODE_API_KEY;
  if (!apiKey) {
    console.error(
      'API key is missing. Please set VITE_API_KEY in your .env file.',
    );
  }

  function resetStates() {
    setName('');
    setMobileNo('');
    setAddress('');
    setLocality('');
    setPincode('');
    clearCityState();
    setAddressType('Home');
    setIsDefault(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    const nameError = isNameValid(name, true);
    if (nameError) newErrors.name = nameError;

    const mobileNoError = isMobileNoValid(mobileNo, true);
    if (mobileNoError) newErrors.mobileNo = mobileNoError;

    if (!address.trim()) newErrors.address = 'Address is required';
    if (!locality.trim()) newErrors.locality = 'Locality is required';

    handlePincodeChange(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted successfully');
    const newAddress = {
      name,
      mobileNo,
      pincode,
      addressLine: address,
      locality,
      city,
      state,
      addressType,
      isDefault,
    };
    resetStates();
  }

  function clearCityState() {
    setCity('');
    setState('');
  }

  async function handlePincodeChange(newErrors) {
    if (!pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
      clearCityState();
      return;
    } else if (!/^\d+$/.test(pincode)) {
      newErrors.pincode = 'Pincode must contain only digits';
      clearCityState();
      return;
    } else if (pincode.length < 6) {
      newErrors.pincode = 'Pincode must be 6 digits long';
      clearCityState();
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd?api-key=${apiKey}&format=json&filters[pincode]=${pincode}`,
      );
      const data = await res.json();

      if (data && data.records && data.records.length > 0) {
        const record = data.records[0];
        setCity(toTitleCase(record.district));
        setState(toTitleCase(record.statename));
        newErrors.pincode = '';
      } else {
        console.warn('No records found for the provided pincode');
        newErrors.pincode = 'Invalid pincode. No records found';
        clearCityState();
      }
    } catch (err) {
      console.error('Error fetching city/state:', err);
      newErrors.pincode = 'Error fetching city/state. Please try again.';
      clearCityState();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 mb-8 ml-25 w-112 rounded-xs border-1 border-zinc-200 px-4 pt-6 pb-20"
    >
      <h1 className="text-xs font-bold text-zinc-800">CONTACT DETAILS</h1>
      <TextInput
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        isRequired={true}
        setErrors={setErrors}
        errorMessage={errors.name}
      />
      <TextInput
        placeholder="Mobile No"
        name="mobileNo"
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
        isRequired={true}
        setErrors={setErrors}
        errorMessage={errors.mobileNo}
      />

      <h1 className="mt-8 text-xs font-bold text-zinc-800">ADDRESS</h1>
      <TextInput
        placeholder="Pin Code"
        name="pincode"
        value={pincode}
        maxLength={6}
        onChange={(e) => setPincode(e.target.value)}
        isRequired={true}
        onBlur={handlePincodeChange}
        setErrors={setErrors}
        errorMessage={errors.pincode}
      />

      <TextInput
        placeholder="Address (House No, Building, Street, Area)"
        name="address"
        setErrors={setErrors}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        isRequired={true}
        errorMessage={errors.address}
      />
      <TextInput
        placeholder="Locality / Town"
        name="locality"
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
        isRequired={true}
        setErrors={setErrors}
        errorMessage={errors.locality}
      />

      <div className="flex items-center justify-between">
        <TextInput
          placeholder="City / District"
          value={city}
          isDisabled={true}
          isRequired={true}
        />
        <TextInput
          placeholder="State"
          value={state}
          isRequired={true}
          isDisabled={true}
        />
      </div>

      <h1 className="mt-8 text-xs font-bold text-zinc-800">ADDRESS TYPE</h1>
      <div className="mt-3 mb-8 ml-1 flex items-center gap-6">
        <div
          className="flex cursor-pointer items-center gap-2.5"
          onClick={() => {
            addressType !== 'Home' && setAddressType('Home');
          }}
        >
          <input
            type="radio"
            checked={addressType === 'Home'}
            className={`checked:bg-core-theme outline-core-theme h-[11px] w-[11px] cursor-pointer appearance-none rounded-full outline-[1.5px] outline-offset-[3.2px] transition-opacity outline-solid checked:border-transparent`}
          />
          <p className="text-zinc-700">Home</p>
        </div>
        <div
          className="flex cursor-pointer items-center gap-2.5"
          onClick={() => {
            addressType !== 'Office' && setAddressType('Office');
          }}
        >
          <input
            type="radio"
            checked={addressType === 'Office'}
            className={`checked:bg-core-theme outline-core-theme h-[11px] w-[11px] cursor-pointer appearance-none rounded-full outline-[1.5px] outline-offset-[3.2px] transition-opacity outline-solid checked:border-transparent`}
          />
          <p className="text-zinc-700">Office</p>
        </div>
      </div>
      <label className="relative mb-14 block w-full cursor-pointer pl-7 text-[14px] leading-none">
        Make this is as my default address
        <input
          type="checkbox"
          checked={isDefault}
          onChange={() => setIsDefault(!isDefault)}
          className="peer absolute h-0 w-0"
        />
        <span className="peer-checked:bg-core-theme after: absolute top-0 left-0 h-4 w-4 rounded-xs border border-zinc-400 peer-checked:border-0 after:absolute after:top-[2px] after:left-[6px] after:h-2.5 after:w-[5px] after:rotate-45 after:border-r-[2.6px] after:border-b-[2.6px] after:border-solid after:border-white after:content-['']"></span>
      </label>

      <div className="mx-3">
        <NavigateButton
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          SAVE ADDRESS
        </NavigateButton>
      </div>
    </form>
  );
}
export default AddressForm;
