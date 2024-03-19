function ReservationElement({reservation}){

    console.log(reservation);
    return (
        <div>
            <p>Restaurant: {reservation.restaurant.restaurantName}</p>
            <p>Guests: {reservation.numberOfGuests}</p>
            <p>Email: {reservation.restaurant.email}</p>
            <p>Phone number: +{reservation.restaurant.phoneNumber}</p>
        </div>
    )
}

export default ReservationElement;