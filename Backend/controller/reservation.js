import Errorhandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { Firstname, Lastname, email, phone, time, date } = req.body;
    if (!Firstname || !Lastname || !email || !phone || !time || !date) {
        return next(new Errorhandler("Please fill all the fields", 400));
    }
    try {
        const reservation = await Reservation.create({Firstname,Lastname, email, phone, time, date});
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
            
        });
    } catch (error) {
        if(error.name === "ValidationError") {
            const ValidateError = Object.values(error.errors).map((error) => error.message);
            return next(new Errorhandler(ValidateError.join(" , "), 400));
    }
    return next(error);
    }}