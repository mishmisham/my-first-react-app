import React from 'react';
import { Link } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';

const PageSecond = () => {

  const [mode, setMode] = useState(false);

  const CompA = mode ? lazy(()=> import('../components/componentA')) : lazy(()=> import('../components/componentB'))

  // const setter = () => {
  //   console.log('mode', mode)
  //   setMode(!mode)
  // }
  return (
    <div>
      <span onClick={()=>{}}>{mode ? 'da' : 'net'}</span>
      <Suspense>
        <CompA />
      </Suspense>
    </div>
  );
};

export default PageSecond;
