import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true,
        minLenghth: [3, "Firstname must be at least 3 characters long"],
        maxLength: [30, "Firstname cannot exceed 30 characters"],

},
Lastname: {
        type: String,
        required: true,
        minLenghth: [3, "Firstname must be at least 3 characters long"],
        maxLength: [30, "Firstname cannot exceed 30 characters"],

},
email : {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter a valid email address"]
},
phone: {
    type: String,
    required: true,
    minLenghth: [11, "Phone number must be at least 11 characters long"],
},

time: {
    type: String,
    required: true,
},

date : {
    type: String,
    required: true,
}

});

export const Reservation = mongoose.model("Reservation", reservationSchema);