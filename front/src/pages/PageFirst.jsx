import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'

const PageFirst = () => {
  
  const [mode, setMode] = useState('componentA');
  
  const refreshMode = () => {
    console.log('click')
    const newMode = mode === 'componentA' ? 'componentB' : 'componentA';
    setMode(newMode)
  }

  let DynamiComponent = loadable(() => import('../components/componentA'))
  if (mode === 'componentA') {
    DynamiComponent = loadable(() => import('../components/componentB'));
  } else {
    DynamiComponent = loadable(() => import('../components/componentA'));
  }

  return (
    <div className='bg-color'>
      <Link to="/second">second</Link>
      <br/>
      <span onClick={refreshMode}>Change</span>
      <DynamiComponent />
    </div>
  );
};

export default PageFirst;
