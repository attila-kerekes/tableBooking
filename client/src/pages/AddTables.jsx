import { useState } from "react";
import RestaurantNav from "../components/RestaurantNav";
import { useNavigate, useParams } from "react-router-dom";
import CustomerNavbar from '../component/customer_components/CustomerNavbar';


function AddTables(){
    const [table, setTable] = useState({available: true});
    const {id} = useParams();
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        const post = await fetch(`/api/table/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(table)
        });

        const response = await post.json();
        if(response.status === 'added'){
            navigate(`/restaurant/myrestaurant/${id}`);
        }
    }

    return(
        <div className="add-table restaurant-display">
            <CustomerNavbar />
            <RestaurantNav />
            <form onSubmit={handleSubmit}>
                <label>Table id: </label>
                <input type="number" value={table.id} required onChange={(event) => {setTable(prev => ({...prev, tableId: Number(event.target.value)}))}}/>
                <br />
                <label>Seats count: </label>
                <input type="number" required value={table.seats} onChange={(event) => {setTable(prev => ({...prev, seats: event.target.value}))}}/>
                <br />
                <button>Add table</button>
            </form>
        </div>
    )
}

export default AddTables;