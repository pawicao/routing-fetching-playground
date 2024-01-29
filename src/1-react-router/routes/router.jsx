import { createBrowserRouter } from 'react-router-dom';
import { deferredLoader, normalLoader } from './loaders';
import Root from '../layout/Root';
import ErrorBoundary from '../error';

const DEV_imitateSlowData = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  })
}

const lazyRoute = (importFn, delay = 1500) => async () => {
  const component = await importFn();
  await DEV_imitateSlowData(delay)
  return { Component: component.default, ErrorBoundary: component.ErrorBoundary };
}

// eslint-disable-next-line
// const NormalRoute = () => import("./Normal.routes").then((module) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(module);
//     }, 1500);
//   });
// })

export const createRouter = () => createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        lazy: lazyRoute(() => import('../views/App'), 0),
      },
      // ! 1. MY WAY - Reduced boilerplate and easy imports
      {
        path: '/normal',
        exact: true,
        lazy: lazyRoute(() => import('../views/Normal')),
        loader: normalLoader
      },
      {
        path: '/deferred',
        exact: true,
        lazy: lazyRoute(() => import('../views/Deferred')),
        loader: deferredLoader
      },
      // ! 2. Traditional way - This below is the most regular way to do it
      // {
      //   path: "/normal",
      //   exact: true,
      //   lazy: OtherRoute,
      //   // ! If loader is put here this is an optimization cuz it will be run together with the chunk fetch, paralellly. So in the .routes file only Component is exported and possibly errorboundary
      //   loader: DEV_fetchData,
      // },
      // ! 3. for really hardcore situations we can also split them into different files and load both lazily
      // {
      //   path: "/deferred",
      //   exact: true,
      //   async loader({ request, params }) {
      //     let { loader } = await import("./something");
      //     return loader({ request, params });
      //   },
      //   lazy: DeferredRoute,
      // }
    ]
  }
]);