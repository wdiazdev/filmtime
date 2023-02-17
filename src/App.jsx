import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NavBar from './Components/NavBar';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Account from './Pages/Account';
import ProtectedRoute from './Components/ProtectedRoute';
import MoviePage from './Pages/MoviePage';
import { Player } from './Pages/Player';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route index path='/' element={<Movies />} />
        <Route exact path='/movie/:id' element={<MoviePage />} />
        <Route exact path='/series' element={<Series />} />
        <Route exact path='/player/:id' element={<Player />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        //! protected route
        <Route exact path='/mylist' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } />

        {/* <Route index path='/forgot-password' element={<ForgotPassword />} /> */}

        {/* <Route path='*' element={<Error404 />} /> */}
      </Routes>
    </div>
  )
};

export default App