import React, { useState } from "react";
import './stytles/admin.css';

const Admin = ({ addRoom, rooms }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // adding data
  const handleSubmit = () => {
    const newRoom = { name, description, price };
    addRoom(newRoom);
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div class="container-fluid text-bg-dark p-3  adminmaindiv">
    <img  src="https://hospitalitybizindia.com/wp-content/uploads/2022/08/OYO_Rooms_logo-992x680-1.webp" alt="" width={150} />

      <h3>Add Room</h3>
<br />
      <div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Name</span>
  <input value={name}  onChange={(e) => setName(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
<br />

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Description</span>
  <input  value={description} onChange={(e) => setDescription(e.target.value)}  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
<br />

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Price</span>
  <input value={price} onChange={(e) => setPrice(e.target.value)}  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
<br />

<button onClick={handleSubmit} type="button" class="btn btn-primary">Add room</button>
<br />


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
       <a href="#" class="btn btn-primary">Book</a>
     </div>
   </div>
   </div>
))}
</div>

    </div>
  );
};

export default Admin;
