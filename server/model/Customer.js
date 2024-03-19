import mongoose from "mongoose";
const { Schema, model } = mongoose;

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  reservations: [
    {
      restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
      },
      tableId: {
        type: Number,
      },
      numberOfGuests: {
        type: Number
      },
      reservationTime: {
        type: Date
      }
    }
  ]
  // address: {
  //   country: {
  //     type: String,
  //     required: true,
  //   },
  //   postalCode: {
  //     type: Number,
  //     required: true,
  //   },
  //   city: {
  //     type: String,
  //     required: true,
  //   },
  //   street: {
  //     type: String,
  //     required: true,
  //   },
  //   houseNumber: {
  //     type: Number,
  //     required: true,
  //   }
  // },
  // dietaryPreference: {
  // }
});

export default model('Customer', customerSchema);