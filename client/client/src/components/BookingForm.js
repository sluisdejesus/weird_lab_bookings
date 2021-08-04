import {useState} from 'react';
import {postBooking} from '../BookingService'


const BookingForm = ({addBooking}) => {
    const [formData,setFormData] = useState ({})


    const onChange = (event) => {
    formData[event.target.id] = event.target.value;
    setFormData(formData);
    }

    const onSubmit = (event) =>{
    event.preventDefault();
    postBooking(formData)
    .then((data)=> {
        addBooking(data);
    })

 }

 return(
 <form onSubmit={onSubmit} id="bookings-form">
    <h2>Add a booking!</h2>
    <div className="booking_form">
        <label htmlFor="name">Name:</label>
        <input onChange={onChange} type="text" id="name" required/>
    </div>
    <div className = "booking_form">
        <label htmlFor="email_address">Email address:</label>
        <input onChange={onChange} type="text" id="email_address" required/>    
</div>
<div>
    <label htmlFor="checked_in">Checked in?</label>
    <select onChange={onChange}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
</div>
<input type ="submit" value="submit"/>
</form>



    )
}

export default BookingForm;