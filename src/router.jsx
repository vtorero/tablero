import {createBrowserRouter, Navigate} from "react-router-dom";

import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
//import App from "./App"

import Login from "./views/Login";
import Signup from "./views/Signup";

import Dashboard from "./views/protected/Dashboard";
import Users from "./views/Users";
import UserForm from "./views/UserForm";
import NotFound from "./views/NotFound";

import Asistencias from './views/protected/asistencia/Asistencias';
import Pprrd from './views/protected/asistencia/Pprrd';
import Evar from './views/protected/asistencia/Evar';
import Otros from './views/protected/asistencia/Otros';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    //element: <App/>,
    children: [
      // {
      //   path: '/users',
      //   element: <Navigate to="/users"/>
      // },
      {
        path: '/tablero-renat/inicio',
        element: <Dashboard/>
      },
      //{
      //  path: '/tablero-renat/users',
      //  element: <Users/>
      //},
      //{
      //  path: '/tablero-renat/asistencias',
      //  element: <Asistencias/>
      //},
      {
        path: '/tablero-renat/pprrd',
        element: <Pprrd/>
      },
      {
        path: '/tablero-renat/evar',
        element: <Evar/>
      },
      {
        path: '/tablero-renat/otros',
        element: <Otros/>
      },
      //{
      //  path: '/users/new',
      //  element: <UserForm key="userCreate" />
      //},
      //{
      //  path: '/users/:id',
      //  element: <UserForm key="userUpdate" />
      //}
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/tablero-renat',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
