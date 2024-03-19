import { useState } from 'react';
import RestaurantForm from '../components/RestaurantForm';
import RestaurantNav from '../components/RestaurantNav';
import CustomerNavbar from '../component/customer_components/CustomerNavbar';

function UpdateRestaurant(){

    const [updateSuccess, setUpdateSuccess] = useState(null);

    return(
        <div className="update-restaurant restaurant-display">
            <CustomerNavbar />
            <RestaurantNav />
            {updateSuccess === null && <h1>Update restaurant information: </h1>}
            {updateSuccess === null ? <RestaurantForm onUpdate={(isSuccess) => {setUpdateSuccess(isSuccess)}}/> : updateSuccess === true  ? <h3>The updates was successfull!</h3> : <h3>Try again! Something went wrong!</h3>}

        </div>
    )
}

export default UpdateRestaurant;

