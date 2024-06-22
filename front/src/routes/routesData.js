import React, { lazy, Suspense } from "react";
import { json, useLoaderData }from "react-router-dom";
import Preloader from '@/components/primitives/Preloader/preloader';

const LayoutComponent = lazy(()=>import('@/layouts/default'));
const HomePage = lazy(()=>import('@/pages/PageFirst'));
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
              <Suspense isDeferred={true} fallback={ <Preloader height='300px' />}>
                <HomePage />
              </Suspense>
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
      Component() {
        return <LayoutComponent title="Login">
            <Suspense isDeferred={true} fallback={ <Preloader height='300px' />}>
              <LoginPage />
            </Suspense>
          </LayoutComponent>
      }
    }
];
