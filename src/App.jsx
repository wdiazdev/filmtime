import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NavBar from './Components/NavBar';
import Player from './Pages/Player';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import MyList from './Pages/MyList';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route index path='/' element={<Home />} />
        {/* <Route index path='/coin/:id' element={<CoinPage />} /> */}
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/series' element={<Series />} />
        //! protected route
        <Route exact path='/mylist' element={
          <ProtectedRoute>
            <MyList />
          </ProtectedRoute>
        } />

        {/* <Route index path='/forgot-password' element={<ForgotPassword />} /> */}

        {/* <Route path='*' element={<Error404 />} /> */}
      </Routes>
    </div>
  )
};

export default App