import React from 'react';
import { Suspense, lazy, useState } from 'react';
import Preloader from '@/components/primitives/Preloader/preloader';
import {
  gql,
  useSuspenseQuery
} from '@apollo/client';


const USER_QUERY = gql`
query Query($id: Int!) {

  getUserByID(id: $id) {
    name
  }

  getAllUsers {
    name
    id
  }
}

`;

const UserItem = ({ id }) => {
  const { data } = useSuspenseQuery(USER_QUERY, {
    variables: { id },
  });

  console.log(data);

  return (<div>sssssss</div>)

}

const PageSecond = () => {

  const [mode, setMode] = useState(false);

  const CompA = mode ? lazy(()=> import('@/components/componentA')) : lazy(()=> import('@/components/componentB'))

  const setter = () => {
    const newMode = !mode;
    setMode(newMode)
  }
  return (
    <div>
      <Suspense fallback={ <Preloader height='100px' />}>
        <UserItem id={2}/>
      </Suspense>
      <span onClick={setter}>{mode ? 'da' : 'net'}</span>
      <Suspense fallback={ <Preloader height='100px' />}>
        <CompA />
      </Suspense>
    </div>
  );
};

export default PageSecond;
