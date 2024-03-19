import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CustomerForm({ onUpdate }) {
  const [customerInfo, setCustomerInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/customer/${id}`);
      const customerData = await response.json();
      setCustomerInfo(customerData);
    }
    fetchData();
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();
    const patch = await fetch('/api/customer', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(customerInfo)
    });

    const response = await patch.json();
    if (response.status === 'updated') {
      onUpdate(true);
    } else {
      onUpdate(false);
    }

  }

  return (
    <div>
      <h1>Editor</h1>

      <form onSubmit={handleSubmit}>
        <label>First name: </label>
        <input type="text" name="firstName" value={customerInfo.firstName} onChange={(event) => { setCustomerInfo(prev => ({ ...prev, firstName: event.target.value })) }} />
        <br />
        <label>Last name: </label>
        <input type="text" name="lastName" value={customerInfo.lastName} onChange={(event) => { setCustomerInfo(prev => ({ ...prev, lastName: event.target.value })) }} />
        <br />
        <label>Email address: </label>
        <input type="email" name="email" value={customerInfo.email} onChange={(event) => { setCustomerInfo(prev => ({ ...prev, email: event.target.value })) }} />
        <br />
        <label>Phone number: </label>
        <input type="number" name="phoneNumber" value={Number(customerInfo.phoneNumber)} onChange={(event) => { setCustomerInfo(prev => ({ ...prev, phoneNumber: Number(event.target.value) })) }} />
        <br />
        <button>Update informations</button>
      </form>
    </div>
  )
}

export default CustomerForm;
