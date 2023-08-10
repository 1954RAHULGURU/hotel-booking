import React from 'react'
import './stytles/customer.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const Customer = ({rooms}) => {

let navigate = useNavigate();

  return (
    <div class="container-fluid">
    <img  src="https://hospitalitybizindia.com/wp-content/uploads/2022/08/OYO_Rooms_logo-992x680-1.webp" alt="" width={150} />

     
{/* cards */}

<div className='mappdivcustomer'>
    {rooms.map((room)=>(
      <div className='mapitemdiv'>
     <div class="card" style={{width:"18 rem"}}>
     <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." width={250} height={350}/>
     <div class="card-body">
       <h5 class="card-title">{room.name}</h5>
       <h5 class="card-title">{room.description}</h5>
       <h5 class="card-title">{room.price}</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a onClick={()=>navigate('/Bookings')} href="#" class="btn btn-primary">Book</a>
     </div>
   </div>
   </div>
))}
</div>

  </div>

  )
}

export default Customer
