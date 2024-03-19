import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const postDataRestaurant = async (email, password, name, number, openingTime, closingTime, cuisine, city) => {
    try {
      const data = {
        email: email,
        password: password,
        restaurantName: name,
        phoneNumber: number,
        opening: openingTime,
        closing: closingTime,
        cuisine: cuisine,
        city: city
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
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const postData = async (email, password, firstName, lastName, number) => {
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: number
    };
    const response = await fetch('/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const responseData = await response.json();
    return responseData;
};

export const Register = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [city, setCity] = useState('');
    // const [isCustomer, setIsCustomer] = useState(true);
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const isCustomer = searchParams.get('isCustomer') === null || searchParams.get('isCustomer') === "true" ;

    const handleSubmit = async (e) => {
        if (isCustomer) {
            e.preventDefault();
            const customer = await postData(email, password, firstName, lastName, number);
            onSubmit(customer._id);
            navigate(`/customer/${customer._id}`);
        } else {
            e.preventDefault();
            const restaurant = await postDataRestaurant(email, password, name, number, openingTime, closingTime, cuisine, city);
            console.log(restaurant);
            onSubmit(restaurant._id);
            navigate(`/restaurant/myrestaurant/${restaurant._id}`);
        }
    };

    if (isCustomer) {
    return (
        <div className="login">
            <h2>Register</h2>
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
                <br/>
                <label>
                    First name
                    <input
                        type="name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Last name
                    <input
                        type="name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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
                <button type="submit">Register</button><br/>
            </form>
                <Link to='/?isCustomer=true'><button>Log in</button></Link><br/>
                <button onClick={() => setSearchParams({isCustomer: !isCustomer})}>Register as a Restaurant</button>
        </div>
    );
    } else {
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
                    <label>
                        Cuisine
                        <input
                            type="name"
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        City
                        <input
                            type="name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Register</button> <br/>
                </form>
                    <Link to='/?isCustomer=false'><button>Log in as a restaurant</button></Link><br/>
                    <button onClick={() => setSearchParams({isCustomer: !isCustomer})}>Register as a customer</button>
            </div>
        );
    }
};
