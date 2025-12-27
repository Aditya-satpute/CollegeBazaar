import react, { useState } from 'react';
import NavBar from './components/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import MyBookings from './pages/MyBookings';
import Cars
 from './pages/Cars';
function App (){

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return(
    <>
      {!isOwnerPath && <NavBar setShowLogin={ setShowLogin }/>}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/car-details/:id' element={<CarDetails />}/>
        <Route path='/cars' element={<Cars />}/>
        <Route path='/my-bookings' element={<MyBookings />}/>
      </Routes>
    </>
  )
}

export default App;