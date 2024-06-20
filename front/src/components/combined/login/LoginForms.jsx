import React, { useState, Suspense, lazy, useMemo } from 'react';
import Preloader from '@/components/primitives/Preloader/preloader';
import { LoginFormsContext } from './loginFormsContext';
import './loginForms.sass';

const LoginForms = () => {

  const [authMode, setAuthMode] = useState(true);

  const changeAuthMode = (mode = undefined) => {
    const newMode = mode !== undefined ? mode : !authMode;
    setAuthMode(newMode);
  }

  const contextData = useMemo(() => ({
    authMode,
    changeAuthMode,
  }), []);

  const CurrentForm = authMode ? lazy(()=> import('./forms/authForm/authForm')) : lazy(()=> import('./forms/registerForm/registerForm'));

  const buttonText = authMode ? 'Create account' : 'Go to login';
  const titleText = authMode ? 'Please login' : 'Registration';

  return (
    <div className='login-forms'>
      <h2>
        { titleText }
      </h2>

      <Suspense fallback={ <Preloader height='300px' />}>
        <LoginFormsContext.Provider value={contextData}>
          <CurrentForm/>
        </LoginFormsContext.Provider>
      </Suspense>

      <button 
        className="login-forms_mode-btn btn"
        onClick={e=>changeAuthMode()}
      >
        { buttonText }  
      </button>
    
    </div>
  );
};

export default LoginForms;
