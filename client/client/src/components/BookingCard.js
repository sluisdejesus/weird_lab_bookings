import { deleteBooking } from "../BookingService";

const BookingCard = ({booking, removeBooking}) => {
    const handleDelete = () => {
        deleteBooking(booking._id)
        .then(() => {
            removeBooking(booking._id);
        })
    }
return (
    <>
    <h4>Name: {booking.name}</h4>
    <h5>Email: {booking.email_address}</h5>
    <h5>Checked in: {booking.checked_in}</h5>
    <button onClick={handleDelete}>🗑</button>
    </>
)
}

export default BookingCard;