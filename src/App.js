import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Admin from './components/Admin'
import Customer from './components/Customer'
import { useState } from 'react'
import AdminLogin from './components/AdminLogin'
import CustomerLogin from './components/CustomerLogin'
import Bookings from './components/Bookings'


const App = () => {

  // main state
  const [rooms, setRooms] = useState([]);

  // adding data
  const addRoom = (newRoom) => {
    setRooms([...rooms, newRoom]);
  };


  return (
  <Routes>
    <Route path='/' element={<Main></Main>}></Route>
    <Route path='/Admin' element={<Admin addRoom={addRoom} rooms={rooms}></Admin>}></Route>
    <Route path='/Customer' element={<Customer rooms={rooms}></Customer>}></Route>
    <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}></Route>
    <Route path='/CustomerLogin' element={<CustomerLogin></CustomerLogin>}></Route>
    <Route path='/Bookings' element={<Bookings></Bookings>}></Route>

    
  </Routes>
  )
}

export default App
