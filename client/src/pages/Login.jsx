import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const login = async (email, password, url, setErr) => {
    const data = {
        email: email,
        password: password,
    };
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const message = await response.json();
    if (!response.ok) {
        setErr(message.message);
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return message;
};

export const Login = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isCustomer, setIsCustomer] = useState(true);
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const isCustomer = searchParams.get('isCustomer') === null || searchParams.get('isCustomer') === "true" ;
    console.log([...searchParams.entries()], isCustomer, searchParams.get('isCustomer'))

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isCustomer) {
            const customer = await login(email, password, '/api/customers/login', setErr);
            onSubmit(customer._id);
            navigate(`/customer/${customer._id}`);
        } else {
            const restaurant = await login(email, password, '/api/restaurants/login', setErr);
            onSubmit(restaurant._id);
            navigate(`/restaurant/myrestaurant/${restaurant._id}`);
        }
    };

    if (isCustomer) {
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <p style={{ color: 'red' }}>{err}</p>
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
                    <button type="submit">Login</button><br />
                </form>
                <Link to='/register'><button>Register</button></Link><br />
                <button onClick={() => setSearchParams({isCustomer: !isCustomer})}>{isCustomer ? "Log in as a Restaurant" : "Log in as customer"}</button>
            </div>
        );
    } else {
        return (
            <div className="login">
                <h2>Login for restaurants</h2>
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
                    <button type="submit">Login</button><br />
                    <Link to='/register?isCustomer=false'><button>Register as a restaurant</button></Link><br />
                    <button onClick={() => setSearchParams({isCustomer: !isCustomer})}>{isCustomer ? "Log in as a Restaurant" : "Log in as customer"}</button>
                </form>
            </div>
        );
    }
};
