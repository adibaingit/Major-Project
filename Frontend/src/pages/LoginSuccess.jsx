import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Get the token from the URL (http://.../login-success?token=xyz)
    const token = searchParams.get('token');

    if (token) {
      // 2. Finally save it to localStorage!
      localStorage.setItem('token', token);
      
      // 3. Redirect the user to the home page or dashboard
      navigate('/');
      window.location.reload(); // Refresh to update Navbar state
    } else {
      navigate('/login?error=no_token');
    }
  }, [searchParams, navigate]);

  return (
    <div className="h-screen flex items-center justify-center font-outfit">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary animate-pulse">Authenticating with SafarAI...</h2>
        <p className="text-gray-500 mt-2">Setting up your personalized journey.</p>
      </div>
    </div>
  );
};

export default LoginSuccess;