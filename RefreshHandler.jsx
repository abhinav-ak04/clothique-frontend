import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);

      const path = location.pathname;
      if (path === '/mobile-auth' || path === '/login' || path === '/signup')
        navigate('/', { replace: false });
    }
  }, [location.pathname, navigate, setIsAuthenticated]);

  return;
}

export default RefreshHandler;
