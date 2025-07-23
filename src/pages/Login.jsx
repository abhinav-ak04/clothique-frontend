import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../ui/shared/TextInput';
import NavigateButton from '../ui/shared/buttons/NavigateButton';
import { isPasswordValid } from '../utils/password-verifier';
import { handleLogin } from '../api/auth';
import { useUser } from '../contexts/UserContext';
import { useLoader } from '../contexts/LoaderContext';
import Loader from '../ui/shared/Loader';

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({});

  const { setUserId, loading: userLoading } = useUser();
  const { isLoading, startLoading, stopLoading } = useLoader();

  const mobileNo = location?.state?.mobileNo;

  useEffect(() => {
    if (!mobileNo) navigate('/mobile-auth');
  }, [mobileNo, navigate]);

  async function handleSubmit() {
    const newErrors = {};

    const passError = isPasswordValid(pass);
    if (passError) {
      newErrors.pass = passError;
      setErrors(newErrors);
      return;
    }

    startLoading();
    try {
      const { jwtToken, user } = await handleLogin(mobileNo, pass);

      localStorage.setItem('token', jwtToken);
      localStorage.setItem('loggedInUser', user._id);

      setUserId(user._id);

      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
    } finally {
      stopLoading();
    }
  }

  if (userLoading || isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-login-background flex min-h-screen w-screen items-start justify-center">
        <div className="my-12 flex w-[450px] flex-col bg-white">
          <div className="mx-12 mb-12 flex flex-col">
            <h2 className="mt-8 mb-5 text-xl font-bold text-gray-700">
              Login to your account
            </h2>

            <TextInput
              placeholder="Mobile Number"
              isRequired={true}
              isDisabled={true}
              value={mobileNo}
            />

            <TextInput
              placeholder="Password"
              isRequired={true}
              name="pass"
              setErrors={setErrors}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              errorMessage={errors.pass}
            />

            <NavigateButton onClick={handleSubmit}>LOGIN</NavigateButton>

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
    </div>
  );
}

export default Login;
