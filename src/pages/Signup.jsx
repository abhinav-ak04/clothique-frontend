import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../ui/shared/TextInput';
import NavigateButton from '../ui/shared/buttons/NavigateButton';
import { isPasswordValid } from '../utils/password-verifier';
import { handleSignup } from '../api/auth';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();

  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const mobileNo = location?.state?.mobileNo;

  useEffect(() => {
    if (!mobileNo) navigate('/mobile-auth');
  }, [mobileNo, navigate]);

  async function handleSubmit() {
    const newErrors = {};

    const passError = isPasswordValid(newPass);
    if (passError) {
      newErrors.newPass = passError;
      setErrors(newErrors);
      return;
    }

    const isPassEqual = newPass === confirmPass;
    if (!isPassEqual) {
      newErrors.confirmPass = "The passwords doesn't match";
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const newAuthData = {
        mobileNo,
        password: newPass,
      };
      console.log('Form submitted successfully', newAuthData);

      const { auth } = await handleSignup(mobileNo, newPass);
      console.log('User signed up successfully', auth.user);

      navigate('/login', { state: { mobileNo } });
    } catch (error) {
      console.error('Error signing  up...', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="bg-login-background flex min-h-screen w-screen items-start justify-center">
        <div className="my-12 flex w-[450px] flex-col bg-white">
          <div className="mx-12 mb-12 flex flex-col">
            <h2 className="mt-8 mb-5 text-xl font-bold text-gray-700">
              Signup to your account
            </h2>

            <TextInput
              placeholder="Mobile Number"
              isRequired={true}
              isDisabled={true}
              value={mobileNo}
            />

            <TextInput
              placeholder="New Password"
              isRequired={true}
              name="newPass"
              setErrors={setErrors}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              errorMessage={errors.newPass}
            />

            <TextInput
              placeholder="Confirm Password"
              isRequired={true}
              name="confirmPass"
              setErrors={setErrors}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              errorMessage={errors.confirmPass}
            />

            <NavigateButton onClick={handleSubmit}>SIGNUP</NavigateButton>

            <p className="mt-5 align-middle text-sm text-gray-500">
              Have trouble signing up?
              <a href="" className="text-core-theme inline text-sm font-bold">
                {' '}
                Get Help{' '}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
