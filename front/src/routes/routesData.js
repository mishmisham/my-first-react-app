import React, { lazy, Suspense } from "react";
import { json } from "react-router-dom";
import { useSelector } from 'react-redux';
import Preloader from '@/components/primitives/Preloader/preloader';
import PageFirst from '@/pages/PageFirst';

const LayoutComponent = lazy(()=>import('@/layouts/default'));
const SecondPage = lazy(()=>import('@/pages/PageSecond'));
const LoginPage = lazy(()=>import('@/pages/AuthPage/AuthPage'));

export const routesArray = [
    {
      path: "/",
      name: 'Home',
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
        loader() {
          return json({ message: "Welcome to React Router!" });
        },

        Component() {
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
