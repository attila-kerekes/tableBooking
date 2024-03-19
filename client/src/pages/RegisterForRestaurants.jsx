import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterForRestaurants = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');

    const postDataRestaurant = async () => {
        try {
          const data = {
            email: email,
            password: password,
            restaurantName: name,
            phoneNumber: number,
            opening: openingTime,
            closing: closingTime
          };
          const response = await fetch('/api/restaurants', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
          const responseData = await response.json().message;
          return responseData;
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
        setEmail('');
        setName('');
        setPassword('');
        setNumber('');
    };

    return (
        <div className="login">
            <h2>Register your restaurant</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    E-mail 
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password 
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Phone number
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Restaurant name
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Opening
                    <input
                        type="time"
                        value={openingTime}
                        onChange={(e) => setOpeningTime(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Closing
                    <input
                        type="time"
                        value={closingTime}
                        onChange={(e) => setClosingTime(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Register</button> <br/>
            </form>
                <Link to='/'>Log in as a customer</Link><br/>
                <Link to='/restaurants/login'>Login for Restaurants</Link>
        </div>
    );
};
