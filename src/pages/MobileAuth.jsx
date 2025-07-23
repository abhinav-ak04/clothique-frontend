import { useState } from 'react';
import NavigateButton from '../ui/shared/buttons/NavigateButton';
import Logo from '../ui/login/Logo';
import MobileInput from '../ui/shared/MobileInput';
import { useNavigate } from 'react-router-dom';
import { isMobileNoValid } from '../utils/mobileno-verifier';
import { isUserValid } from '../api/user';
import { useLoader } from '../contexts/LoaderContext';
import Loader from '../ui/shared/Loader';

function MobileAuth() {
  const navigate = useNavigate();

  const [mobileNo, setMobileNo] = useState(null);
  const [errors, setErrors] = useState({});
  const { isLoading, startLoading, stopLoading } = useLoader();

  async function handleSubmit() {
    const newErrors = {};

    const mobileError = isMobileNoValid(mobileNo, true);
    if (mobileError) newErrors.mobileNo = mobileError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    startLoading();
    try {
      const { exists } = await isUserValid(mobileNo);

      if (exists) navigate('/login', { state: { mobileNo } });
      else navigate('/signup', { state: { mobileNo } });
    } catch (error) {
      console.error('Error occured whil verifying mobile number', error);
    } finally {
      stopLoading();
    }
  }

  if (isLoading) return <Loader />;

  return (
    <div className="bg-login-background flex min-h-screen w-screen items-start justify-center">
      <div className="mt-12 mb-12 flex w-[450px] flex-col bg-white">
        <Logo />
        <div className="mx-12 mb-12 flex flex-col">
          <h2 className="mt-8 mb-5 text-xl font-bold text-gray-700">
            Login
            <span className="text-base font-medium text-gray-500"> or </span>
            Signup
          </h2>

          <MobileInput
            name="mobileNo"
            setErrors={setErrors}
            mobile={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            isRequired={true}
            errorMessage={errors.mobileNo}
          />

          <p className="mt-10 mb-5 align-middle text-sm text-gray-500">
            By continuing, I agree to the
            <a href="" className="text-core-theme inline text-sm font-bold">
              {' '}
              Terms of Use{' '}
            </a>
            &
            <a href="" className="text-core-theme inline text-sm font-bold">
              {' '}
              Privacy Policy{' '}
            </a>
          </p>

          <NavigateButton onClick={handleSubmit}>CONTINUE</NavigateButton>
          <p className="mt-5 align-middle text-sm text-gray-500">
            Have trouble logging in?
            <a href="" className="text-core-theme inline text-sm font-bold">
              {' '}
              Get Help{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileAuth;
