import React, { useState, Suspense, lazy } from 'react';
import Preloader from '@/components/primitives/Preloader/preloader';
import './authPage.sass';

const AuthPage = () => {

  const [authMode, setAuthMode] = useState(true);

  const CurrentForm = authMode ? lazy(()=> import('@/components/combined/authForm/authForm')) : lazy(()=> import('@/components/combined/registerForm/registerForm'));

  const changeMode = () => {
    const newMode = !authMode;
    setAuthMode(newMode);
  }
  
  return (
    <>

      <Suspense fallback={ <Preloader height='300px' />}>
        <CurrentForm />
      </Suspense>

      <button 
        className="auth-page_auth-btn btn"
        onClick={changeMode}
      >
        { authMode ? 'Create account' : 'Go to login'}  
      </button>
    
    </>
  );
};

export default AuthPage;
