import { useState } from 'react';
import ReservationForm from './ReservationForm';

function ReservationPage(){

    const [updateSuccess, setUpdateSuccess] = useState(null);

    return(
        <div className="restaurantReservation">
            {updateSuccess === null && <h2>Book your table:</h2>}
            {updateSuccess === null ? <ReservationForm onUpdate={(isSuccess) => {setUpdateSuccess(isSuccess)}}/> : updateSuccess === true  ? <h2>The booking was successful!</h2> : <h2>Sorry! There is no available table with your requirements.</h2>}

        </div>
    )
}

export default ReservationPage;
