import React from 'react'

const Bookings = () => {
  return (
    <div class="container-fluid">
    <img  src="https://hospitalitybizindia.com/wp-content/uploads/2022/08/OYO_Rooms_logo-992x680-1.webp" alt="" width={150} />
      <h1>Customer Details</h1> <br />
      <input class="form-control" type="text" placeholder="Customer Name" aria-label="default input example"></input><br />
      <input class="form-control" type="text" placeholder="Phone No" aria-label="default input example"></input> <br />
      <input class="form-control" type="text" placeholder="Address" aria-label="default input example"></input> <br />
      <input class="form-control" type="text" placeholder="Email" aria-label="default input example"></input> <br />
      <select class="form-select" aria-label="Default select example">
  <option selected>Payment Method</option>
  <option value="1">Cash</option>
  <option value="2">Card</option>
  <option value="3">Net Banking</option>
</select> <br />
<button onClick={()=>alert("Booking Confirmed!!!")} type="button" class="btn btn-success">Confirm</button>
    
    </div>
  )
}

export default Bookings
