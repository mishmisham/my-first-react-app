import React, { useState, Suspense, lazy } from 'react';
import Preloader from '@/components/primitives/Preloader/preloader';
import './authPage.sass';


const AuthPage = () => {

  const [authMode, setAuthMode] = useState(true);
  const [modeText, setModeText] = useState('Register account');

  const CurrentForm = authMode ? lazy(()=> import('@/components/combined/authForm/authForm')) : lazy(()=> import('@/components/combined/registerForm/registerForm'));

  const changeMode = () => {
    const newMode = !authMode;
    const newText = newMode ? 'Register account' : 'Go to authorization';
    setAuthMode(newMode);
    setModeText(newText);
  }
  
  return (
    <>

    <Suspense fallback={ <Preloader height='300px' />}>
      <CurrentForm />
    </Suspense>

    <button 
      className='auth-page_auth-btn'
      onClick={changeMode}
    >
        {modeText}
    </button>
    
    </>
  );
};

export default AuthPage;
