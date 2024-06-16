import React, { lazy, Suspense } from "react";
// import Layout from '../layouts/default';
// import PageFirst from "../pages/PageFirst";
// import PageSecond from "../pages/PageSecond";
// import AuthPage from "../pages/AuthPage/AuthPage";
import { json, useLoaderData }from "react-router-dom";
import { fetchCurrentUser } from '../store/actions/index'
import Preloader from '@/components/primitives/Preloader/preloader';

const LayoutComponent = lazy(()=>import('../layouts/default'));
const HomePage = lazy(()=>import('../pages/PageFirst'));
const SecondPage = lazy(()=>import('../pages/PageSecond'));
const LoginPage = lazy(()=>import('../pages/AuthPage/AuthPage'));

export const routesArray = [
    {
      path: "/",
      name: 'Home',
      loader() {
        return json({ message: "Welcome to React Router!" });
      },

      loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),

      Component() {
        // let data = useLoaderData();
        // console.log(data)

        return <LayoutComponent
                title="Homepage"
                description='home page seo description'
              >
              <Suspense  fallback={ <Preloader height='300px' />}>
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
              <Suspense  fallback={ <Preloader height='300px' />}>
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
            <Suspense  fallback={ <Preloader height='300px' />}>
              <LoginPage />
            </Suspense>
          </LayoutComponent>
      }
    }
];
