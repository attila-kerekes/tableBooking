import mongoose from "mongoose";
const {Schema, model} = mongoose;

const reservationSchema = new Schema({
    restaurantId: String,
    customerId: String,
    tableId: String,
    numberOfGuests: Number,
})

export default model('Reservation', reservationSchema);