import ErrorHandler from "../Error/error.js";
import {Reservation} from "../modules/reservationSchema.js"


export const sendReservation = async (req, res, next)=>{
    const {firstName, lastName, email, phone, date, time} = req.body;

    if( !firstName || !lastName || !email || !phone || !date || !time);{
        return next (new ErrorHandler("Please fill full reservation form!", 400));
    }
    try {
        await Reservation.create(firstName, lastName, email, phone, date, time);
        res.status(200),json({
            success: true,
            message:"Reservation Sent Successfully!"
        })
    } catch (error) {
        if(error.name === "Validation"){
            const validationErrors = Object.values(error.errors).map(err=>err.message)
        }
    }
   
};