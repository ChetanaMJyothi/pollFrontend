import React, { } from 'react'
import Main from './Main';
import Login from './Auth/Login';
import Sign from './Auth/Sign';
import Option from './Poll/Option'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PollCreate from './Poll/PollCreate';
import PollList from './Poll/PollList';
import PollResult from './Poll/PollResult';
import RouteNotFound from './Poll/RouteNotFound';
const Layout = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/sign',
      element: <Sign />
    },
    
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: '/option',
      element: <Option />,
      children:[
        {
          path: 'create',
          element: <PollCreate />
        },
        {
          path: 'list',
          element: <PollList />
        },
        {
          path: 'result',
          element: <PollResult />,
          
        },
        {
          element: <RouteNotFound />
        }

      ]
    },


  ]);
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default Layout
