import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CustomerFindRestaurant() {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/restaurants');
      const data = await response.json();
      setRestaurants(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Restaurant List</h1>
      <div>
        {restaurants.map((restaurant) => (
          <div className="restaurantList" key={restaurant._id}>
            <h2>{restaurant.restaurantName}</h2>
            <h3>Cuisine: {restaurant.cuisine}</h3>
            <h3>City: {restaurant.city}</h3>
            <h3>Opening hours: {restaurant.opening} - {restaurant.closing}</h3>
            <h3>E-mail: {restaurant.email}</h3>
            <h3>Phone: {restaurant.phoneNumber}</h3>
            <button><Link to={`/customer/${id}/${restaurant._id}`}>Reserve a table!</Link></button>
          </div>
        ))}
      </div>
    </>
  )
}

export default CustomerFindRestaurant;