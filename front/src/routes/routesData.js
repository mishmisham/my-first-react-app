import React from "react";
import Layout from '../layouts/default';
import PageFirst from "../pages/PageFirst";
import PageSecond from "../pages/PageSecond";
import AuthPage from "../pages/AuthPage/AuthPage";
import { json, useLoaderData }from "react-router-dom";
import { fetchCurrentUser } from '../store/actions/index'

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

        return <Layout
            title="Homepage"
            description='home page seo description'
          >
            <PageFirst />
          </Layout>;
      },
    },
    {
        path: "/second",
        name: 'Second page',
        loader() {
          return json({ message: "Welcome to React Router!" });
        },

        Component() {
          return <Layout
              title="Second page"
              description='other page seo description'
            >
              <PageSecond />
            </Layout>;
        },
    },
    {
      path: '/auth',
      name: 'Auth',
      Component() {
        return <Layout>
          <AuthPage />
        </Layout>
      }
    }
];
