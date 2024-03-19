import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReservationForm({ onUpdate }) {

  const { id, id2 } = useParams();
  const [reservationInfo, setReservationInfo] = useState({});
  const [restaurant, setRestaurant] = useState(null);

  reservationInfo.customerId = id;
  reservationInfo.restaurantId = id2;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/restaurant/${id2}`);
      const restaurantData = await response.json();
      setRestaurant(restaurantData);
    }
    fetchData();
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();
    const post = await fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(reservationInfo)
    });

    const response = await post.json();
    if (response.message === 'Table booked') {
      onUpdate(true);
    } else {
      onUpdate(false);
    }
  }

  return (
    <div>
      <h1>Reservation</h1>
      <div className="restaurantContainer">
        {restaurant &&
          <div className="restaurantDetails">
            <p>Restaurant name: {restaurant.restaurantName}</p>
            <p>Opening: {restaurant.opening}</p>
            <p>Closing: {restaurant.closing}</p>
            <p>Email address: {restaurant.email}</p>
            <p>Phone number: {restaurant.phoneNumber}</p>
            <form onSubmit={handleSubmit}>
              <label>How many guests can we expect? </label>
              <br />
              <input type="number" name="guestNumber" onChange={(event) => { setReservationInfo(prev => ({ ...prev, numberOfGuests: event.target.value })) }} />
              <br />
              <button>Send booking request</button>
            </form>
          </div>
        }
      </div>
    </div>
  )
}

export default ReservationForm;
