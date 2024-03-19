import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ReservationElement from "./ReservationElement";

function CustomerReservations() {
  const [reservations, setReservations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData () {
      const customerResponse = await fetch(`/api/customer/${id}`);
      const customer = await customerResponse.json();
      setReservations(customer.reservations);
    }
    fetchData()
  }, [id])

  return (
    <div>
      <h1>Reservations: {reservations.length ? reservations.length : 'You don\'t have any reservations!'}</h1>
      {reservations && <table>{reservations.map(reservation => <ReservationElement key={reservation._id} reservation={reservation}/>)}</table>}
    </div>
  )
}

export default CustomerReservations;
