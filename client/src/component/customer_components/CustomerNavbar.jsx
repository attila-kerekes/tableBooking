import React from "react";
import { Link } from "react-router-dom";

function CustomerNavbar({id}) {

  return (
    <nav className="CustomerNavbar">
      <button><Link to={`/`}>Logout</Link></button>
      <button><Link to={`/customer/${id}/about`}>About</Link></button>
      <button><Link to={`/customer/${id}/contact`}>Contact</Link></button>
    </nav>
  )
}

export default CustomerNavbar;

