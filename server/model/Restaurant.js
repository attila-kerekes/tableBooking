import mongoose from "mongoose";
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({

  restaurantName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  // address: {
  //   country: {
  //       type: String,
  //       required: true
  //   },
  //   city: {
  //       type: String,
  //       required: true
  //   },
  //   street: {
  //     type: String,
  //     required: true,
  //   },
  //   locationNumber: {
  //       type: Number,
  //       required: true,
  //     }
  // },
  opening: String,
  closing: String,
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
  },
  tables: [
    {
      available: Boolean,
      tableId: Number,
      seats: Number
    }
  ],
  reservations: [
    {
      customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
      },
      tableId: Number,
      numberOfGuests: Number
    }
  ]
});

export default model("Restaurant", restaurantSchema);
