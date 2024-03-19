import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantNav from "../components/RestaurantNav";
import RestaurantReservationElements from "../components/RestaurantReservationElements";
import CustomerNavbar from '../component/customer_components/CustomerNavbar';

function RestaurantReservation(){
    const [reservations, setReservations] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchResorvation = async () => {
            const restaurantResponse = await fetch(`/api/restaurant/${id}`);
            const restaurant = await restaurantResponse.json();
            setReservations(restaurant.reservations);
        }
        fetchResorvation();
    }, [id])

    return(
        <div className="restaurant-reservation restaurant-display">
            <CustomerNavbar />
            <RestaurantNav />
            {reservations !== null && <h1>Reservations: </h1>}
            {reservations === null ? <h1>Loading...</h1> : reservations.length ? reservations.map(res => <RestaurantReservationElements key={Number(res.tableId)} customerData={res}/>) : <h2>The restaurant have no reservations!</h2>}
        </div>
    )
}

export default RestaurantReservation;