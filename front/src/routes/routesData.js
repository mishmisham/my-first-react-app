import React from "react";
import Layout from '../layouts/default';
import PageFirst from "../pages/PageFirst";
import PageSecond from "../pages/PageSecond";
import { json, useLoaderData }from "react-router-dom";
import { fetchCurrentUser } from '../store/actions/index'

export const routesArray = [
    {
      path: "/",
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
];
