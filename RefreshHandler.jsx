import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from './src/contexts/UserContext';

function RefreshHandler() {
  const { userId } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // const token = localStorage.getItem('token');
    if (userId) {
      // setIsAuthenticated(true);

      const path = location.pathname;
      if (path === '/mobile-auth' || path === '/login' || path === '/signup')
        navigate('/', { replace: false });
    }
  }, [location.pathname, navigate, userId]);

  return null;
}

export default RefreshHandler;
