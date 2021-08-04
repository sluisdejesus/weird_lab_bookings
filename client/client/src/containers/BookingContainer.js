import {useState, useEffect} from 'react';
import { getBookings } from '../BookingService';
import BookingCard from '../components/BookingCard';
import BookingForm from '../components/BookingForm';


const BookingContainer = () => {
    const [bookings, setBookings] = useState([])
    const [selectedBooking, setSelectedBooking] = useState('');

    useEffect(() => {
        getBookings()
    },[])



    const addBooking = (booking) =>{
        const temp = bookings.map(booking =>booking);
        temp.push(booking);
        setBookings(temp);
      }
    
      const removeBooking = (id) => {
        const temp = bookings.map(booking =>booking);
        const indexToDel = temp.map(booking => booking._id).indexOf(id);
        console.log(indexToDel);
    
        temp.splice(indexToDel, 1);
        setBookings(temp);
      }



    return (
        <>
        <h4>This is a container</h4>
        <BookingForm addBooking = {addBooking}/>
        <BookingCard booking = {booking} key={booking._id} removeBooking = {removeBooking}/>
        </>
    )
}
export default BookingContainer;