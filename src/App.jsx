import {
  createBrowserRouter,
  Outlet,
  RouterProvider
}
  from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import FilmZone from './Pages/FilmZone'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <SignUp />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/filmzone',
          element: <FilmZone />
        }
      ]
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />

    </div>
  )
};

export default App

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
};