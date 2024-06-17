import React from 'react';
import { Suspense, lazy, useState, useMemo } from 'react';
import Preloader from '@/components/primitives/Preloader/preloader';
import {
  gql,
  useSuspenseQuery,
  useLoadableQuery,
  createQueryPreloader,
  useReadQuery,
  useLazyQuery,
  preloadQuery
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

const UserItem = ({id, onNoData}) => {

  const [currentID, setCurrentID] = useState(0);

  const [getUser, { loading, error, data }] = useLazyQuery(USER_QUERY, {
    variables: { id: id }
  });

  const ready = data && !loading;

  if (!data && !loading && id !== currentID) {
    getUser()
    setCurrentID(id)
  }

  if (data) {
    console.log(id, data)
  }

  if (error) {
    onNoData();
  }

  return (<>
    {ready && !error && <div>{data.getUserByID.name}</div>}
  </>)

}

const PageSecond = () => {

  const [mode, setMode] = useState(false);
  const [currentID, setCurrentID] = useState(1);

  const CompA = mode ? lazy(()=> import('@/components/componentA')) : lazy(()=> import('@/components/componentB'))

  const setter = () => {
    const newMode = !mode;
    const newID = currentID + 1;
    setMode(newMode)
    setCurrentID(newID)
  }

  return (
    <div>
      <Suspense fallback={ <Preloader height='100px' />}>
        <UserItem
          id={currentID}
          onNoData={e=>setCurrentID(1)}
        />
      </Suspense>
      <span onClick={setter}>{mode ? 'da' : 'net'}</span>
      <Suspense fallback={ <Preloader height='100px' />}>
        <CompA />
      </Suspense>
    </div>
  );
};

export default PageSecond;
