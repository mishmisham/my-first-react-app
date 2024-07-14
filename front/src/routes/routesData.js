import React, { lazy, Suspense, useMemo } from "react";
import { json } from "react-router-dom";
import { useSelector } from 'react-redux';
import Preloader from '@/components/primitives/Preloader/preloader';
import LayoutComponent from '@/layouts/default';

const PageComponent = ({component, bodyProps}) => {
  const CurrentComponent = lazy(()=>import('@/pages/'+component));
  return (<LayoutComponent {...bodyProps}>
      <Suspense
        isDeferred={true}
        fallback={ <Preloader height='300px' />}
      >
        <CurrentComponent />
      </Suspense>
    </LayoutComponent>)
}

// редирект если переходят по внутреннему роутеру
const redirectInComponent = (redirectOnlyAuthorized=true) => {
  const userID = useSelector((state) => state.user.about.id);
  try { 
    const willRedirect = redirectOnlyAuthorized ? userID > 0 : userID < 1;
   // useNavigate почему то не срабатывает
    if (willRedirect && undefined !== window) {
      window.location.replace('/')
    }
  } catch (err) {
    console.log("Oops, `window` is not defined")
  }
}

// это server side мидлвара
// (редиректим на главную если авторизован || не авторизован)
const redirectOnServerSide = (store, response, redirectOnlyAuthorized=true) => {
  const userID = store.getState().user.about?.id;
  const willRedirect = redirectOnlyAuthorized ? userID > 0 : userID < 1;
  if (willRedirect) {
    response.redirect(301, '/');
  }
}

export const routesArray = [
    {
      path: "/",
      name: 'Home',
      Component() {
        return <PageComponent
            component='PageFirst'
            bodyProps={{
              title:"Home page",
              description:'home page seo description'
            }}
          />;
      },
    },
    {
      path: "/second",
      name: 'Second page',
      // fetch на клиенте
      async loader() {
        return json({ message: "Welcome to React Router!" });
      },
      Component() {
        // let data = useLoaderData();
        // console.log(data)
        return <PageComponent
            component='PageSecond'
            bodyProps={{
              title:"Second page",
              description:'other page seo description'
            }}
          />;
      },
    },
    {
      path: "/media-pipe",
      name: 'Media pipe',
      Component() {
        return <PageComponent
          component='TestMediaPipe/TestMediaPipe'
          bodyProps={{
            title: "MediaPipe",
          }}
        />;
      }
    },
    {
      path: "/svg-drawer",
      name: 'Svg drawer',
      Component() {
        return <PageComponent
            component='SvgDrawerPage/SvgDrawerPage'
            bodyProps={{
              title: "Svg drawer",
            }}
          />;
      }
    },
    {
      path: '/webrtc',
      name: 'Webrtc',
      // когда доступен стор (на сервере)
      loadData: async (store, req, res) => {
        redirectOnServerSide(store, res, false);
      },

      Component() {
        redirectInComponent(false);

        return <PageComponent
          component='WebrtcTestPage/WebrtcTestPage'
          bodyProps={{
            title: "WebRTC",
          }}
        />;
      }
    },
    {
      path: '/auth',
      name: 'Auth',

      loadData: async (store, req, res) => {
        redirectOnServerSide(store, res, true);
      },

      Component() {
        redirectInComponent(true);
        
        return <PageComponent
          component='AuthPage/AuthPage'
          bodyProps={{
            title: "Auth",
          }}
        />;
      }
    }
];
