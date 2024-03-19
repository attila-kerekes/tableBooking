import React from "react";
import { Link } from "react-router-dom";

function CustomerButtons({id}) {

  return (
      <nav className="CustomerSidebar">
        <ul>
          <li>
            <button><Link to={`/customer/${id}/editor`}>Edit my details</Link></button>
          </li>
          <li>
            <button><Link to={`/customer/${id}/restaurants`}>Select restaurant</Link></button>
          </li>
          <li>
            <button><Link to={`/customer/${id}/reservations`}>My reservations</Link></button>
          </li>
        </ul>
      </nav>
  )
}

export default CustomerButtons;
