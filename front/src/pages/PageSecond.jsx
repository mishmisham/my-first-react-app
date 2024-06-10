import React from 'react';
import { Link } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';

const PageSecond = () => {

  const [mode, setMode] = useState(false);

  let Comp = mode ? lazy(()=> import('../components/componentA')) : lazy(()=> import('../components/componentB'))

  const setter = () => {
    console.log('mode', mode)
    setMode(!mode)
  }
  return (
    <div>
      <h1>Second</h1>
      <Link to="/">home</Link>
      <span onClick={setter}>{mode ? 'da' : 'net'}</span>
      <Suspense>
        <Comp />
      </Suspense>
    </div>
  );
};

export default PageSecond;
