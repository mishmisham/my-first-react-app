import React, { Suspense, lazy } from 'react';
import Preloader from '@/components/primitives/Preloader/preloader';

const AuthPage = () => {
  
  const LoginForms = lazy(()=>import('@/components/combined/login/LoginForms'));

  return (
    <Suspense fallback={ <Preloader height='300px' />}>
      <LoginForms />
    </Suspense>
  );
};

export default AuthPage;
