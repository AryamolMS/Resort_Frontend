import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Authentication from './components/Authentication';
import Homelog from './pages/Homelog';
import Bookings from './pages/Bookings';
import Reviews from './components/Reviews';
import Adminhome from './pages/Adminhome';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import ViewBookings from './pages/ViewBookings';
import Card from './components/Card';
import { useContext } from 'react';
import { isAuthtokenContext } from './context/Contextshare';
import BookingCard from './components/BookingCard';
import AdminCard from './components/AdminCard';
import AdminBookings from './pages/AdminBookings';


function App() {
  const {isAuthtken,setIsAuthtoken} = useContext(isAuthtokenContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/register' element={<Authentication register/>}/>
        <Route path='/user/login' element={<Authentication/>}/>
        <Route path='/homelogin' element={isAuthtken? <Homelog/>:<Home/>}  />
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/adminhome' element={isAuthtken?<Adminhome/>:<Home/>}/>
        <Route path='/imagecard' element={<ImageCard/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/viwebokings' element={<ViewBookings/>}/>
        <Route path='/bookincard' element={<BookingCard/>}/>
        <Route path='/admincard' element={<AdminCard/>}/>
        <Route path='/adminbookings' element={<AdminBookings/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
