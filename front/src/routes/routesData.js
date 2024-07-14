import React, { lazy, Suspense } from "react";
import { json } from "react-router-dom";
import { useSelector } from 'react-redux';
import Preloader from '@/components/primitives/Preloader/preloader';
import PageFirst from '@/pages/PageFirst';

const LayoutComponent = lazy(()=>import('@/layouts/default'));
const SecondPage = lazy(()=>import('@/pages/PageSecond'));
const LoginPage = lazy(()=>import('@/pages/AuthPage/AuthPage'));
const TestMediaPipe = lazy(()=>import('@/pages/TestMediaPipe/TestMediaPipe'));
const SvgDrawerPage = lazy(()=>import('@/pages/SvgDrawerPage/SvgDrawerPage'));

export const routesArray = [
    {
      path: "/",
      name: 'Home',
      Component() {
        return <LayoutComponent
                title="Homepage"
                description='home page seo description'
              >
                <PageFirst />
            </LayoutComponent>;
      },
    },

    {
        path: "/second",
        name: 'Second page',
        async loader() {
          // console.log('LOADER', res)
          return json({ message: "Welcome to React Router!" });
        },
  
        loadData: async ({ dispatch }) => {
          // console.log('reload', res)
        },

        Component() {
          // let data = useLoaderData();
          // console.log(data)
          return <LayoutComponent
              title="Second page"
              description='other page seo description'
            >
              <Suspense isDeferred={true} fallback={ <Preloader height='300px' />}>
                <SecondPage />
              </Suspense>
            </LayoutComponent>
        },
    },

    {
      path: "/media-pipe",
      name: 'MediaPipe',
      Component() {
        return <LayoutComponent
              title="Test MediaPipe"
            >
              <Suspense isDeferred={true} fallback={ <Preloader height='300px' />}>
                <TestMediaPipe />
              </Suspense>
            </LayoutComponent>
      }
    },
    {
      path: "/svg-drawer",
      name: 'SvgDrawerPage',
      Component() {
        return <LayoutComponent
              title="Svg drawer"
            >
              <Suspense isDeferred={true} fallback={ <Preloader height='300px' />}>
                <SvgDrawerPage />
              </Suspense>
            </LayoutComponent>
      }
    },

    {
      path: '/auth',
      name: 'Auth',

      // это server side мидлвара
      // (редиректим на главную если авторизован)
      loadData: async (store, req, res) => {
        if (store.getState().user.about?.id > 0) {
          res.redirect(301, '/');
        }
      },

      Component() {
        // редирект авторизованным если переходят по внутреннему роутеру
        const userID = useSelector((state) => state.user.about.id);
        try { 
         // useNavigate почему то не срабатывает
          if (userID > 0 && window) {
            window.location.replace('/')
          }
        } catch (err) {
          console.log("Oops, `window` is not defined")
        }
        
        return <LayoutComponent title="Login">
            <Suspense isDeferred={true} fallback={ <Preloader height='300px' />}>
              <LoginPage />
            </Suspense>
          </LayoutComponent>
      }
    }
];
